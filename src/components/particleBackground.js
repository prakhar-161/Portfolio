import Particles from 'react-tsparticles';

const ParticleBackground = () => {
    return (
        <>
            <Particles
                options={{
                    background: {
                        color: '#151515',
                    },
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: '#FE7E6D',
                        },
                        opacity: {
                            value: 0.8,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 790
                            }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        lineLinked: {
                            enable: true,
                            distance: 145,
                            color: '#FE7E6D',
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 10,
                            direction: 'bottom-right',
                            random: true,
                            straight: false,
                            outMode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: false
                            },
                            onClick: {
                                enable: true,
                                mode: 'repulse'
                            }
                        }
                    },
                    retina_detect: true
                }}
            />
        </>
    )
};

export default ParticleBackground;