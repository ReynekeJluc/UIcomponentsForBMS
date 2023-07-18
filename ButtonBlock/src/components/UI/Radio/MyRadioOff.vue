<template>

    <div class="mx-auto">
        <input type="radio" class="custom-radio" id="radio1" name="radio" :disabled="!isDisabled" >
        <label for="radio1"></label>
        <input type="radio" class="custom-radio" id="radio2" name="radio" :disabled="!isDisabled" >
        <label for="radio2"></label>
        <input type="radio" class="custom-radio" id="radio3" name="radio" :disabled="!isDisabled" >
        <label for="radio3"></label>
    </div>

</template>


<script>

export default {
    name: "MyRadioOff",
    methods: {
        isDisabled() {
            return 1;
        }
    }
}

</script>

<style> 

    .custom-radio {
        position: absolute;
        border: none;
        opacity: 0;
        z-index: -1;
    }
    .custom-radio + label{
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-radio + label::before{
        content: "";
        cursor: pointer;
        width: 1em;
        height: 1em;
        border: 2px solid #6C8BC9;
        border-radius: 100%;
        background-color:#ffffff;
        margin: 2px;
    }
    .custom-radio:checked + label::before{
        border-color: #3C5099;   
    }
    .custom-radio:hover + label::before{
        border-color:#3256B0;
        background-color: #fbfcfd;
    }
    .custom-radio:disabled + label::before{
        cursor: default;
        border-color: #C3C6CE;
        background-color: #F5F7FA ;
    }

</style>