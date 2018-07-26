<template>
  <div class="post">
    <!--景点头部-->
    <post_header></post_header>
    <!--景点导航部分-->
    <post_nav></post_nav>
    <!--景点行程部分-->
    <post_travel></post_travel>

  </div>
</template>

<script>
    import Post_header from "../components/post/post_header";
    import Post_nav from "../components/post/post_nav";
    import Post_travel from "../components/post/post_travel";
    export default {
        name: "post",
      components: {Post_travel, Post_nav, Post_header}
    }
</script>

<style scoped>
.post{
  background: #f5f5f8;
}
</style>
