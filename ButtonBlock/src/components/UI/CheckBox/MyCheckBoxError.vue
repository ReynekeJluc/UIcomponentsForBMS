<template>

    <div class="mx-auto h-5">
        <input type="checkbox" class="custom-checkbox" id="check1" name="check1" value="yes" :disabled="!isDisabled">
        <label for="check1"></label>

    </div>

</template>

<script>

    export default {
        name: "MyCheckBox",
        methods: {
            isDisabled() {
                return 1;
            }
        }
    }

</script>

<style> 

    .custom-checkbox {
        position: absolute;
        border: none;
        opacity: 0;
        z-index: -1;
    }
    .custom-checkbox + label{
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox + label::before{
        content: "";
        cursor: pointer;
        width: 1em;
        height: 1em;
        border-radius: 4px;
        background:#6C8BC9;
        background-image: url("../../../assets/icons/checkboxSVG.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    .custom-checkbox:checked + label::before{
        background-color: #3C5099;
    }
    .custom-checkbox:hover + label::before{
        background-color: #3256B0;
    }
    .custom-checkbox:disabled + label::before{
        cursor:default;
        background-color: #C3C6CE;
    }
    
</style>