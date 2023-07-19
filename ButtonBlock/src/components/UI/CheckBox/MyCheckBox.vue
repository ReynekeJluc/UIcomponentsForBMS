<template>

    <div class="mx-auto h-5" v-if="typeCheckbox == 0">
        <input type="checkbox" v-if="DisableCheckbox == false" class="custom-checkbox custom-checkbox-def" id="check" value="yes">
        <input type="checkbox" v-else :disabled="true" class="custom-checkbox custom-checkbox-def" id="check" value="yes">
        <label for="check" v-if="DisableCheckbox == false" @click="incremState"></label>
        <label for="check" v-else></label>
    </div>
    <div class="mx-auto h-5" v-if="typeCheckbox == 1">
        <input type="checkbox" v-if="DisableCheckbox == false" class="custom-checkbox custom-checkbox-minus" id="check" value="yes">
        <input type="checkbox" v-else :disabled="true" class="custom-checkbox custom-checkbox-minus" id="check" value="yes">
        <label for="check" v-if="DisableCheckbox == false" @click="incremState"></label>
        <label for="check" v-else></label>
    </div>
    <div class="mx-auto h-5" v-if="typeCheckbox == 2">
        <input type="checkbox" v-if="DisableCheckbox == false" class="custom-checkbox custom-checkbox-check" id="check" value="yes">
        <input type="checkbox" v-else :disabled="true" class="custom-checkbox custom-checkbox-check" id="check" value="yes">
        <label for="check" v-if="DisableCheckbox == false" @click="incremState"></label>
        <label for="check" v-else></label>
    </div>

</template>

<script>

    export default {
        name: "MyCheckBox",
        props: {
            typeCheckbox: {
                type: Number,
            },
            DisableCheckbox: {
                type: Boolean,
            }
        },
        methods: {
            incremState() {
                if (this.typeCheckbox > 1) this.$emit('update:typeCheckbox', this.typeCheckbox - 2);
                else this.$emit('update:typeCheckbox', this.typeCheckbox + 1);
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
    .custom-checkbox + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox + label::before {
        content: "";
        cursor: pointer;
        width: 1em;
        height: 1em;
        border-radius: 4px;
        background-color: #ffffff;
    }

    .custom-checkbox-def + label::before {
        content: "";
        border: 2px solid #6C8BC9;
    }
    .custom-checkbox-check + label::before {
        content: "";
        background: #6C8BC9;
        background-image: url("../../../assets/icons/checkboxSVG.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    .custom-checkbox-minus + label::before {
        content: "";
        background: #6C8BC9;
        background-image: url("../../../assets/icons/CheckboxMinus.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    .custom-checkbox-def:checked + label::before {
        border-color: #3C5099;
    }
    .custom-checkbox-def:hover + label::before {
        border-color: #3256B0;
        background-color: #fbfcfd;
    }
    .custom-checkbox-def:disabled + label::before {
        cursor: default;
        border-color: #C3C6CE;
        background-color: #F5F7FA;
    }

    .custom-checkbox-check:checked + label::before {
        background-color: #3C5099;
    }
    .custom-checkbox-check:hover + label::before {
        background-color: #3256B0;
    }
    .custom-checkbox-check:disabled + label::before {
        cursor: default;
        background-color: #C3C6CE;
    }
    
    .custom-checkbox-minus:checked + label::before {
        background-color: #3C5099;
    }
    .custom-checkbox-minus:hover + label::before {
        background-color: #3256B0;
    }
    .custom-checkbox-minus:disabled + label::before {
        cursor:default;
        background-color: #C3C6CE;
    }

</style>