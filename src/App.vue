<template lang="pug">
  #app
    b-container
      b-navbar.justify-content-end(toggleable="md")
        b-navbar-toggle(target="nav_collapse")
        b-collapse.justify-content-end(is-nav id="nav_collapse")
          b-navbar-nav
            li.nav-item
              router-link.nav-link(:to="{name: 'home', params: {diskPath: ''}}") Главная
            li.nav-item
              router-link.nav-link(:to="{name: 'settings', params: {diskPath: ''}}") Настройки
            //-b-nav-item-dropdown(id="nav7_ddown" text="Системные папки" extra-toggle-classes="nav-link-custom" left)
              b-dropdown-item(href="#") Файлы
              b-dropdown-item(href="#") Фото
              b-dropdown-item(href="#") Общий доступ
              b-dropdown-item(href="#") История
              b-dropdown-item(href="#") Архив
              b-dropdown-item(href="#") Корзина
      b-row
        b-col(cols="12")
          router-view.content
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #eee;
  }

  .content {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    padding: 10px;
    margin-bottom: 20px;
  }
</style>
