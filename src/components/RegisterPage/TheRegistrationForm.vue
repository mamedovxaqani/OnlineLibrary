<template>
  <div class="d-flex text-center justify-content-center">
    <form action="" class="border w-50">
      <div class="form-header">
        <h1 class="h4 py-3">Форма для Регистрации</h1>
      </div>
      <div class="form-group mt-4">
        <label for="" class="form-label">
          Имя:
          <input type="text" placeholder="" class="form-control" />
        </label>
      </div>
      <div class="form-group">
        <label for="" class="form-label">
          Логин:
          <input type="text" placeholder="" class="form-control" />
        </label>
      </div>
      <div class="form-group">
        <label for="" class="form-label">
          Пароль:
          <input type="text" class="form-control" />
        </label>
      </div>
      <div class="form-group">
        <label for="" class="form-label"
          >Повторите пароль:
          <input type="text" class="form-control" />
        </label>
      </div>
      <div class="form-group">
        <label for="" class="form-label">
          Почта:
          <input type="text" placeholder="" class="form-control" />
        </label>
      </div>
      <div class="form-group">
        <label for="" class="form-label">
          Повторите Почту:
          <input type="text" placeholder="" class="form-control" />
        </label>
      </div>
      <div class="form-group">
        <input type="checkbox" class="mx-3 mt-3" value="agree" />
        <label for="">Я соглашаюсь с правилами пользования</label>
      </div>
      <button class="btn btn-success mb-5 mt-3" type="submit">
        Загеристрироваться
      </button>
      <div class="form-footer bg-success">
        <h4 class="text-white p-2">Запольните форму выше</h4>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-header {
  color: white;
  background: linear-gradient(blue, pink);
}
</style>
