<template>
    <div :id="id" class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters subheader py-3">
            <div class="col-10 offset-1">
                <h2><span>{{prefix}} </span><strong>{{content}}</strong></h2>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SectionHeader',
    props: [ 'id', 'prefix', 'content' ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .subheader {
        background-color: #74B2F0;
        border-bottom: 1px solid #dddddd;
        border-top: 1px solid #dddddd;
    }
</style>
