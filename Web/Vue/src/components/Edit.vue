<template>
  <div>
    <h1>Edit Task</h1>
    <input type="text" v-model="task.Title"/>
    <button v-on:click="save">Save & Back</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Constants from '../constants.ts';
import Task from './Task';

@Component
export default class Edit extends Vue{
private task:Task = new Task();

mounted(){
    this.axios.get(Constants.api + "/" + this.$route.params.id)
    .then((response) => {
      this.task = response.data[0];
    })
    .catch((error) => {
      console.log(error);
    })
  };


save(){
  this.axios.put(
      Constants.api + "/edit",
      {task:this.task},
      {headers:{"Content-Type": "application/json"}}
    )
  .then((response) => {
    this.$router.push('/');
  })
  .catch((error) => {
    console.log(error);
  });
};

}
</script>

<style>
<style>
