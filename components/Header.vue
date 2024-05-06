<template>
    <header>
        <div class="heading">
            <NuxtLink :to="localePath('/')" class="logo">
                <img src="/img/logo-comtes-de-provence.svg"
                     alt="Logo officiel de l'entreprise les comtes de provence, créateurs de confitures bio aux délicieux fruits">
            </NuxtLink>
            <div id="nav-btn" @click="click">
                Menu <span>&nbsp;</span>
            </div>
        </div>
        <div id="nav-wrapper" :isHidden="isHidden">
            <div class="background">
                <img src="/img/comtes-de-provence-confiture-manufacture-conception-fraise.jpg" alt=""
                     class="default-img active">
                <img src="/img/comtes-de-provence-brassage_fraises.jpg" alt="">
                <img src="/img/comtes-de-provence-pot-de-fraise-confiture.jpg" alt="">
                <img src="/img/comtes-de-provence-marque-confitures-fraise-tartines.jpg" alt="">
            </div>
            <nav>
                <ul>
                    <li>{{$t('menu.products')}}</li>
                    <li>
                        <NuxtLink :to="localePath('/manufacture')">{{$t('menu.factory')}}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/marque')">{{$t('menu.brand')}}</NuxtLink>
                    </li>
                </ul>
                <ul>
                    <li>{{$t('menu.infos')}}</li>
                    <li>
                        <NuxtLink :to="localePath('/contact')">{{$t('menu.contact')}}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/proform')">{{$t('menu.proform')}}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/legals')">{{$t('menu.legals')}}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/sitemap')">{{$t('menu.sitemap')}}</NuxtLink>
                    </li>
                </ul>
                <ul>
                    <li>{{$t('menu.langs')}}</li>
                    <li>
                        <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    import {gsap} from 'gsap';


    export default {
        name: "Header",
        data() {
            return {
                isHidden: true
            }
        },
        methods: {
            manageMenuOnScroll: function () {
                const menu = document.querySelector(".heading");
                const wrapper = document.querySelector("#nav-wrapper");
                let clientHeight = window.screen.height;
                if (window.scrollY > clientHeight - 240 && wrapper.classList.contains("open-wrapper") === false) {
                    menu.classList.add("hidden-menu")
                } else {
                    menu.classList.remove("hidden-menu")
                }
            },
            toggleImgMenu: function (menuItems) {
                menuItems.forEach((e) => {
                    const value = e.href.split("/").slice(-1);
                    const imgs = document.querySelectorAll("#nav-wrapper .background img");
                    e.addEventListener("mouseover", () => {
                        if (value == "manufacture") {
                            imgs.forEach((e) => {
                                e.classList.remove("active")
                            });
                            imgs[1].classList.add("active");
                        }
                        if (value == "marque") {
                            imgs.forEach((e) => {
                                e.classList.remove("active")
                            });
                            imgs[2].classList.add("active");
                        }
                        if (value == "contact") {
                            imgs.forEach((e) => {
                                e.classList.remove("active")
                            });
                            imgs[3].classList.add("active");
                        }
                    });
                });
            },
            menuSets: function () {
                const menuBtn = document.querySelector("#nav-btn");
                const els = document.querySelectorAll("#nav-wrapper ul li");
                const aLinks = document.querySelectorAll("#nav-wrapper ul a");
                let tl = gsap.timeline({paused: true});

                // Functions call
                this.toggleImgMenu(aLinks);

                menuBtn.addEventListener("click", () => {
                    document.getElementById("nav-wrapper").classList.toggle("open-wrapper");
                    menuBtn.classList.toggle("close");
                    tl.reversed(!tl.reversed());
                });
                aLinks.forEach((e) => {
                    e.addEventListener("click", () => {
                        document.getElementById("nav-wrapper").classList.toggle("open-wrapper");
                        menuBtn.classList.toggle("close");
                        tl.reversed(!tl.reversed());
                    });
                });

                // Menu Animations
                tl.fromTo("#nav-wrapper", {
                    visibility: "hidden",
                    opacity: 0,
                    duration: .7,
                    ease: "power1.in",
                    x: "100vw"
                }, {
                    visibility: "visible",
                    opacity: 1,
                    x: 0
                });
                tl.from("#nav-wrapper > .background", {
                    opacity: 0,
                    duration: 2,
                    ease: "power1.in"
                }, '-=0.5');
                tl.from(els, {
                    duration: 1,
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    ease: 'expo.inOut',
                }, "<");

                tl.reverse();
            }
        },
        mounted() {
            window.addEventListener("scroll", this.manageMenuOnScroll);
            this.menuSets();
        }
    }
