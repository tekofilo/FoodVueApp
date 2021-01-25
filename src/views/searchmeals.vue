<template>
  <div class="search-meals">
    <form @submit.prevent="findMeal" class="form-inline my-1 my-lg-0">
      <input
        v-model="searchMeal"
        class="form-control mr-sm-2"
        type="text"
        placeholder="Search"
      />
      <button class="btn btn-secondary" type="submit">search</button>
    </form>
    </div>

    <div id="nomealfound" v-if="mealList === null">No meal found</div>
    <div
      class="meal_container"
      v-for="mealThumb in mealList"
      v-bind:key="mealThumb.strMealThumb"
    >
      <img v-bind:src="mealThumb.strMealThumb" />
      <p>{{ mealThumb.strMeal }}</p>
      <p>
        <a href="">{{ mealThumb.strYoutube }}</a>
      </p>
    
  </div>
</template> 
<script>
import axios from "axios";
export default {
  data() {
    return {
      searchMeal: "",
      mealList: {},
    };
  },
  methods: {
    findMeal() {
      let url =
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
        this.searchMeal;
      axios.get(url).then((response) => {
        this.mealList = response.data.meals;
      });
    },
  },
};
</script>

<style>

.search-meals{
 padding-left: 800px;
 padding-top: 0px;
}
.meal_container {
  text-align: center;
  color: white;
  background-color: #2c3e50;
  padding-left: 10 px;
}

img {
  width: 40%;
}
#nomealfound {
  color: white;
  text-align: center;
  font-size: 20px;
  background-color: #2c3e50;
}
</style>