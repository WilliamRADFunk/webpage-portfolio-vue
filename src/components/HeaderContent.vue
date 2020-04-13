<template>
  <div id="main-header" class="row row-header no-gutters px-4">
    <div class="col-9 col-sm-8">
      <div class="row no-gutters">
        <div class="col-sm-12 col-md-5">
          <img id="logo" src="../assets/base/logo-WRFunk.png" alt="W.R.FUNK" class="img-fluid">
        </div>
        <div class="col-sm-12 col-md-7 d-flex align-items-center align-items-sm-end">
          <span class="mb-1 mt-2 pl-1">Plan, program, perfect...</span>
        </div>
      </div>
    </div>
    <div class="col-2 col-sm-4 d-flex align-items-center align-items-md-end">
      <div class="row no-gutters w-100">
        <div class="col-sm-12 col-md-5 offset-lg-1 col-lg-5">
          <a id="git-logo" href="https://github.com/WilliamRADFunk" target="_blank" class="mb-2 mb-md-0"><img src="../assets/base/logo_github.png" class="img-fluid">GitHub</a>
        </div>
        <div class="col-sm-12 col-md-7 col-lg-6">
          <a id="pdf-logo" href="../assets/base/Resume.pdf" target="_blank"><img src="../assets/base/logo_pdf.png" class="img-fluid">Resume</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderContent'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .row-header
  {
      background-color: #ffffff;
  }

  .row-header a
  {
      color: #000000;
      font-weight: lighter;
      line-height: 34px;
  }

  .row-header a img
  {
      float: left;
  }

  .row-header img,
  .row-body img
  {
      border: none;
  }

  .row-header span
  {
      color: #000000;
      float: left;
      font-weight: bold;
  }

  @media (min-width: 1200px) {
    .row-header a
    {
        float: left;
        font-size: 14px;
        line-height: 34px;
        margin: 0 5px 0 0;
    }
    .row-header img
    {
        margin-right: 5px;
    }
  }

  @media (max-width: 1199px) {
    .row-header a
    {
        float: left;
        font-size: 14px;
        line-height: 34px;
        margin: 0 5px 0 0;
    }
    .row-header img
    {
        margin-right: 5px;
    }
  }

  @media (max-width: 991px) {
    .row-header a
    {
        float: left;
        font-size: 12px;
        line-height: 34px;
        margin: 0px;
    }
    .row-header img
    {
        margin-right: 5px;
    }
  }

  @media (max-width: 767px) {
    #git-logo,
    #pdf-logo
    {
        line-height: 34px !important;
    }
    .row-header a
    {
        float: left;
        font-size: 12px;
        line-height: 16px;
        margin: 0px 17px;
    }
    .row-header img
    {
        margin-right: 5px;
    }
  }

  @media (max-width: 540px) {
    #pdf-logo,
    #git-logo
    {
        line-height: 16px !important;
    }
    #git-logo img
    {
        padding-left: 5px;
    }
    #pdf-logo img
    {
        padding-left: 10px;
    }
  }
</style>
