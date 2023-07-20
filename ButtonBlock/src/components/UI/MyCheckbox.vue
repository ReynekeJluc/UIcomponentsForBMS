<template>
    
    <div class="mx-auto h-5">
        <label>
            <span v-if="label && labelPosition === 'left'" class="mx-5">{{ label }}</span>
            <input :indeterminate="indeterminate" type="checkbox" 
                   :readonly="readonly"
                   :disabled="disabled"
                   :checked="checked"
                   class="rounded transition ease-in-out delay-70
                          cursor-pointer
                          border-2
                          border-black-15 

                          disabled:cursor-default
                          disabled:indeterminate:bg-transparent
                          disabled:checked:bg-transparent
                        disabled:border-black-15
                        disabled:indeterminate:hover:border-black-15
                        disabled:checked:hover:border-black-15

                        focus:enabled:ring-transparent 
                        hover:enabled:[&:not(:checked)]:[&:not(:indeterminate)]:border-blue-40 
                        focus:enabled:hover:[&:not(:checked)]:[&:not(:indeterminate)]:border-blue-40
                        active:focus:enabled:[&:not(:checked)]:[&:not(:indeterminate)]:border-blue-120

                        checked:enabled:bg-blue-50
                        checked:focus:enabled:bg-blue-50
                        checked:hover:enabled:bg-blue-100
                        checked:focus:hover:enabled:bg-blue-100
                        checked:active:hover:enabled:bg-blue-100
                        checked:focus:active:enabled:bg-blue-120
                        
                        indeterminate:enabled:bg-blue-50
                        indeterminate:focus:enabled:bg-blue-50
                        indeterminate:hover:enabled:bg-blue-100
                        indeterminate:focus:hover:enabled:bg-blue-100
                        indeterminate:active:hover:enabled:bg-blue-100
                        indeterminate:focus:active:enabled:bg-blue-120"
            >
            <span v-if="label && labelPosition === 'right'" class="mx-5">{{ label }}</span>
        </label>
    </div>

    <!-- Осталось readonly -->

</template>

<script>

    export default {
        name: "MyCheckBox",
        props: {
            indeterminate: {
                type: Boolean,
                required: false
            },
            disabled: {
                type: Boolean,
                required: false
            },
            checked: {
                type: Boolean,
                required: false
            },
            readonly: {
                type: Boolean,
                required: false
            },
            label: {
                type: String,
                required: false
            },
            labelPosition: {
                default: 'right'
            }
        },
    }

</script>

<style scoped>

    input[type="checkbox"]:indeterminate {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="-2 -2 14 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H9C9.55229 0 10 0.447715 10 1C10 1.55228 9.55229 2 9 2H1C0.447715 2 0 1.55228 0 1Z" fill="white"/></svg>');
    }
    input[type="checkbox"]:checked {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="-2 0 14 7" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.72954 0.316062C10.1073 0.718974 10.0869 1.35181 9.68394 1.72954L3.66667 7.37074L0.316062 4.22954C-0.0868501 3.85181 -0.107264 3.21897 0.270466 2.81606C0.648196 2.41315 1.28103 2.39274 1.68394 2.77047L3.66667 4.62927L8.31606 0.270466C8.71897 -0.107264 9.35181 -0.0868501 9.72954 0.316062Z" fill="white"/></svg>');
    }

</style>