<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav class="nav">
      <div class="nav__logo"><span class="primary">To</span>Do</div>
      <ul class="nav__links">
        <li class="nav__links--link"><RouterLink to="/">Home</RouterLink></li>
        <li class="nav__links--link"><RouterLink to="/home">Logout</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header{
  width: 100%;
  -webkit-box-shadow: 3px 11px 5px 0px rgba(232,232,232,1);
  -moz-box-shadow: 3px 11px 5px 0px rgba(232,232,232,1);
  box-shadow: 3px 11px 5px 0px rgba(232,232,232,1);
  background-color: var(--color-body);
  padding: 2rem;

  .nav{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    &__logo{
      font-size: 2.4rem;
      font-weight: 600;
      .primary{
        color: var(--color-primary);

      }
    }
    &__links{
      display: flex;
      column-gap: 2rem;
      list-style: none;
      &--link{
        a{
          font-size: 1.4rem;
          text-decoration: none;
          color: var(--color-text);
          padding-bottom: .5rem;
        }
      }
    }
  }
  .router-link-exact-active{
    border-bottom: 2px solid var(--color-primary)
  }
}
</style>
