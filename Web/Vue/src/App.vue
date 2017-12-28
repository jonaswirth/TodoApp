<template>
  <div id="app">
    <h1>Todo-App</h1>
    <input type="checkbox" name="ShowOnlyOpen" v-model="ShowOnlyOpen"> Only show open Tasks
    <!--<p v-for="task in tasks">{{task.Title}}</p>-->
    <taskComponent v-for="task in filteredTasks" :task="task"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Constants from './constants.ts';
import TaskComponent from './components/Task.vue';


@Component({
  components:{
    TaskComponent
  }
})

export default class Task extends Vue {
  private tasks:any = [];
  private ShowOnlyOpen:boolean = true;


  mounted(){
    this.axios.get(Constants.api)
    .then((response) => {
      this.tasks = response.data;
    })
    .catch((error) => {
      console.log(error);
    })
  }

  get filteredTasks():any {
    if(!this.ShowOnlyOpen)
      return this.tasks;

    return this.tasks.filter((element, filter, array) => {
      return element.Closed == false;
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
