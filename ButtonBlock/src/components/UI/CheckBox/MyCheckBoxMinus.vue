<template>
    
    <div class="mx-auto h-5">
        <input type="checkbox" class="custom-checkbox-minus" id="check2" name="check2" value="yes" :disabled="!isDisabled">
        <label for="check2"></label>
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

    .custom-checkbox-minus {
        position: absolute;
        border: none;
        opacity: 0;
        z-index: -1;
    }

    .custom-checkbox-minus + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    .custom-checkbox-minus + label::before {
        content: "";
        cursor: pointer;
        width: 1em;
        height: 1em;
        border: none;
        border-radius: 4px;
        background: #6C8BC9;
        background-image: url("../../../assets/icons/CheckboxMinus.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    .custom-checkbox-minus:checked + label::before {
        background-color: #3C5099;
    }

    .custom-checkbox-minus:hover + label::before {
        background-color: #3256B0;
    }

    .custom-checkbox-minus:disabled + label::before {
        cursor: default;
        background-color: #C3C6CE;
    }
    
</style>