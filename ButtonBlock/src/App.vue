<script setup>

  import MySwitch from './components/UI/MySwitch.vue';
  import MyPagination from './components/UI/MyPagination.vue';
  import MyCheckbox from './components/UI/MyCheckbox.vue'
  import MyRadio from './components/UI/Radio/MyRadio.vue'

</script>

<template>

  <div class="flex flex-col gap-20"> 
    <MySwitch v-model:modelValue="ToggleValue" v-model:DisableValue="DisableValue"></MySwitch>
    {{ ToggleValue }}
    <MyCheckbox v-model:indeterminate="indeterminate"
                v-model:disabled="disabled" v-model:checked="checked"
                v-model:readonly="readonly" v-model:label="label"
                v-model:labelPosition="labelPosition">
    </MyCheckbox>
    <MyRadio></MyRadio>
    <MyPagination v-model:maxVisibleButtons="maxVisibleButtons" v-model:countAllPage="countAllPage"></MyPagination>
   
  </div>

</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        ToggleValue: false,
        DisableValue: false,
        
        indeterminate: false,
        disabled: false,  
        checked: false,
        readonly: false,
        label: '',
        labelPosition: 'right',

        countAllPage: 20,
        maxVisibleButtons: 3,
      }
    }
  }
  
</script>