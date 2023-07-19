<template>
    
    <div class="mx-auto h-5">
        <label>
            <span v-if="label && labelPosition === 'left'">{{ label }}</span>
            <input :indeterminate="indeterminate" type="checkbox" 
                   :readonly="readonly"
                   :disabled="disabled"
                   :checked="checked"
                   class="rounded
                          cursor-pointer
                        border-black-15 
                          border-2

                        disabled:border-black-15
                        disabled:cursor-default
                        disabled:indeterminate::bg-black-15
                        disabled:checked::bg-black-15

                        hover:[&:not(:disabled)]:[&:not(:checked)]:[&:not(:indeterminate)]:border-blue-40 
                        focus:[&:not(:disabled)]:ring-transparent 
                        focus:[&:not(:disabled)]:[&:not(:checked)]:[&:not(:indeterminate)]:border-blue-120

                        checked:[&:not(:disabled)]:bg-blue-50
                        checked:focus:[&:not(:disabled)]:bg-blue-50
                        checked:focus:hover:[&:not(:disabled)]:bg-blue-100
                        checked:active:hover:[&:not(:disabled)]:bg-blue-100
                        checked:focus:active:[&:not(:disabled)]:bg-blue-120
                        
                        indeterminate:[&:not(:disabled)]:bg-blue-50
                        indeterminate:hover:[&:not(:disabled)]:bg-blue-100
                        indeterminate:focus:[&:not(:disabled)]:bg-blue-50
                        indeterminate:focus:hover:[&:not(:disabled)]:bg-blue-100
                        indeterminate:active:hover:[&:not(:disabled)]:bg-blue-100
                        indeterminate:focus:active:[&:not(:disabled)]:bg-blue-120"
            >
            <input type="checkbox" v-show="readonly" :readonly="readonly"
                   class="cancel 
                          read-only:border-none
                          read-only:cursor-pointer
                          read-only:focus:ring-transparent
                          read-only:focus:bg-transparent
                          read-only:active:ring-transparent
                          read-only:active:bg-transparent"
            >
            <span v-if="label && labelPosition === 'right'">{{ label }}</span>
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
                type: String
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




    /* input[type="checkbox"]:read-only:not(.cancel) {
        background-image: url('data:image/svg+xml,<svg viewBox="0 0 16 16" class="fill-current text-blue-50" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>');
    }
    input[type="checkbox"]:read-only {
        background-image: url('data:image/svg+xml,<svg width="12" height="12" viewBox="0 0 12 12" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.768485 0.768485C1.12647 0.410505 1.70687 0.410505 2.06485 0.768485L6 4.70364L9.93515 0.768485C10.2931 0.410505 10.8735 0.410505 11.2315 0.768485C11.5895 1.12647 11.5895 1.70687 11.2315 2.06485L7.29636 6L11.2315 9.93515C11.5895 10.2931 11.5895 10.8735 11.2315 11.2315C10.8735 11.5895 10.2931 11.5895 9.93515 11.2315L6 7.29636L2.06485 11.2315C1.70687 11.5895 1.12647 11.5895 0.768485 11.2315C0.410505 10.8735 0.410505 10.2931 0.768485 9.93515L4.70364 6L0.768485 2.06485C0.410505 1.70687 0.410505 1.12647 0.768485 0.768485Z" fill="#C3C6CE"/></svg>');
    } */




</style>







<!-- #6C8BC9 -->



<!--  read-only:border-none
                        read-only:cursor-pointer
                        read-only:focus:ring-transparent
                        read-only:focus:bg-transparent
                        read-only:active:ring-transparent
                        read-only:active:bg-transparent" -->