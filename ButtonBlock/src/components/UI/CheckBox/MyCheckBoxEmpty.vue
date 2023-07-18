<template>

    <div class="mx-auto h-5">
        <input type="checkbox" class="custom-checkbox-empty" id="check3" name="check3" value="yes" :disabled="!isDisabled">
        <label for="check3"></label>
    </div>

</template>


<script>

    export default {
        name: "MyCheckBoxEmpty",
        methods: {
            isDisabled() {
                return 1;
            }
        }
    }

</script>

<style> 

    .custom-checkbox-empty {
        position: absolute;
        border: none;
        opacity: 0;
        z-index: -1;
    }

    .custom-checkbox-empty + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    .custom-checkbox-empty + label::before {
        content: "";
        cursor: pointer;
        width: 1em;
        height: 1em;
        border: 1px solid #6C8BC9;
        border-radius: 4px;
        background-color: #ffffff;
    }

    .custom-checkbox-empty:checked + label::before {
        border-color: #3C5099;
    }

    .custom-checkbox-empty:hover + label::before {
        border-color: #3256B0;
        background-color: #fbfcfd;
    }

    .custom-checkbox-empty:disabled + label::before {
        cursor: default;
        border-color: #C3C6CE;
        background-color: #F5F7FA;
    }

</style>