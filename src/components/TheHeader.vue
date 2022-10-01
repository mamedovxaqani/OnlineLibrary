<template>
  <header>
    <nav class="navbar navbar-expand">
      <div class="container">
        <router-link to="/home" class="navbar-brand">
          Онлайн
          <span class="book__title fw-bold p-2 text-white text-decoration-none"
            >Книги</span
          >
        </router-link>
        <div>
          

          <ul class="list-group list-group-horizontal">
            <li class="list-group-item border-0">
              <router-link
                :to="{ name: 'Register' }"
                class="text-decoration-none text-black"
                >Регистрация</router-link
              >
            </li>
            <li class="list-group-item border-0">
              <router-link
                :to="{ name: 'Login' }"
                class="text-decoration-none text-black"
                >Войти</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.book__title {
  background-color: #ff6600;
}
</style>
