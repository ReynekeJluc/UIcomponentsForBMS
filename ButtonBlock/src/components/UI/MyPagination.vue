<template>
    <ul class="pagination flex mx-auto items-center text-3xl">
        <li class="pagination_item">
            <button @click="inBeginActivePAge" v-if="!isInFirstPage" href="#" class="text-3xl w-12 h-12 bg-white-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 -2 25 25" fill="">
                    <path d="M9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44771 7 8V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16L9 8Z" fill="" class="fill-black-15"/>
                    <path d="M13.2929 7.70711C13.9229 7.07714 15 7.52331 15 8.41421V15.5858C15 16.4767 13.9229 16.9229 13.2929 16.2929L9.70711 12.7071C9.31658 12.3166 9.31658 11.6834 9.70711 11.2929L13.2929 7.70711Z" 
                        fill="" class="fill-black-15"/>
                </svg>
            </button>
            <button v-else :disabled="isInFirstPage" class="text-3xl w-12 h-12 bg-white-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 -2 25 25" fill="">
                    <path d="M9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44771 7 8V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16L9 8Z" fill="" class="fill-black-10"/>
                    <path d="M13.2929 7.70711C13.9229 7.07714 15 7.52331 15 8.41421V15.5858C15 16.4767 13.9229 16.9229 13.2929 16.2929L9.70711 12.7071C9.31658 12.3166 9.31658 11.6834 9.70711 11.2929L13.2929 7.70711Z" 
                        fill="" class="fill-black-10"/>
                </svg>
            </button>
        </li>
        <li class="pagination_item">
            <button @click="decrementActivePage" v-if="!isInFirstPage" :disabled="isInFirstPage" href="#" class="text-3xl w-12 h-12 px-2 bg-white-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="5 -2 25 25" fill="">
                    <path
                        d="M15 8.41421C15 7.52331 13.9229 7.07714 13.2929 7.70711L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L13.2929 16.2929C13.9229 16.9229 15 16.4767 15 15.5858V8.41421Z"
                        fill="" class="fill-black-15" />
                </svg>
            </button>
            <button v-else :disabled="isInFirstPage" class="text-3xl w-12 h-12 px-2 bg-white-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="5 -2 25 25" fill="">
                    <path
                        d="M15 8.41421C15 7.52331 13.9229 7.07714 13.2929 7.70711L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L13.2929 16.2929C13.9229 16.9229 15 16.4767 15 15.5858V8.41421Z"
                        fill="" class="fill-black-10"/>
                </svg>
            </button>
        </li>
        <li class="first-item-pagination">
            <button v-if="startPage != 1" @click="inBeginActivePAge" type="button" 
                        class="rounded-full w-12 h-12 hover:bg-blue-50 hover:text-white-100" 
            >
                1
            </button>
        </li>
        <li v-show="startPage >= 2" class="pagination_item">
                <button type="button" >
                    ...
                </button>
        </li>
        <li class="pagination_items flex gap-3">
            <li v-for="page in pages" class="pagination-item">
                <button 
                    :class="isPageActive(page.name) ? 'bg-blue-50 text-white-100' : 'bg-white-100'"
                    type="button"
                    class="rounded-full w-12 h-12"
                    @click="onClickPage(page.name)"
                    :disabled="page.isDisabled"
                    
                    v-bind:id="page.name"
                >
                    {{ page.name }}
                </button>
            </li>
            <li v-if="endPage + 1 < countAllPage" class="pagination_item">
                <button type="button" >
                    ...
                </button>
            </li>
            <li class="pagination_item">
                <button v-if="endPage != countAllPage" @click="inEndActivePage" type="button" 
                        class="rounded-full w-12 h-12 hover:bg-blue-50 hover:text-white-100" 
                >
                    {{ countAllPage }}
                </button>
            </li>
        </li>
        <li class="pagination_item">
            <button v-if="!isInLastPage" @click="incrementActivePage" href="#" class="text-3xl w-12 h-12 bg-white-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 1 25 25" fill="none" class="rotate-180">
                    <path
                        d="M15 8.41421C15 7.52331 13.9229 7.07714 13.2929 7.70711L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L13.2929 16.2929C13.9229 16.9229 15 16.4767 15 15.5858V8.41421Z"
                        fill="" class="fill-black-15" />
                </svg>
            </button>
            <button v-else :disabled="isInLastPage" class="text-3xl w-12 h-12 bg-white-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 1 25 25" fill="none" class="rotate-180">
                    <path
                        d="M15 8.41421C15 7.52331 13.9229 7.07714 13.2929 7.70711L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L13.2929 16.2929C13.9229 16.9229 15 16.4767 15 15.5858V8.41421Z"
                        fill="" class="fill-black-10" />
                </svg>
            </button>
        </li>
        <li class="pagination_item">
            <button v-if="!isInLastPage" @click="inEndActivePage" href="#" class="text-3xl w-12 h-12 bg-white-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-1 1 25 25" fill="none" class="rotate-180">
                    <path d="M9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44771 7 8V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16L9 8Z" fill="" class="fill-black-15"/>
                    <path d="M13.2929 7.70711C13.9229 7.07714 15 7.52331 15 8.41421V15.5858C15 16.4767 13.9229 16.9229 13.2929 16.2929L9.70711 12.7071C9.31658 12.3166 9.31658 11.6834 9.70711 11.2929L13.2929 7.70711Z" 
                        fill="" class="fill-black-15"/>
                </svg>
            </button>
            <button v-else :disabled="isInLastPage" class="text-3xl w-12 h-12 px-2 bg-white-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-1 1 25 25" fill="none" class="rotate-180">
                    <path d="M9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44771 7 8V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16L9 8Z" fill="" class="fill-black-10"/>
                    <path d="M13.2929 7.70711C13.9229 7.07714 15 7.52331 15 8.41421V15.5858C15 16.4767 13.9229 16.9229 13.2929 16.2929L9.70711 12.7071C9.31658 12.3166 9.31658 11.6834 9.70711 11.2929L13.2929 7.70711Z" 
                        fill="" class="fill-black-10"/>
                </svg>
            </button>
        </li>
    </ul>

