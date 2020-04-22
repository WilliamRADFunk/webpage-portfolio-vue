<template>
    <nav id="main-nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="row no-gutters w-100">
        <div class="col-12 col-lg-10 offset-lg-1">
        <button class="navbar-toggler float-right" @click="toggleCollapseState()" type="button" data-toggle="collapse" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" :class="{'show': showState}">
            <ul class="navbar-nav w-100">
            <li class="nav-item" @click="mobileCollapseState(); jumpTo();"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item" @click="mobileCollapseState(); jumpTo();"><a class="nav-link" href="#projects">Projects</a></li>
            <b-nav-item-dropdown>
                <template slot="button-content">Code</template>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/data-glutton' }" target="_blank">Cryptobot Interface</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/sudoku' }" target="_blank">Data Glutton</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/sudoku' }" target="_blank">SuDoKu ExTrEmE</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/planet-funk' }" target="_blank">Planet Funk</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/irl-reporting-site' }" target="_blank">Sense The IRL - Front End</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/irl-reporting-rest' }" target="_blank">Sense The IRL - Back End</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/stay-in-the-light' }" target="_blank">Stay in the Light</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/galactic-fighter' }" target="_blank">Galactic Fighter</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/cinema-tycoon' }" target="_blank">Cinema Tycoon</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/study-hall' }" target="_blank">Event Note</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://youtu.be/DStHPVL2SAE' }" target="_blank">Horseshoe Sweepstakes</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/vedic-site' }" target="_blank">Vedicode</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/vedic' }" target="_blank">V.E.D.I.C.</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/phood-buddy' }" target="_blank">Phood Buddy</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/planetary-defense/commits/master' }" target="_blank">Planetary Defense</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/hack-bauer-codebreaker' }" target="_blank">Hack Bauer: Codebreaker</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/two-tier_client-server_application' }" target="_blank">Two-Tiered Client-Server App</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/financial-tracking-repository/commits/master' }" target="_blank">Financial-Tracking-Repository</b-dropdown-item>
                <b-dropdown-item @click="jumpTo()" :to="{ path: '#projects' }">Content Alert</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/fake-bank' }" target="_blank">Fake-Bank</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/bookstore' }" target="_blank">Bookstore</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/the-cabal-effect/commits/master' }" target="_blank">The Cabal Effect</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/siege-warfare' }" target="_blank">Siege Warfare</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://www.npmjs.com/package/colors-plus' }" target="_blank">NPM Colors-Plus</b-dropdown-item>
                <b-dropdown-item @click="jumpTo()" :to="{ path: '#projects' }">Trig Driver</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/encryptor' }" target="_blank">The Encryptor</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/pong-3D' }" target="_blank">Pong 3D</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/tictactoe3D' }" target="_blank">TicTacToe 3D</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/tictactoe2D-AIOpponent' }" target="_blank">TicTacToe 2D</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/total-recall' }" target="_blank">Total-Recall</b-dropdown-item>
                <b-dropdown-item @click="jumpTo()" :to="{ path: '#projects' }">Q-Fish</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'https://github.com/WilliamRADFunk/cinema-guru' }" target="_blank">Cinema-Guru</b-dropdown-item>
            </b-nav-item-dropdown>
            <li class="nav-item" @click="mobileCollapseState(); jumpTo();"><a class="nav-link" href="#work">Work Experience</a></li>
            <li class="nav-item" @click="mobileCollapseState()"><a class="nav-link" href="#contact">Contact</a></li>
            <b-nav-item-dropdown>
                <template slot="button-content">Site Versions</template>
                <b-dropdown-item :to="{ path: 'http://www.williamrobertfunk.com' }" target="_self">Plain Javascript &amp; Bootstrap 3</b-dropdown-item>
                <b-dropdown-item :to="{ path: 'http://www.williamrobertfunk.com/angular-version' }" target="_self">Angular 8 &amp; Bootstrap 4</b-dropdown-item>
                <b-dropdown-item disabled class="text-success" :to="{ path: 'http://www.williamrobertfunk.com/vue-version' }" target="_self"><span class="text-success disabled">Vue &amp; Bootstrap-Vue</span></b-dropdown-item>
            </b-nav-item-dropdown>
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
                showState: false
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
        display: none !important;
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
