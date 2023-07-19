<script setup>

  import MySwitch from './components/UI/MySwitch.vue';
  import MyPagination from './components/UI/MyPagination.vue';
  import MyCheckbox from './components/UI/CheckBox/MyCheckBox.vue'
  import MyRadio from './components/UI/Radio/MyRadio.vue'

</script>

<template>

  <div class="flex flex-col gap-20"> 
    <MySwitch v-model:modelValue="ToggleValue" v-model:DisableValue="DisableValue"></MySwitch>
    {{ ToggleValue }}
    <MyCheckbox v-model:typeCheckbox="TypeBox" v-model:DisableCheckbox="DisableCheckbox"></MyCheckbox>
    <MyRadio></MyRadio>
    <MyPagination></MyPagination>
   
  </div>

</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        ToggleValue: false,
        TypeBox: 0,
        DisableValue: false,
        DisableCheckbox: false,
      }
    }
  }
  
</script>