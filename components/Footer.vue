<template>
    <footer>
        <div class="container">
            <div class="block100">
                <ul>
                    <li><NuxtLink :to="localePath('/manufacture')">{{$t('menu.factory')}}</NuxtLink></li>
                    <li><NuxtLink :to="localePath('/')"><img src="/img/logo-comtes-de-provence.svg" alt=""></NuxtLink></li>
                    <li><NuxtLink :to="localePath('/marque')">{{$t('menu.brand')}}</NuxtLink></li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="block100">
                <p>
                    La manufacture familiale a été fondée en 1986, voici maintenant 35 ans, par Yves Faure et au c&#x153;ur de la Provence.
                </p>
                <ul>
                    <li><NuxtLink :to="localePath('/legals')">{{$t('menu.legals')}}</NuxtLink></li>
                    <li><NuxtLink :to="localePath('/contact')">{{$t('menu.contact')}}</NuxtLink></li>
                    <li><NuxtLink :to="localePath('/sitemap')">{{$t('menu.sitemap')}}</NuxtLink></li>
                    <li><NuxtLink :to="localePath('/proform')">{{$t('menu.proform')}}</NuxtLink></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style>
    footer {
        padding: 80px 0;
    }
    footer > .container:first-child {
        padding-bottom: 30px;
    }
    footer > .container:first-child ul {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }
    footer > .container:first-child ul > li {
        width: 30%;
        text-align: center;
        text-transform: uppercase;
        font-family: var(--mont);
        font-weight: 600;
    }
    footer > .container:first-child ul img {
        width: 15vw;
        max-width: 200px;
        min-width: 100px;
    }
    footer > .container:nth-child(2) p {
        text-align: center;
    }
    footer > .container:nth-child(2) ul {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
    }
    footer > .container:nth-child(2) ul > li:not(:last-child) > a {
        padding-right: 5px;
        border-right: 2px solid var(--dc);
        margin-right: 5px;
    }
    footer > .container:nth-child(2) ul > li > a {
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: bold;
    }
</style>