<template>
  <div class="area">
    <p>{{ findArea() }}</p>
    <ul class="container" v-for="area in mealAreas" v-bind:key="area.strArea">
      <li>{{ area.strArea }}</li>
    </ul>
  </div>
</template> 
<script>
import axios from "axios";
export default {
  data() {
    return {
      mealAreas: {},
    };
  },
  methods: {
    findArea() {
      let url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
      axios.get(url).then((response) => {
        this.mealAreas = response.data.meals;
        console.log(response.data.meals);
        // this.meals = response.data
        // console.log(this.meals)
      });
    },
  },
};
</script>

<style>
.area {
  color: aliceblue;
  align-content: flex-start;
}
</style>
