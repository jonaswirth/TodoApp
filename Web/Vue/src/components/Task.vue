<template>
  <div class="task">
    <div class="left">
      <p>{{task.Title}} <i class="fas fa-pencil-alt"></i></p>
    </div>
    <div class="right">
      <p><i class="fas fa-check"></i></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
//import Component from 'vue-class-component';
import {Component, Prop} from 'vue-property-decorator';

import Constants from '../constants.ts';
import Task from '../models/Task';

@Component({
  name: "taskComponent"
})

export default class TaskComponent extends Vue {
@Prop()
task:Task;



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

div.right{

}
</style>
