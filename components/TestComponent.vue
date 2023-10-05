<script lang="ts" setup>
const count = ref(0);

const handleClick = (decrementing: boolean) => {
  if (decrementing) {
    count.value--;
  } else {
    count.value++;
  }
};
</script>

<template>
  <div>Component: TestComponent</div>
  <button @click="handleClick(false)">+</button>
  <button @click="handleClick(true)">-</button>
  <p>Count: {{ count }}</p>
</template>

<style scoped></style>
