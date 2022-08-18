<script setup>
</script>

<template>

  <RouterView />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%; // 1rem = 10px;
    --color-body: #eeeeee;

    --color-primary: #f15412;

    --color-secondary: #34B3F1;

    --color-text: #000000;

    --font-body: 'Montserrat', sans-serif;
}

body {
  background-color: var(--color-body);
  font-family: var(--font-body);
}
</style>
