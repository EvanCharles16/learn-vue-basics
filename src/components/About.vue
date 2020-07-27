<template>
  <div class="cute">
    <h1>About</h1>
    <Card title="title-card" text="text-card" />
    <Form />
  </div>
</template>

<script>
import Card from "./Card";
import Form from "./Form";

export default {
  name: "About",
  components: { Card, Form },
};
</script>

<style scoped>
.cute {
  padding: 10em;
}
</style>
