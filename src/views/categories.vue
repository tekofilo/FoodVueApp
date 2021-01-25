<template>
  <div class="card mb-3">
    <p>
      {{ findCategory() }}
    </p>

    <div
      class="container"
      v-for="category in mealCategories"
      v-bind:key="category.strCategoryThumb"
    >
      <h3 class="card-header">{{ category.strCategory }}</h3>

      <div class="card-body"></div>

      <img v-bind:src="category.strCategoryThumb" />

      <div class="card-body">
        <p class="card-text">{{ category.strCategoryDescription }}.</p>
      </div>
    </div>
  </div>
</template> 
<script>
import axios from "axios";
export default {
  data() {
    return {
      mealCategories: {},
    };
  },
  methods: {
    findCategory() {
      let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
      axios.get(url).then((response) => {
        this.mealCategories = response.data.categories;
        console.log(response.data.categories);
        // this.meals = response.data
        // console.log(this.meals)
      });
    },
  },
};
</script>
<style>
.container {
  background-color: #2c3e50;
  color: aliceblue;
  text-align: center;
}
.card-text {
  color: white;
}
</style>