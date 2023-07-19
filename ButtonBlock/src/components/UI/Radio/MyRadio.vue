<script setup>

    import MyRadioBtn from './MyRadioBtn.vue'

</script>


<template>

    <!-- <div class="mx-auto">
        <input type="radio" class="custom-radio" id="radio1" name="radio" :disabled="!isDisabled" >
        <label for="radio1"></label>
        <input type="radio" class="custom-radio" id="radio2" name="radio" :disabled="!isDisabled" >
        <label for="radio2"></label>
        <input type="radio" class="custom-radio" id="radio3" name="radio" :disabled="!isDisabled" >
        <label for="radio3"></label>
    </div> -->

    <div class="mx-auto flex">
        <MyRadioBtn v-model="option" v-for="btn in maxBtn" :value="btn"></MyRadioBtn>
        {{ option }}
    </div>

</template>

<script>

    export default {
        name: "MyRadio",
        props: {
            idBtn: Number,
        },
        data() {
            return {
                option: "A",
                maxBtn: ['A', 'B'],
            }
        }
    }

</script>