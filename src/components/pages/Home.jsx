import React from "react";
import { Container } from "reactstrap";
import Hero from "../base/Hero";
import Features from "../base/Features";
import BestSellers from "../base/BestSellers";
import Reviews from "../base/Reviews";

const heroItems = [
    {
        title: "See our summer's offers",
        caption:
            "For this season we provide themed artworks. Install it and be the best employee of your office!"
    },
    {
        title: "We provide awesome artworks.",
        caption:
            "We have in our store more than 1000 different artworks designed for any room."
    }
];

const Home = () => {
    return (
        <>
            <h1 className="home-title">
                This is a Musala Soft Framed Artworks Store for your wall.
            </h1>
            <Hero items={heroItems} />
            <Features />
            <BestSellers />
            <Reviews />
            <Container tag="section" className="home-note spacing">
                <h2 className="title">Note</h2>
                This application is just a programming task for applying for
                Musala Soft completely created from scratch. Crated by Pablo
                David Gago Ballester. @pedegago at Twitter.
            </Container>
        </>
    );
};

export default Home;
