<template>
  <Navbar/>
  <section class="list">
    <div class="list__add">
      <input type="text" v-model="task" placeholder="For eg. This candidate is worth the job.">
      <button class="cta" @click="addTask()">Add Task</button>
    </div>
    <table class="list__items">
      <tr class="list__items--item" v-for="task in allTasks" :key="task.id">
        <td><input type="checkbox" @change="() => deleteTask(task)"></td>
        <td><p>{{task.task}}</p></td>
        <td class="actions">
          <button @click="() => deleteTask(task)"><font-awesome-icon icon="fa-solid fa-minus" /></button>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
export default{
  components: {
    Navbar
  },
  setup() {
    const task = ref("")
    const status = ref("")
    const allTasks = ref([])

    function getAllTasks() {
      axios.get("http://localhost:8080/api/tasks").then((res) => {
        console.log(res.data)
        allTasks.value = res.data
      })
    }

    function addTask() {
      const data = {
        task: task.value,
        status: "Pending"
      }
      axios.post("http://localhost:8080/api/tasks/create", data).then((res) => {
        task.value = ""
        getAllTasks()
      })
    }

    function deleteTask(task) {
      axios.delete("http://localhost:8080/api/tasks/delete", {
        params: {
          taskId: task.id
        }
      }).then(() => {
        getAllTasks()
      })
    }

    onMounted(() => {
      getAllTasks()
    })
    return {addTask, task, getAllTasks, allTasks, status, deleteTask}
  }
}
</script>


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
      cursor: pointer;
      padding: .8rem 1rem;
      color: var(--color-body);
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
        cursor: pointer;
      }
    }
  }
}
</style>
