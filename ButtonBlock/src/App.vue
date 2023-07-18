<script setup>

  import MySwitch from './components/UI/MySwitch.vue';
  import MyPagination from './components/UI/MyPagination.vue';
  import MyCheckBox from './components/UI/CheckBox/MyCheckBox.vue'
  import MyCheckBoxMinus from './components/UI/CheckBox/MyCheckBoxMinus.vue';
  import MyCheckBoxEmpty from './components/UI/CheckBox/MyCheckBoxEmpty.vue'
  import MyRadioOff from './components/UI/Radio/MyRadioOff.vue'

</script>

<template>

  <div class="flex flex-col gap-20"> 
    <MySwitch v-model:modelValue="ToggleValue" v-model:DisableValue="DisableValue"></MySwitch>
    <MyCheckBox></MyCheckBox>
    <MyCheckBoxMinus></MyCheckBoxMinus>
    <MyCheckBoxEmpty></MyCheckBoxEmpty>
    <MyRadioOff></MyRadioOff>
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
