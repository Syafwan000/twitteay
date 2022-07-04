import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Twitteay.css";

export default function Twitteay() {
    return (
        <>
            <Helmet>
                <title>Twitteay</title>
            </Helmet>
            <Container fluid className="ty-btn-back">
                <div>
                    <Link to="/">Back</Link>
                    <Link to="/">Reset</Link>
                </div>
                <Link to="/">Download</Link>
            </Container>
        </>
    )
}