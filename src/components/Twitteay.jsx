import { Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ProfileIcon from "../image/Profile.png";
import { useState, useCallback } from "react";
import html2canvas from "html2canvas";
import { FaRegComment, FaRetweet, FaRegHeart, FaRegEnvelope } from "react-icons/fa";
import "./Twitteay.css";
import download from "downloadjs";

export default function Twitteay() {
    const [photo, setPhoto] = useState();
    const [name, setName] = useState('Syafwan');
    const [username, setUsername] = useState('capwannnn');
    const [tweet, setTweet] = useState('hii!!! thank you for visiting "Twitteay"');

    (name == "") && setName('Syafwan');
    (username == "") && setUsername('capwannnn');
    (tweet == "") && setTweet('hii!!! thank you for visiting "Twitteay"');

    const captureTwitteay =  useCallback(async () => {
        const tweet = await html2canvas(document.querySelector('.capture'));
        const dataURL = tweet.toDataURL('image/png');
        download(dataURL, 'download.png', 'image/png');
    }, []);

    const photoPreview = (e) => {
        if(e.target.files && e.target.files.length > 0) {
            setPhoto(e.target.files[0]);
        }
    };

    const resetAll = () => {
        setPhoto();
        setName('Syafwan');
        setUsername('capwannnn');
    };

    return (
        <>
            <Helmet>
                <title>Twitteay</title>
            </Helmet>
            <Container fluid className="ty-navlist-action">
                <Link className="ty-btn-back" to="/">Back</Link>
                <div>
                    <button className="ty-btn-reset" onClick={resetAll}>Reset</button>
                    <a href="#" className="ty-btn-download" onClick={captureTwitteay}>Download</a>
                </div>
            </Container>
            <Container className="ty-preview">
                <div className="ty-preview-wrapper rounded shadow-sm capture">
                    <div className="ty-preview-header">
                        {photo ? (
                            <img className="ty-photo-profile rounded-circle" src={URL.createObjectURL(photo)} alt="Photo" />
                        ) : (
                            <img className="ty-photo-profile rounded-circle" src={ProfileIcon} alt="Photo" />
                        )}
                        <div className="ty-preview-header-username">
                            <h2 className="ty-name-user">{name}</h2>
                            <h2 className="ty-username-user">@{username}</h2>
                        </div>
                    </div>
                    <div className="ty-preview-body">
                        <p className="ty-tweet">{tweet}</p>
                        <p className="ty-date-tweet">1:10 PM ∙ 28/07/2022 ∙ Made With Twitteay</p>
                    </div>
                    <div className="ty-preview-footer">
                        <div className="ty-line"></div>
                        <div className="ty-footer-content">
                            <p className="ty-retweets"><span className="ty-bold-text">2.096</span> Retweets</p>
                            <p className="ty-likes"><span className="ty-bold-text">7.000</span> Likes</p>
                        </div>
                        <div className="ty-line"></div>
                        <div className="ty-action-icon">
                            <FaRegComment className="ty-gray" />
                            <FaRetweet className="ty-gray" />
                            <FaRegHeart className="ty-gray" />
                            <FaRegEnvelope className="ty-gray" />
                        </div>
                    </div>
                </div>
            </Container>
            <Container fluid className="ty-edit">
                <h4 className="ty-edit-title">Edit Your Twitteay</h4>
                <div className="ty-title-line"></div>
                <div className="ty-edit-content">
                    <div className="ty-left-edit">
                        <Form.Group className="mb-2">
                            <Form.Label className="ty-label-input mb-1" htmlFor="photo">Photo Profile</Form.Label>
                            <Form.Control className="shadow-none" type="file" accept="image/*" size="sm" id="photo" onChange={photoPreview} />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className="ty-label-input mb-1" htmlFor="name">Name (Max 28 Char)</Form.Label>
                            <Form.Control className="shadow-none" type="text" size="sm" id="name" placeholder="*Syafwan" maxLength="28" autoComplete="off" onChange={
                                function(e) {
                                    setName(e.target.value);
                                }
                            } />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className="ty-label-input mb-1" htmlFor="username">Username (Max 16 Char)</Form.Label>
                            <Form.Control className="shadow-none" type="text" size="sm" id="username" placeholder="*@capwannnn" maxLength="16" autoComplete="off" onChange={
                                function(e) {
                                    setUsername(e.target.value);
                                }
                            } />
                        </Form.Group>
                    </div>
                    <div className="ty-middle-edit">
                        <Form.Group className="mb-2">
                            <Form.Label className="ty-label-input mb-1" htmlFor="username">Tweet (Max 500 Char)</Form.Label>
                            <Form.Control className="shadow-none" as="textarea" size="sm" id="username" placeholder="*hii!!! thank you for visiting 'Twitteay'" maxLength="500" autoComplete="off" onChange={
                                function(e) {
                                    setTweet(e.target.value);
                                }
                            } />
                        </Form.Group>
                    </div>
                    <div className="ty-right-edit">

                    </div>
                </div>
            </Container>
        </>
    )
}