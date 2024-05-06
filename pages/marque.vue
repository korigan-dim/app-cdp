<template>
    <main id="marque">
        <section id="header">
            <div class="container-fluid">
                <div class="block100">
                    <img src="/img/comtes-de-provence-pot-de-fraise-confiture.jpg" alt="">
                    <div class="content">
                        <h2 class="header-title">La marque</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam repudiandae
                            vero.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="natural">
            <div class="container">
                <div class="block100">
                    <h2 class="core-title">Au rythme de la naturalité</h2>
                    <p class="core-subtitle">Un hymne à la provence</p>
                    <p>
                        La petite manufacture artisanale est aujourd'hui devenue une Entreprise du Patrimoine Vivant
                        dûment
                        reconnue et labellisée part l'État
                    </p>
                </div>
            </div>
            <div class="container">
                <img src="/img/comtes-de-provence-pot-de-fraise-confiture.jpg" alt="" class="block40 size-img">
                <img src="/img/comtes-de-provence-brassage_fraises.jpg" alt="" class="center size-img animated-img">
                <img src="/img/comtes-de-provence-confiture-fraises-amas.jpg" alt="" class="block40 size-img">
            </div>
            <div class="container">
                <div class="block50">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate dolorum, ducimus
                        necessitatibus officia possimus quaerat! Ad amet, asperiores aspernatur, consectetur dignissimos
                        eum
                        impedit iste natus nemo repudiandae, rerum voluptatem.
                    </p>
                </div>
                <div class="block50">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda autem dolore
                        dolores
                        ducimus error ipsa ipsam iste, labore praesentium quibusdam recusandae reprehenderit similique,
                        totam, unde ut voluptates. Harum, magni.
                    </p>
                </div>
            </div>
        </section>
        <section class="section-full-img">
            <div class="container">
                <div class="block100">
                    <img src="/img/comtes-de-provence-confiture-manufacture-conception-fraise.jpg" alt=""
                         class="size-img">
                    <div class="block50">
                        <p class="core-subtitle">Lorem Ipsum</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi assumenda atque
                            consequatur
                            consequuntur corporis enim, est fugit optio praesentium quia quis repellat reprehenderit
                            saepe
                            temporibus velit veritatis? Facere, veniam!
                        </p>
                        <p class="author">
                            Ali,
                            <br>
                            Maitre confiturier
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="text-with-img">
            <div class="container">
                <dv class="block40">
                    <h2 class="core-title">Au rythme de la naturalité</h2>
                    <p class="core-subtitle">Un hymne à la provence</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos dolore, doloremque,
                        error
                        fuga fugiat harum inventore iusto magnam magni mollitia nostrum nulla obcaecati, odit
                        praesentium
                        quibusdam quod sit ut.
                    </p>
                </dv>
                <div class="block60">
                    <img src="/img/comtes-de-provence-marque-confitures-fraise-tartines.jpg" alt="">
                </div>
            </div>
        </section>
        <section class="text-with-img">
            <div class="container">
                <dv class="block40">
                    <h2 class="core-title">Au rythme de la naturalité</h2>
                    <p class="core-subtitle">Un hymne à la provence</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos dolore, doloremque,
                        error
                        fuga fugiat harum inventore iusto magnam magni mollitia nostrum nulla obcaecati, odit
                        praesentium
                        quibusdam quod sit ut.
                    </p>
                </dv>
                <div class="block60">
                    <img src="/img/comtes-de-provence-marque-confitures-fraise-tartines.jpg" alt="">
                </div>
            </div>
        </section>
        <section class="section-imgs">
            <div class="container-fluid">
                <div class="block70">
                    <img src="/img/comtes-de-provence-confiture-fraises-amas.jpg" alt="">
                </div>
                <div class="block30">
                    <img src="/img/comtes-de-provence-confiture-manufacture-conception-fraise.jpg" alt="">
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
        name: "Marque",
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
            this.buttonsAnimation();
            this.titlesAnimation();
            this.textsAnimation();
        }
    }
</script>

<style>
    #marque > section:nth-child(2) > .container:nth-child(2) {
        position: relative;
        display: flex;
        justify-content: space-between;
        min-height: calc(36vw + 150px)
    }

    #marque > section:nth-child(2) > .container:nth-child(2) * {
        display: block;
        position: relative;
    }

    #marque > section:nth-child(2) > .container:nth-child(2) img:nth-child(1) {
        align-self: flex-end;
    }

    #marque > section:nth-child(2) > .container:nth-child(2) img:nth-child(2) {
        position: absolute;
        width: 24vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
    }

    #marque > section:nth-child(2) > .container:nth-child(2) img:nth-child(3) {
        align-self: flex-start;
    }

    @media (max-width: 45em /* 720px */
    ) {
        #marque > section:nth-child(2) > .container:nth-child(2) {
            gap: var(--gap);
        }

        #marque > section:nth-child(2) > .container:nth-child(2) img:nth-child(2) {
            position: relative;
            width: 100%;
            top: inherit;
            left: inherit;
            transform: inherit;
        }
    }

    #marque > section#natural .container:nth-child(3) {
        padding: 0 10vw;
        gap: var(--gap);
    }

    #marque > section#natural .container:nth-child(3) p {
        padding-top: 6vw;
    }

    #marque section.section-full-img {
        padding: 0;
    }

    #marque section.section-full-img .container {
        padding: 20px;
    }

    #marque section.section-full-img .container .block50 {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        transform: translate(-50%, -50%);
        color: var(--wc);
    }

    #marque section.text-with-img .container {
        gap: var(--gap);
    }

    /*
    ** PADDING SECTIONS RULES
    ** Content all padding rules
     */
    #marque section#natural {
        padding: 6vw 0;
    }

    #marque section.text-with-img:nth-child(even) {
        padding: 6vw 0 3vw 0;
    }

    #marque section.text-with-img:nth-child(odd) {
        padding: 3vw 0 6vw 0;
    }

    #marque section.text-with-img:nth-child(odd) .container {
        flex-direction: row-reverse;
    }

    @media (max-width: 45em) {
        #marque section.text-with-img:nth-child(odd) .container {
            flex-direction: column-reverse;
        }
    }
</style>