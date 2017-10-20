<template>
  <div id="app">
    <b-container>
      <b-navbar toggleable="md" type="dark" variant="dark">

        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <b-navbar-brand href="/">Vue-Bootstrap例子</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-nav is-nav-bar>
            <b-nav-item to="/ClientInfo">客户端信息</b-nav-item>
            <b-nav-item to="/About">关于</b-nav-item>
          </b-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <br>
    <b-container>
      <router-view/>

      <hr>
      <footer>
        <p>&copy;2017 这是页脚</p>
      </footer>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>

</style>
