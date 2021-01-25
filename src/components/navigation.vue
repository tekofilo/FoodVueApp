<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">FoodVue</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="menu-item" to="/">
            <a class="nav-link" href="#">Home</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="menu-item" to="/categories">
            <a class="nav-link" href="#">Categories</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="menu-item" to="/areas"
            ><a class="nav-link" href="#">Areas</a></router-link
          >
        </li>

        <li class="nav-item">
          <router-link class="menu-item" to="/searchmeals"
            ><a class="nav-link" href="#">Search</a></router-link
          >
        </li>
      </ul>

      <!--     
    <form  @submit.prevent="findMeal" class="form-inline my-1 my-lg-0">
      <input  v-model="searchMeal" class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-secondary my-1 my-sm-0" type="submit">search</button>
    </form>
     -->
    </div>
  </nav>
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
        console.log(response.data.meals);
      });
    },
  },
};
</script>
