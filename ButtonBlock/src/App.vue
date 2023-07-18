<script setup>

  import MySwitch from './components/UI/MySwitch.vue';
  import MyCheckBox from './components/UI/MyCheckBox.vue'
  import MyPagination from './components/UI/MyPagination.vue';

</script>

<template>

  <div class="flex flex-col gap-20"> 
    <MySwitch v-model:modelValue="ToggleValue" v-model:DisableValue="DisableValue"></MySwitch>
    <MyCheckBox></MyCheckBox>
    <MyPagination></MyPagination>

  </div>

</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        ToggleValue: false,
        DisableValue: false
      }
    }
  }
  
</script>

<style>


</style>
