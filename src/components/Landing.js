import React from "react";
import Typewriter from 'typewriter-effect';
import ParticleBackground from "./particleBackground";
import webdev from '../media/webdev.svg';

const Landing = () => {
    return (
        <>
            <ParticleBackground />
            <div className="landing">
                <div className="landing-text">
                    <h1 className="landing-greet">Hi there &#128075;&#127995;</h1>
                    <div className="name">
                        <h1>I am Prakhar Dhama.</h1>
                    </div>
                    <Typewriter
                        className="typewriter"
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("I am a Web Developer.").pauseFor(500)
                            .deleteAll()
                            .typeString("I am a Data Science Enthusiast.").pauseFor(500)
                            .deleteAll()
                            .typeString("And I prefer Messi over Ronaldo! 😎")
                            .start();
                        }}
                        options={{
                            loop: true,
                            autoStart: true
                        }}
                    />
                </div>
                <div className="landing-svg-div">
                    <img src={webdev} className="landing-svg" alt="yoyo" />
                </div>
            </div>
        </>
    )
};

export default Landing;