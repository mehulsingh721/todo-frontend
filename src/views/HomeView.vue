<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <Navbar/>
  <section class="list">
    <div class="list__add">
      <input type="text" placeholder="For eg. This candidate is worth the job.">
      <button class="cta">Add Task</button>
    </div>
    <div class="list__status">
      <button>Pending</button>
      <button>In Progress</button>
      <button>Done</button>
    </div>
    <table class="list__items">
      <tr class="list__items--item">
        <td><input type="checkbox"></td>
        <td><p>Adipisicing amet corrupti quo dicta beatae? Deleniti optio molestias iure placeat quod. Quisquam amet eligendi facilis eveniet sequi officiis, deleniti.</p></td>
        <td class="actions">
          <button><font-awesome-icon icon="fa-solid fa-pen" /></button>
          <button><font-awesome-icon icon="fa-solid fa-minus" /></button>
        </td>
      </tr>
    </table>
  </section>
</template>

<style scoped lang="scss">
.list {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 5%;
  &__add{
    width: 100%;
    display: flex;
    justify-content: space-between;
    input{
      width: 85%;
      font-family: var(--font-body);
      font-size: 1.953rem;
      padding-bottom: 1.2rem;
      outline: none;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--color-text);
    }
    .cta{
      font-family: var(--font-body);
      font-weight: 600;
      background-color: var(--color-primary);
      border: none;
      padding: .8rem 1rem;
      color: var(--color-body);
    }
  }

  &__status{
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin-top: 10%;
    grid-gap: 2rem;
    button{
      background-color: transparent;
      border: none;
      font-family: var(--font-body);
      border-bottom: 1px solid var(--color-primary);
      padding-bottom: 1.2rem;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }

  &__items{
    width: 100%;
    margin-top: 3rem;
    border-collapse: collapse;
    tr{
      &:not(:last-child){
        border-bottom: 1px solid #cccccc;
      }
    }
    td{
      padding-right: 2rem;
      font-size: 1.4rem;
      font-weight: 300;
      padding-top: 1rem;
      padding-bottom: 1rem;
      input{
        cursor: pointer;
      }
    }
    .actions{
      display: flex;
      column-gap: 2.5rem;
      button{
        background-color: transparent;
        border: none;
      }
    }
  }
}
</style>
