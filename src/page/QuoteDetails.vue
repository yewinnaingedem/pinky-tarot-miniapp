<template>
    <MainHeader>
        <template #left_content>
            <router-link :to="{name : 'home'}" class="back-btn">
                <svg height="512" viewBox="0 0 486.65 486.65" width="512"><path d="m202.114 444.648c-8.01-.114-15.65-3.388-21.257-9.11l-171.875-171.572c-11.907-11.81-11.986-31.037-.176-42.945.058-.059.117-.118.176-.176l171.876-171.571c12.738-10.909 31.908-9.426 42.817 3.313 9.736 11.369 9.736 28.136 0 39.504l-150.315 150.315 151.833 150.315c11.774 11.844 11.774 30.973 0 42.817-6.045 6.184-14.439 9.498-23.079 9.11z"/><path d="m456.283 272.773h-425.133c-16.771 0-30.367-13.596-30.367-30.367s13.596-30.367 30.367-30.367h425.133c16.771 0 30.367 13.596 30.367 30.367s-13.596 30.367-30.367 30.367z"/>
                </svg>
            </router-link>
        </template>
        <template #mid_content >
            <h1 class="mb-0 text-white spacing-cus">{{ $t('logo_name') }}</h1> 
        </template>
    </MainHeader>
    <div class="mt-3 container">
        <div class='d-flex column'>
            <div class="content text-center w-80 mx-auto">
                <div class='bg-red rounded h-40-px w-100 d-flex mb-4 justify-content-center align-items-center'>
                    <div class="fs-5 spacing-cus text-white ">{{ name }}</div>
                </div>
                <div class="content-body mb-4" v-for="(item) in packages" :key="item.id">
                    <div class='bg-red rounded h-40-px w-100 d-flex justify-content-between px-3 align-items-center'>
                        <div class="fs-5 spacing-cus text-black fw-bold ">{{ item.name }}</div>
                        <div>arrow</div>
                    </div>
                    <div class="card mt-3 bg-red">
                        <div class="card-body">
                            <ul class="mb-3">
                                <li class="text-start text-black " v-for="(includedItem , index) in item.included" :key="index" >
                                    <strong class="pe-1">{{index + 1 }}.</strong>
                                    <span class="spacing-cus">{{includedItem}}</span>
                                </li>
                            </ul>
                            <button class="w-100 mx-auto position-relative mb-3 bg-danger cus-btn h-40-px rounded px-3">
                                <span class="text-red ">Fill the information</span>
                                <span class='position-absolute right-0 top-0 w-40-px'>arrow</span>
                            </button>
                            <form>
                                <div class="mb-3 cus-input">
                                    <span>Name</span>
                                    <input type="text" class="bg-transparent border-0 h-100 ps-4" />
                                </div>
                                <div class="mb-3 cus-input">
                                    <span>Birthday</span>
                                    <input type="text" class="bg-transparent border-0 h-100 ps-4" />
                                </div>
                                <div class="mb-3 cus-input">
                                    <span>Gender</span>
                                    <input type="text" class="bg-transparent border-0 h-100 ps-4" />
                                </div>
                                <div class="mb-3 cus-input">
                                    <span>Phone</span>
                                    <input type="text" class="bg-transparent border-0 h-100 ps-4" />
                                </div>
                                <div class="mb-3">
                                    <p class="mb-0 text-red">*Please input the phone number that is used viber or telegram</p>
                                </div>
                                <div class="mb-3 row mx-auto">
                                    <div class="col-1 px-0"><input class="form-control-checkbox" id="accepted" type="checkbox"/></div>
                                    <div class="col"><label class="text-start" for="accepted">We will be answered your questio within 24 hour that is argee</label></div>
                                </div>
                                <router-link  :to="{name : 'success'}" class="h-40-px w-100 d-flex justify-content-center align-items-center rounded bg-red ">
                                    Submit 
                                </router-link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { packages } from "@/assets/js/textHelper";
    import MainHeader from "@/components/utils/MainHeader.vue"
    import {useRoute} from "vue-router" ;
    const router = useRoute() ;
    const name = router.params.name ;
</script>