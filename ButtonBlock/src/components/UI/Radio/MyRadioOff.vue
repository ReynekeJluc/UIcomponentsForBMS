<template>

    <div class="mx-auto">
        <input type="radio" class="custom-radio" id="hola2" name="hola2" :disabled="!isDisabled" >
        <label for="hola2"></label>
        <input type="radio" class="custom-radio" id="hola3" name="hola3" :disabled="!isDisabled" >
        <label for="hola3"></label>
        <input type="radio" class="custom-radio" id="hola4" name="hola4" :disabled="!isDisabled" >
        <label for="hola4"></label>
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
        border: 1px solid #6C8BC9;
        border-radius: 100%;
        background-color:#ffffff;
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