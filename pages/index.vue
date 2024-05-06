<template>
    <section class="container-fluid" id="header">
        <a class="block50" href="/manufacture">
            <img src="/img/comtes-de-provence-brassage_fraises.jpg" alt="">
            <div class="content">
                <h1 class="header-title">{{$t('menu.factory')}}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam repudiandae vero.</p>
            </div>
        </a>
        <a class="block50" href="/marque">
            <img src="/img/comtes-de-provence-pot-de-fraise-confiture.jpg" alt="">
            <div class="content">
                <h2 class="header-title">{{$t('menu.brand')}}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam repudiandae vero.</p>
            </div>
        </a>
    </section>
</template>

<script>
    import {gsap} from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger);

    export default {
        name: "Index",
        methods: {
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
            }
        },
        mounted() {
            this.buttonsAnimation();
        }
    }
</script>

<style scoped>
    .container-fluid {
        min-height: 100vh;
        background-color: var(--dc);
    }

    .container-fluid > .block50 {
        position: relative;
        text-align: center;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        width: 50vw;
        text-decoration: none;
        background-color: var(--dc);
        transition: width .5s ease-in-out;
    }

    .container-fluid > .block50 > img {
        position: absolute;
        top: 0;
        left: 0;
        filter: brightness(40%);
        object-position: 50% 50%;
    }

    .container-fluid > .block50 > .content {
        text-align: center;
        z-index: 2;
        color: var(--wc);
        width: 300px;
    }

    @media (min-width: 60.063em /*960px*/
    ) {
        .container-fluid > .block50:hover {
            width: 53vw;
        }

        .container-fluid > .block50:hover ~ .block50 {
            width: 47vw;
        }
    }

    @media (max-width: 60em /*960px*/
    ) {
        .container-fluid > .block50 {
            flex-flow: column wrap;
            width: 100vw;
        }
    }
</style>