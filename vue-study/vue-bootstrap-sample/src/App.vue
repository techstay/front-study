<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Vue-Bootstrap例子</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                aria-controls="#navbar"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav mr-auto">
            <router-link to="/" class="nav-item" tag="li">
              <a class="nav-link">主页<span class="sr-only">(current)</span></a>
            </router-link>
            <router-link to="/ClientInfo" class="nav-item" tag="li">
              <a class="nav-link">客户端信息</a>
            </router-link>
            <router-link to="/About" class="nav-item" tag="li">
              <a class="nav-link">关于</a>
            </router-link>
          </ul>
        </div>
      </nav>
    </div>
    <br>
    <div class="container">
      <router-view/>

      <hr>
      <footer>
        <p>&copy;2017 这是页脚</p>
      </footer>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>

</style>
