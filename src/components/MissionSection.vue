<template>
    <div id="mission" class="row no-gutters my-3 text-left">
        <div class="col-12 offset-lg-1 col-lg-4 px-5 pl-lg-0">
            <h2><span>My </span><strong>Mission</strong></h2>
            <p>Software Engineering at its finest is robust, clean, and creates a seemless connection between the user's intent and a program's output. It's my strongest desire to excel in all three areas of the craft, and to do so with the highest integrity and security possible.</p>
        </div>
        <div class="col-12 col-lg-4 px-5">
            <img src="../assets/base/cryptobot-interface-screenshots-03.png" alt="Newest Application - Cryptobot Interface" class="img-fluid">
        </div>
        <div class="col-12 col-lg-2 pl-5 pt-3">
            <h4>Cryptobot</h4>
            <h5>Autonomous trading bot for cryptocurrencies on the GDAX Exchange.</h5>
            <a href="http://www.williamrobertfunk.com/applications/cryptobot-interface/" target="_blank" class="btn btn-danger">Click to visit site <span class="fa fa-arrow-circle-o-right"></span></a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'MissionSection'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    #mission {
        font-family: 'Open Sans', sans-serif;
    }

    #mission .btn.btn-danger {
        background: #99ff99;
        border: none;
        white-space: nowrap;

        &:hover {
            background: #7AD95F;
            border: none;
            color: #FFFFFF;
        }
    }

    #mission .btn.btn-danger:active,
    #mission .btn.btn-danger:focus {
        box-shadow: none;
        outline: none;
    }

    h4 {
        color: #99ff99;
        padding-top: 0px;
    }

    h5 {
        font-size: 16px;
    }

    p {
        margin-top: 15px;
    }

    @media (min-width: 1200px) {
        h4 {
            padding-top: 0px;
        }

        p {
            line-height: 34px;
        }

        .btn.btn-danger {
            font-size: 19px;
        }
    }

    @media (max-width: 1199px) {
        h4 {
            padding-top: 0px;
        }

        p {
            line-height: 30px;
        }
    }

    @media (max-width: 991px) {
        .btn.btn-danger {
            margin-bottom: 25px;
        }

        h4 {
            font-size: 24px;
            margin-bottom: 25px;
            padding-top: 0px;
        }

        p {
            line-height: 28px;
        }
    }

    @media (max-width: 767px) {
        h4 {
            font-size: 20px;
            margin-bottom: 25px;
            padding-top: 0px;
        }

        h5 {
            margin-bottom: 25px;
        }

        p {
            line-height: 24px;
        }
    }
</style>
