<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sapiente
      adipisci inventore maiores excepturi placeat, quae obcaecati impedit nisi
      ipsum non sunt quidem, qui voluptates exercitationem alias, dolorem
      corrupti officiis?
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sapiente
      adipisci inventore maiores excepturi placeat, quae obcaecati impedit nisi
      ipsum non sunt quidem, qui voluptates exercitationem alias, dolorem
      corrupti officiis?
    </p>
    <p>{{ data }}</p>
  </div>
</template>
<script setup>
const { data } = await useFetch("api/currency/GBP");
</script>
<style scoped>
h2 {
  margin-top: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
