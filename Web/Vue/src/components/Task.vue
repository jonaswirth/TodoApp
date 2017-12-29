<template>
  <div class="task">
    <div class="left">
      <p>{{task.Title}} <router-link :to="'/edit/'+task.TaskID"><i class="fas fa-pencil-alt"></i></router-link></p>
    </div>
    <div class="right">
      <p><i v-on:click="closeTask()" class="fas fa-check"></i></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import Constants from '../constants.ts';
import Task from '../models/Task';

@Component
export default class Task extends Vue {
@Prop()
task:Task;

closeTask(){
  this.axios.put(Constants.api+"/close/"+this.task.TaskID)
  .then(() => {
    this.task.Closed = true;
  })
  .catch((error) =>{
    console.log("error: " + error);
  })
}

}
</script>

<style>
p {
  color:black;
  font-size: 1.2em;
}

div.task{
  width: 80%;
  min-width: 500px;
  max-width: 800px;
  border: 1px solid black;
  margin: 5px auto;
  overflow: hidden;
  padding: 3px;
}

div.left{
  width: 80%;
  float:left;
  overflow: hidden;
  text-align: left;
}
</style>
