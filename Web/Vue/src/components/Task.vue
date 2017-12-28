<template>
  <div class="task">
    <p>{{task.Title}}</p>
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
}

div.task{
  width: 80%;
  min-width: 500px;
  max-width: 800px;
  border: 1px solid black;
  margin: 5px auto;
}
</style>
