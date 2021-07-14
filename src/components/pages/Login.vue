<template>
  <div>
    <form class="form-signin" @submit.prevent="signin">
      <img
        class="mb-4"
        src="/docs/5.0/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      />
      <h1 class="h3 mb-3 fw-normal">請先登入</h1>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="user.username"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="user.password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_API}/signin`;
      const vm = this;
      this.$http.get(api, vm.user).then((resp) => {
        console.log(resp.data);
      });
    },
  },
};
</script>
