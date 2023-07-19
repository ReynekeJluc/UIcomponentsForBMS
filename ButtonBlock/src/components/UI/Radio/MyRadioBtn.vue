<template>
    <label for="radio">
        <input type="radio" :="$attrs" class="custom-radio" name="radio" :id="id" v-model="modelValue" :disabled="!isDisabled">
    </label>
</template>

<script setup>
import { randomID } from '../../../utils';


const id = randomID()
const modelValue = defineModel()
defineOptions({inheritAttrs: false})
function isDisabled() {
    return 1;
}

</script>
<!-- 
<style>
.custom-radio {
    position: absolute;
    border: none;
    opacity: 0;
    z-index: -1;
}

.custom-radio+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
}

.custom-radio+label::before {
    content: "";
    cursor: pointer;
    width: 1em;
    height: 1em;
    border: 2px solid #6C8BC9;
    border-radius: 100%;
    background-color: #ffffff;
    margin: 2px;
}

.custom-radio:checked+label::before {
    border: 4px solid #3C5099;
}

.custom-radio:hover+label::before {
    border: 4px solid #3256B0;
    background-color: #fbfcfd;
}

.custom-radio:disabled+label::before {
    cursor: default;
    border-color: #C3C6CE;
    background-color: #F5F7FA;
}
</style> -->