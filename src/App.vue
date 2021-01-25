<template>
  <div id="app">
    <div id="nav">
      <navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import navigation from "./components/navigation";

export default {
  components: {
    navigation
  },
};
</script>

