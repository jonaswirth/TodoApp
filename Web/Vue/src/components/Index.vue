<template>
  <div>
    <h1>Todo-App</h1>
    <input type="checkbox" name="ShowOnlyOpen" v-model="ShowOnlyOpen"> Only show open Tasks
    <!--<p v-for="task in tasks">{{task.Title}}</p>-->
    <task v-for="task in filteredTasks" :task="task"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Constants from '../constants.ts';
import Task from './Task.vue';


@Component({
  components:{
    Task
  }
})
export default class Index extends Vue {
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
</style>