</script>

<style>
    .heading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        padding: 40px;
        z-index: 1001;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        pointer-events: none;
    }

    .heading > .logo {
        width: 12vw;
        height: auto;
        pointer-events: all;
    }

    .heading > .logo > img {
        object-fit: contain;
    }

    .heading > #nav-btn {
        position: relative;
        top: 0;
        right: 0;
        z-index: 1000;
        padding: 40px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        color: var(--wc);
        font-size: .6em;
        text-transform: uppercase;
        font-family: var(--mont);
        font-weight: 600;
        letter-spacing: .1em;
        pointer-events: all;
        cursor: pointer;
    }

    #nav-btn span {
        display: block;
        position: relative;
        width: 20px;
        height: 2px;
        background-color: var(--wc);
        align-self: center;
        margin-left: 8px;
    }

    #nav-btn span::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        margin-top: -7px;
        width: 20px;
        height: 2px;
        background-color: var(--wc);
        transition: all .4s ease-in-out;
    }

    #nav-btn span::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        margin-bottom: -7px;
        width: 20px;
        height: 2px;
        background-color: var(--wc);
        transition: all .4s ease-in-out;
    }

    .close > span {
        height: 0 !important;
    }

    .close > span::before {
        transform: rotate(-45deg);
        margin-top: -2px !important;
    }

    .close > span::after {
        transform: rotate(45deg);
        margin-bottom: 0 !important;
    }

    #nav-wrapper {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: var(--dc);
        top: 0;
        right: 0;
        z-index: 999;
        transition: right .4s ease-in-out;
        color: var(--wc);
        display: flex;
        flex-flow: row nowrap;
        transform: translateX(100vw);
    }

    #nav-wrapper > nav {
        display: flex;
        padding: 13rem 3rem 0 3rem;
        flex-direction: column;
        justify-content: space-around;
        width: 35vw;
        min-width: 400px;
        z-index: 10;
        background-color: var(--dc);
        font-family: var(--play);
    }

    #nav-wrapper > nav > ul > li:first-child {
        font-size: .65em;
        color: var(--gc)
    }

    #nav-wrapper nav > ul > li > a {
        display: inline-block;
        padding: 4px 0;
        letter-spacing: .05em;
    }

    #nav-wrapper > nav > ul:last-child {
        display: flex;
        flex-flow: row wrap;
    }

    #nav-wrapper > nav > ul:last-child > li:first-child {
        width: 100%;
    }

    #nav-wrapper > nav > ul:last-child > li > a {
        font-size: 1rem;
        text-decoration: underline;
    }

    #nav-wrapper > nav > ul:last-child > li:not(:nth-child(2)) > a {
        margin-left: 20px;
    }

    #nav-wrapper a {
        position: relative;
    }

    #nav-wrapper a::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 10px;
        margin-left: 10%;
        margin-bottom: 4px;
        background-color: red;
        z-index: -1;
        transform: skew(-0.04turn, 1deg);
        transition: width .4s ease-in-out;
    }

    #nav-wrapper a:hover::before {
        width: 80%;
    }

    #nav-wrapper > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, var(--wc), transparent),
        url("/img/noise.svg");
    }

    #nav-wrapper > div > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1.2s ease-in-out;
    }

    #nav-wrapper > div > img.active {
        position: relative;
        opacity: .7;
    }

    #nav-wrapper > div > img.active::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--wc);
    }

    .hidden-menu {
        opacity: 0;
    }

    @media (max-width: 60em /*960px*/
    ) {
        .heading {
            padding: 20px;
        }

        .heading > .logo {
            width: 20vw;
        }

        #nav-wrapper .block70 {
            width: 40%;
        }

        #nav-wrapper .block30 {
            width: 60%;
        }

        #nav-wrapper {
            overflow-y: scroll;
        }

        #nav-wrapper .block70 {
            height: 100%;
        }
    }

</style>
