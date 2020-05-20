import React, { useState } from "react";
import { Container, Carousel, CarouselItem, CarouselControl } from "reactstrap";

const Hero = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const move = previous => {
        if (animating) return;

        let index;

        switch (previous) {
            case true:
                index = activeIndex === items.length - 1 ? 0 : activeIndex + 1;

                break;
            default:
                index = activeIndex === 0 ? items.length - 1 : activeIndex - 1;

                break;
        }

        setActiveIndex(index);
    };

    return (
        <Carousel
            tag="section"
            className="hero"
            activeIndex={activeIndex}
            next={() => move(true)}
            previous={move}
        >
            {items.map(item => (
                <CarouselItem
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={item.title}
                >
                    <Container className="hero-text">
                        <h2>{item.title}</h2>
                        <p>{item.caption}</p>
                    </Container>
                </CarouselItem>
            ))}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={move}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={() => move(true)}
            />
        </Carousel>
    );
};

export default Hero;
