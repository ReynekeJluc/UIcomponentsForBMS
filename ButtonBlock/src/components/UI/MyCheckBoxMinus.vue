<template>
    <div class="mx-auto">
        <input type="checkbox" class="custom-checkbox" id="hell" name   ="hell" value="yes" :disabled="isDisabled">
        <label for="hell" class="border-none"></label>

    </div>
</template>


<script>

export default {
    name: "MyCheckBoxMinus",
    methods: {
        isDisabled() {
            return 1;
        }
    }
}

</script>

<style> 
    .custom-checkbox {
        border: none;
        position:absolute;
        z-index: -1 ;
        opacity: 0 ;
        
    }
    .custom-checkbox + label{
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox + label::before{
        content: "";
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: none;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background:#6C8BC9;
        background-image:url("../../assets/icons/CheckboxMinus.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    .custom-checkbox:checked + label::before{
        border-color: none;
        background-color: #3C5099;
        background-image:url("../../assets/icons/CheckboxMinus.svg");   
    }
    .custom-checkbox:hover + label::before{
        background-color: #3256B0;
        background-image:url("../../assets/icons/CheckboxMinus.svg");
    }
    .custom-checkbox:disabled + label::before{
        background-color: #C3C6CE;
        background-image:url("../../assets/icons/CheckboxMinus.svg");
    }


</style>