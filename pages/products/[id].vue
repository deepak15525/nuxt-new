<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});

const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri);
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found.",
    fatal: true,
  });
}
</script>

<style scoped></style>
