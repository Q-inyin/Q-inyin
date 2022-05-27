<template>
  <!-- <div>
      <input type="text" v-model="newTodoItem">
      <button v-on:click="addTodo">add</button>
  </div> -->
  <div class="inputBox shadow">
      <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn" aria-hidden="true"></i>
      </span>
  </div>
  </div>
</template>


<script>
export default {
    data: function() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== '') {
        var obj = {completed: false, item: this.newTodoItem};
        //(텍스트,텍스트) 가 아닌 (텍스트, 불린) 을 저장
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem= ''; //비워주기(초기화)
    }
  }
}
</script>

<style scoped>
    input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #62EAC6, #32CEE6);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>