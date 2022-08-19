import { reactive } from "vue";

export const store = reactive({
  fullName: "",
  username: "",
  updateData(name, uname){
    this.fullName = name
    this.username = uname
  }
})