</template>

<script>

    export default {
        name: "MyPagination_2",
        data() {
            return {
                numberActivePage: 1,
                countAllPage: 100,
                maxVisibleButtons: 10,
            }

        },
        computed: {
            startPage() {
                if (this.numberActivePage <= Math.floor(this.maxVisibleButtons / 2) + 1) {
                    return 1;
                }


                if ( this.countAllPage - this.numberActivePage < Math.floor(this.maxVisibleButtons / 2)) {
                    return this.countAllPage - this.maxVisibleButtons + 1;
                }

                return this.numberActivePage - Math.floor(this.maxVisibleButtons / 2);
            },
            isInFirstPage() {
                return this.numberActivePage === 1;
            },
            isInLastPage() {
                return this.numberActivePage === this.countAllPage;
            },
            endPage() {
                return Math.min(
                    this.startPage + this.maxVisibleButtons - 1,
                    this.countAllPage
                );
            },
            pages() {
                const range = [];

                for (let i = this.startPage; i <= this.endPage; i += 1) {
                    range.push({
                        name: i,
                        isDisabled: i === this.numberActivePage
                    });
                }

                return range;
            },
        },
        methods:{
            inEndActivePage(){
                return this.numberActivePage = this.countAllPage;
            },
            inBeginActivePAge(){
                return this.numberActivePage = 1;
            },
            incrementActivePage(){
                return this.numberActivePage++;
            },
            decrementActivePage(){
                return this.numberActivePage--;
            },

            onClickPage(page) {
                this.numberActivePage = page;
            },

            isPageActive(page) {
                return this.numberActivePage === page;
            },
        }
    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Golos+Text&display=swap');
</style>
