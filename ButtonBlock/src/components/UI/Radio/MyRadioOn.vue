<template>
    <div class="mx-auto">
        <input type="checkbox" class="custom-radio" id="hola2" name="hola2" value="yes" :disabled="!isDisabled" >
        <label for="hola2"></label>

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
        border: none;
        position: absolute;
        z-index: -1;
        opacity: 0;
        
    }
    .custom-radio + label{
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-radio + label::before{
        content: "";
        cursor: pointer;
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #6C8BC9;
        border-radius: 100%;
        margin-right: 0.5em;
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