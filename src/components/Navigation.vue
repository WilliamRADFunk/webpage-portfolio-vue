<template>
    <nav id="main-nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="row no-gutters w-100">
        <div class="col-12 col-lg-10 offset-lg-1">
        <button class="navbar-toggler float-right" @click="toggleCollapseState()" type="button" data-toggle="collapse" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" :class="{'show': showState}">
            <ul class="navbar-nav w-100">
            <li class="nav-item" @click="mobileCollapseState(); jumpTo();"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item" @click="mobileCollapseState(); jumpTo();"><a class="nav-link" href="#projects">Projects</a></li>
            <li class="nav-item dropdown">
                <b-dropdown class="nav-link">Code</b-dropdown>
                <div class="w-100" style="min-width: 300px;">
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/drawing-inspiration-generator" target="_blank">Drawing Inspiration Generator</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/chess" target="_blank">Chess</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/checkers" target="_blank">Freckers</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/data-glutton" target="_blank">Cryptobot Interface</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/sudoku" target="_blank">Data Glutton</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/sudoku" target="_blank">SuDoKu ExTrEmE</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/planet-funk" target="_blank">Planet Funk</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/irl-reporting-site" target="_blank">Sense The IRL - Front End</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/irl-reporting-rest" target="_blank">Sense The IRL - Back End</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/stay-in-the-light" target="_blank">Stay in the Light</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/galactic-fighter" target="_blank">Galactic Fighter</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/cinema-tycoon" target="_blank">Cinema Tycoon</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/study-hall" target="_blank">Event Note</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://youtu.be/DStHPVL2SAE" target="_blank">Horseshoe Sweepstakes</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/vedic-site" target="_blank">Vedicode</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/vedic" target="_blank">V.E.D.I.C.</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/phood-buddy" target="_blank">Phood Buddy</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/planetary-defense/commits/master" target="_blank">Planetary Defense</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/hack-bauer-codebreaker" target="_blank">Hack Bauer: Codebreaker</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/two-tier_client-server_application" target="_blank">Two-Tiered Client-Server App</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/financial-tracking-repository/commits/master" target="_blank">Financial-Tracking-Repository</a></b-dropdown-item>
                    <b-dropdown-item><a href="#projects" @click="jumpTo();">Content Alert</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/fake-bank" target="_blank">Fake-Bank</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/bookstore" target="_blank">Bookstore</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/the-cabal-effect/commits/master" target="_blank">The Cabal Effect</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/siege-warfare" target="_blank">Siege Warfare</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://www.npmjs.com/package/colors-plus" target="_blank">NPM Colors-Plus</a></b-dropdown-item>
                    <b-dropdown-item><a href="#projects" @click="jumpTo();">Trig Driver</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/encryptor" target="_blank">The Encryptor</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/pong-3D" target="_blank">Pong 3D</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/tictactoe3D" target="_blank">TicTacToe 3D</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/tictactoe2D-AIOpponent" target="_blank">TicTacToe 2D</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/total-recall" target="_blank">Total-Recall</a></b-dropdown-item>
                    <b-dropdown-item><a href="#projects" @click="jumpTo();">Q-Fish</a></b-dropdown-item>
                    <b-dropdown-item><a href="https://github.com/WilliamRADFunk/cinema-guru">Cinema-Guru</a></b-dropdown-item>
                </div>
            </li>
            <li class="nav-item" @click="mobileCollapseState(); jumpTo();"><a class="nav-link" href="#work">Work Experience</a></li>
            <li class="nav-item" @click="mobileCollapseState()"><a class="nav-link" href="#contact">Contact</a></li>
            <li class="nav-item dropdown">
                <b-dropdown class="nav-link">Site Versions</b-dropdown>
                <div class="w-100" style="min-width: 300px;">
                    <b-dropdown-item><a href="http://www.williamrobertfunk.com" target="_self">Plain Javascript &amp; Bootstrap 3</a></b-dropdown-item>
                    <b-dropdown-item class="text-success" disabled><a href="http://www.williamrobertfunk.com/angular-version" target="_self" class="text-success" disabled>Angular 8 &amp; Bootstrap 4</a></b-dropdown-item>
                    <b-dropdown-item disabled class="disabled"><a href="http://www.williamrobertfunk.com/vue-version" target="_self" class="disabled" disabled>Vue &amp; Flexbox</a></b-dropdown-item>
                </div>
            </li>
            </ul>
        </div>
        </div>
    </div>
    </nav>
</template>

<script>
    import * as jumpTo from '../utils/jump-to.ts';
    export default {
        name: 'Navigation',
        data: () => {
            return {
                /**
                 * Whether or not to show the dropdown menu
                 */
                showState: true
            };
        },
        methods: {
            /**
             * Sets the position of the page to the top of the anchored tag,
             * taking into account the header and navigation bar.
             */
            jumpTo() {
                jumpTo();
            },
            /**
             * Solves the collapse of the mobile nav dropdown
             * without illegally accessing the html dom references.
             */
            mobileCollapseState() {
                this.showState = false;
            },
            /**
             * Keeps track of collapsed state in order to apply show: false
             * when user selects option form mobile dropdown van menu.
             */
            toggleCollapseState() {
                setTimeout(() => {
                    if (this.showState === undefined) {
                        this.showState = true;
                    } else {
                        this.showState = !this.showState;
                    }
                }, 200);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .navbar.navbar-dark.bg-dark {
        background-color: #0A4273 !important;
        color: #D9D9D9 !important;
        padding: 0;
    }

    .navbar.navbar-dark > div > div > div > ul > li {
        padding-bottom: 0.5rem;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 0.5rem;

        > a,
        > span {
            color: #F2F2F2;
            text-decoration: none;
        }


        &:hover {
            background-color: #ADD5F7;
            cursor: pointer;

            > a,
            > span {
            color: #35478C !important;
            }
        }
    }

    .navbar-toggler {
        margin-bottom: 5px;
        margin-right: 15px;
        margin-top: 5px;
    }

    .dropdown-toggle::after {
        display: none;
    }

    .dropdown-menu > .dropdown-item {
        padding-bottom: 0;
        padding-top: 0;

        &:not(.text-success):hover {
            background: #C8C9CA linear-gradient(180deg, #C9CACB, #C8C9CA) repeat-x !important;
            cursor: pointer;
        }
    }

    .dropdown-menu > div > a,
    .dropdown-menu > div > a:hover {
        font-size: 16px;
        padding: 3px 20px;
        text-decoration: none;
        white-space: nowrap;

        &:not(.text-success):not(.disabled) {
            color: #333 !important;
        }

        &.disabled {
            color: #CCC !important;
        }
    }
</style>
