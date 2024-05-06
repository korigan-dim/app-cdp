<template>
    <main id="manufacture">
        <section id="header">
            <div class="container-fluid">
                <div class="block100">
                    <img src="/img/comtes-de-provence-brassage_fraises.jpg" alt="">
                    <div class="content">
                        <h1 class="header-title">La manufacture</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam repudiandae
                            vero.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="men">
            <div class="container">
                <div class="block100">
                    <h2 class="core-title">L'homme au coeur</h2>
                    <p class="core-subtitle">de l'excellence</p>
                </div>
            </div>
            <div class="container">
                <div class="block30">
                    <div class="size-img">
                        <img src="/img/comtes-de-provence-confiture-confection-marmite.jpg" alt="">
                    </div>
                </div>
                <div class="block30">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, culpa cum dolores explicabo
                        fuga
                        perferendis perspiciatis qui quo rem? Blanditiis dolorem exercitationem fugiat incidunt
                        obcaecati
                        quibusdam, sed sint suscipit tenetur.
                    </p>
                    <a href="" class="btn">la marque</a>
                </div>
            </div>
        </section>
        <section class="section-imgs">
            <div class="container-fluid">
                <div class="block30">
                    <img src="/img/comtes-de-provence-confiture-fraises-amas.jpg" alt="">
                </div>
                <div class="block70">
                    <img src="/img/comtes-de-provence-confiture-manufacture-conception-fraise.jpg" alt="">
                </div>
            </div>
        </section>
        <section>
            <div class="container-fluid">
                <div class="block100">
                    <div class="container">
                        <div class="block30">
                            <h2 class="core-title">Terre de</h2>
                            <p class="core-subtitle">Savoir-faire</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis cumque
                                expedita,
                                fugiat ipsa officiis quae quasi quos recusandae reprehenderit sed sit? A architecto
                                corporis,
                                necessitatibus numquam quasi quos suscipit. Lorem ipsum dolor sit amet, consectetur
                                adipisicing
                                elit. Cum debitis deleniti eius, eligendi eum hic in ipsum molestias nisi, nobis odio
                                reprehenderit sequi voluptatum? Amet aperiam minus omnis quaerat vitae.
                            </p>
                            <a href="/" class="btn">La marque</a>
                        </div>
                        <div class="block70">
                            <img src="/img/comtes-de-provence-map-manufacture.svg" alt="" id="map" class="animated-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import {gsap} from 'gsap';
    import {ScrollTrigger} from 'gsap/ScrollTrigger';

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: "Manufacture",
        methods: {
            imgsAnimation: function () {
                gsap.utils.toArray("section:not(#header) img").forEach((e) => {
                    gsap.from(e, {
                        scrollTrigger: {
                            trigger: e,
                            scrub: 1,
                            end: "center center"
                        },
                        opacity: 0
                    })
                });
            },
            mapAnimation: function () {
                gsap.utils.toArray(".animated-img").forEach((e) => {
                    gsap.fromTo(e, {
                        y: -100
                    }, {
                        scrollTrigger: {
                            trigger: e,
                            scrub: 1
                        },
                        y: 0
                    })
                });
            },
            buttonsAnimation: function () {
                gsap.utils.toArray(".btn").forEach((e) => {
                    let tl = gsap.timeline({paused: true});
                    tl.fromTo(e, {
                        y: 0,
                        x: 0,
                        boxShadow: '0',
                        borderRadius: "0",
                        opacity: 0.5,
                        backgroundColor: "transparent",
                        color: "var(--dc)"
                    }, {
                        borderRadius: "0 10px 0 10px",
                        opacity: 1,
                        backgroundColor: "var(--dc)",
                        color: "var(--wc)"
                    });

                    e.addEventListener("mouseenter", () => tl.play());
                    e.addEventListener("mouseleave", () => tl.reverse());
                });
            },
            titlesAnimation: function () {
                gsap.utils.toArray(".core-title").forEach((e) => {
                    gsap.from(e, {
                        scrollTrigger: {
                            trigger: e,
                            scrub: 1,
                            start: "bottom bottom",
                            end: "center-=100px center"
                        },
                        y: -20,
                        opacity: 0
                    })
                });
            },
            textsAnimation: function () {
                gsap.utils.toArray("section:not(#header) p").forEach((e) => {
                    gsap.from(e, {
                        scrollTrigger: {
                            trigger: e,
                            scrub: 1,
                            start: "bottom+=100px bottom",
                            end: "center center"
                        },
                        y: -20,
                        opacity: 0
                    })
                });
            }

        },
        mounted() {
            this.imgsAnimation();
            this.mapAnimation();
            this.buttonsAnimation();
            this.titlesAnimation();
            this.textsAnimation();
        }
    }
</script>

<style>
    #manufacture section:nth-child(2) .container:nth-child(2) {
        align-items: center;
        justify-content: center;
        gap: var(--gap);
    }

    #manufacture section:nth-child(2) > .container:nth-child(2) .size-img::before {
        content: "";
        position: absolute;
        top: calc(50% - 90px);
        left: 0;
        width: 80px;
        height: 80px;
        margin-left: -45px;
        background: url("/img/EPB-logo.png") no-repeat;
        background-size: contain;
        border-radius: 50%;
        z-index: 3;
    }

    #manufacture section:nth-child(2) > .container:nth-child(2) .size-img::after {
        content: "";
        position: absolute;
        bottom: calc(50% - 90px);
        left: 0;
        width: 80px;
        height: 100px;
        margin-left: -40px;
        background: url("/ressources/img/PME-PLUS-LOGO.png") no-repeat;
        background-size: contain;
        border-radius: 50%;
        z-index: 3;
    }

    #manufacture section:nth-child(4) {
        padding: 30px;
    }

    #manufacture section:nth-child(4) > .container-fluid {
        background-color: var(--sc);
        padding: calc(var(--sectionMargin) / 2) 0;
    }

    #manufacture #map {
        transform: translateY(-50px);
    }

    /*
    ** PADDING SECTIONS RULES
    ** Content all padding rules
     */
    #manufacture #men {
        padding: 6vw 0;
    }

</style>
