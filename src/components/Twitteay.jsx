import { FaRegComment, FaRetweet, FaRegHeart, FaHeart } from "react-icons/fa";
import { Container, Form, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState, useCallback } from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NumberFormat from "react-number-format";
import ProfileIcon from "../image/Profile.png";
import html2canvas from "html2canvas";
import download from "downloadjs";
import "./Twitteay.css";

export default function Twitteay() {
    const [verified, setVerified] = useState(false);
    const [photo, setPhoto] = useState();
    const [name, setName] = useState('Syafwan');
    const [username, setUsername] = useState('capwannnn');
    const [theme, setTheme] = useState('ty-light-theme');
    const [source, setSource] = useState('Made with Twitteay');
    const [tweet, setTweet] = useState('hii!!! thank you for visiting "Twitteay"');
    const [liked, setLiked] = useState(false);
    const [time, setTime] = useState('00:00');
    const [date, setDate] = useState('2004-12-25');
    const [retweets, setRetweets] = useState('1,000');
    const [likes, setLikes] = useState('1,000');

    const split = date.split('-');
    const newFormat = split[2] + '/' + split[1] + '/' + split[0];

    const listTheme = [
        { name: 'Light', value: 'ty-light-theme' },
        { name: 'Dim', value: 'ty-dim-theme' },
        { name: 'Dark', value: 'ty-dark-theme' },
        { name: 'Pink', value: 'ty-pink-theme' },
        { name: 'Lime', value: 'ty-lime-theme' },
        { name: 'Mocca', value: 'ty-mocca-theme' }
    ];

    (name == "") && setName('Syafwan');
    (username == "") && setUsername('capwannnn');
    (tweet == "") && setTweet('hii!!! thank you for visiting "Twitteay"');
    (retweets == "") && setRetweets('1,000');
    (likes == "") && setLikes('1,000');

    const captureTwitteay =  useCallback(async () => {
        const tweet = await html2canvas(document.querySelector('.capture'));
        const dataURL = tweet.toDataURL('image/png');
        download(dataURL, 'download.png', 'image/png');
    }, []);

    const resetAll = () => {
        setVerified(false);
        setPhoto();
        setName('Syafwan');
        setUsername('capwannnn');
        setTheme('ty-light-theme');
        setSource('Made with Twitteay');
        setTweet('hii!!! thank you for visiting "Twitteay"');
        setLiked(false);
        setTime('00:00');
        setDate('2004-12-25');
        setRetweets('1,000');
        setLikes('1,000');
    };

    const photoPreview = (e) => {
        if(e.target.files && e.target.files.length > 0) {
            setPhoto(e.target.files[0]);
        }
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
                <div className={"ty-preview-wrapper shadow-sm capture " + theme}>
                    <div className="ty-preview-header">
                        {photo ? (
                            <img className="ty-photo-profile rounded-circle" src={URL.createObjectURL(photo)} alt="Photo" />
                        ) : (
                            <img className="ty-photo-profile rounded-circle" src={ProfileIcon} alt="Photo" />
                        )}
                        <div className="ty-preview-header-username">
                            <h2 className="ty-name-user">{name} 
                                {verified && (
                                    <>
                                        &nbsp;<MdVerified className="ty-verified-icon" />
                                    </>
                                )}
                            </h2>
                            <h2 className="ty-username-user">@{username}</h2>
                        </div>
                    </div>
                    <div className="ty-preview-body">
                        <p className="ty-tweet">{tweet}</p>
                        <p className="ty-date-tweet">{time} ∙ {newFormat} ∙ {source}</p>
                    </div>
                    <div className="ty-preview-footer">
                        <div className="ty-line"></div>
                        <div className="ty-footer-content">
                            <p className="ty-retweets"><span className={"ty-bold-text " + theme}>{retweets}</span> Retweets</p>
                            <p className="ty-likes"><span className={"ty-bold-text " + theme}>{likes}</span> Likes</p>
                        </div>
                        <div className="ty-line"></div>
                        <div className="ty-action-icon">
                            <FaRegComment className="ty-gray" />
                            <FaRetweet className="ty-gray" />
                            {liked ? (
                                <FaHeart className="ty-liked" />
                            ) : (
                                <FaRegHeart className="ty-gray" />
                            )}
                        </div>
                    </div>
                </div>
            </Container>
            <Container fluid className="ty-edit">
                <h4 className="ty-edit-title">Edit Your Twitteay</h4>
                <div className="ty-title-line"></div>
                <div className="ty-edit-content">
                    <div className="ty-left-edit">
                        <Form.Label className="ty-label-input mb-1" htmlFor="verified">Verified Icon</Form.Label>
                        <ToggleButton className="mb-2 d-block shadow-none" id="verified" type="checkbox" variant="outline-info" size="sm" checked={verified} onChange={(e) => setVerified(e.currentTarget.checked)}>
                            Verified
                        </ToggleButton>
                        <Form.Group className="mb-2">
                            <Form.Label className="ty-label-input mb-1" htmlFor="photo">Photo Profile</Form.Label>
                            <Form.Control className="shadow-none" type="file" accept="image/*" size="sm" id="photo" onChange={photoPreview} />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className="ty-label-input mb-1" htmlFor="name">Name (Max 28 Char)</Form.Label>
                            <Form.Control className="shadow-none" type="text" size="sm" id="name" placeholder="*Syafwan" maxLength="28" autoComplete="off" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className="ty-label-input mb-1" htmlFor="username">Username (Max 16 Char)</Form.Label>
                            <Form.Control className="shadow-none" type="text" size="sm" id="username" placeholder="*@capwannnn" maxLength="16" autoComplete="off" onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>
                    </div>
                    <div className="ty-middle-edit">
                        <Form.Label className="ty-label-input mb-1">Theme</Form.Label>
                        <ButtonGroup className="mb-2 d-block" size="sm">
                            {listTheme.map((radio, idx) => (
                            <ToggleButton
                                className="shadow-none"
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant="outline-info"
                                name="radio"
                                value={radio.value}
                                checked={theme === radio.value}
                                onChange={(e) => setTheme(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                            ))}
                        </ButtonGroup>
                        <Form.Label className="ty-label-input mb-1">Source</Form.Label>
                        <Form.Select className="mb-2 shadow-none" size="sm" onChange={(e) => setSource(e.currentTarget.value)}>
                            <option>Made with Twitteay</option>
                            <option value="Twitteay for iPhone">Twitteay for iPhone</option>
                            <option value="Twitteay for Android">Twitteay for Android</option>
                            <option value="Twitteay for Windows Phone">Twitteay for Windows Phone</option>
                            <option value="Twitteay for Web">Twitteay for Web</option>
                        </Form.Select>
                        <Form.Group className="mb-2">
                            <Form.Label className="ty-label-input mb-1" htmlFor="tweet">Tweet (Max 500 Char)</Form.Label>
                            <Form.Control className="shadow-none" as="textarea" size="sm" id="tweet" placeholder="*hii!!! thank you for visiting 'Twitteay'" maxLength="500" autoComplete="off" onChange={(e) => setTweet(e.target.value)} />
                        </Form.Group>
                    </div>
                    <div className="ty-right-edit">
                        <Form.Label className="ty-label-input mb-1" htmlFor="liked">Liked</Form.Label>
                        <ToggleButton className="mb-2 d-block shadow-none" id="liked" type="checkbox" variant="outline-info liked" size="sm" checked={liked} onChange={(e) => setLiked(e.currentTarget.checked)}>
                            Liked
                        </ToggleButton>
                        <div className="ty-date-input">
                            <Form.Group className="ty-time mb-2">
                                <Form.Label className="ty-label-input mb-1" htmlFor="time">Time</Form.Label>
                                <Form.Control className="shadow-none" type="time" size="sm" id="time" onChange={(e) => setTime(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label className="ty-label-input mb-1" htmlFor="date">Date</Form.Label>
                                <Form.Control className="shadow-none" type="date" size="sm" id="date" placeholder="dd/mm/yyyy" onChange={(e) => setDate(e.target.value)} />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-2">
                            <Form.Label className="ty-label-input mb-1" htmlFor="retweets">Retweets (Max 12 Digit)</Form.Label>
                            <NumberFormat className="form-control form-control-sm shadow-none" placeholder="*1,000" id="retweets" thousandSeparator={true} allowNegative={false} maxLength="15" autoComplete="off" onChange={(e) => setRetweets(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label className="ty-label-input mb-1" htmlFor="likes">Likes (Max 12 Digit)</Form.Label>
                            <NumberFormat className="form-control form-control-sm shadow-none" placeholder="*1,000" id="likes" thousandSeparator={true} allowNegative={false} maxLength="15" autoComplete="off" onChange={(e) => setLikes(e.target.value)} />
                        </Form.Group>
                    </div>
                </div>
                <p className="ty-developer">Made with 💖 by Muhammad Syafwan Ardiansyah</p>
            </Container>
        </>
    )
}