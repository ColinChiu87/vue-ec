<template>
  <div>
    <div class="text-right mt-4">
      <button class="btn btn-primary">建立新產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品分類</th>
          <th width="80">原價</th>
          <th width="80">售價</th>
          <th width="100">是否啟用</th>
          <th width="80">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price }}</td>
          <td class="text-right">{{ item.price }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api";

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products`;
      this.$http.get(api).then((resp) => {
        console.log(resp.data);
        vm.products = resp.data.products;
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

