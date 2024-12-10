const particlesConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 900,
            },
        },
        color: {
            value: ["#0fc4f2", "#ff6f61", "#6cff62"],
        },
        shape: {
            type: ["circle", "triangle", "polygon"],
            polygon: {
                nb_sides: 6,
            },
        },
        opacity: {
            value: 0.7,
            random: true,
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
            },
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: "#0fc4f2",
            opacity: 0.3,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
        },
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: ["grab", "bubble"],
                parallax: {
                    enable: true,
                    force: 50,
                    smooth: 10,
                }
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.5,
                }
            },
            bubble: {
                distance: 200,
                size: 6,
                duration: 0.3,
                opacity: 0.8,
                speed: 3,
            },
            push: {
                particles_nb: 3,
            },
        },
    },
    retina_detect: true,
    background: {
        color: "transparent",
    },
    fps_limit: 60,
};

export default particlesConfig;