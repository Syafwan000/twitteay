import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Twitteay from "../image/Twitteay.png";
import "./Main.css";

export default function Main() {
    return (
        <>
            <Helmet>
                <title>Twitteay</title>
            </Helmet>
            <Container className="ty-nav shadow-sm">
                <div className="ty-navbrand">
                    <img src={Twitteay} alt="Twitteay" />
                    <h2>Twitteay</h2>
                </div>
                <div className="ty-navlist">
                    <a id="ty-btn-github" href="https://github.com/Syafwan000/twitteay" target="_blank">GitHub</a>
                    <a id="ty-btn-support" href="https://saweria.co/Syafwannn" target="_blank">Support</a>
                    <Link id="ty-btn-create" to="/create-twitteay">Create</Link>
                </div>
            </Container>
            <Container className="ty-main">
                <h1>Create custom tweets without having a twitter account</h1>
                <p>Write all your happiness with twitteay and share with people around you</p>
                <Link to="/create-twitteay">Create Now</Link>
            </Container>
        </>
    )
}