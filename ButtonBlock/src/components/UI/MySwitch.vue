<template>

    <div v-if="DisableValue == false" :class="modelValue ? 'bg-blue-50' : 'bg-black-20'" @click="toggle"
        class="w-16 h-8 transition duration-500 bg-black-20 rounded-full mx-auto mt-5 flex items-center">
        <div :class="{ 'translate-x-8': modelValue }" class="w-6 h-6 bg-white-100 rounded-full m-1 transition duration-500">
        </div>
    </div>

    <div v-else class="w-16 h-8 bg-black-15 rounded-full mx-auto mt-5 flex items-center">
        <div class="w-6 h-6 bg-black-5 rounded-full m-1 "></div>
    </div>

</template>

<script>

    export default {
        name: "MySwitch",
        props: {
            modelValue: {
                type: Boolean
            },
            DisableValue: {
                type: Boolean
            }
        },

        methods: {
            toggle() {
                this.$emit('update:modelValue', !this.modelValue)
            },
        }
    }

</script>