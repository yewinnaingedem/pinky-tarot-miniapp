<template>
    <MainHeader>
        <template #left_content>
            <router-link :to="{name : 'home'}" class="back-btn">
                <svg height="512" viewBox="0 0 486.65 486.65" width="512"><path d="m202.114 444.648c-8.01-.114-15.65-3.388-21.257-9.11l-171.875-171.572c-11.907-11.81-11.986-31.037-.176-42.945.058-.059.117-.118.176-.176l171.876-171.571c12.738-10.909 31.908-9.426 42.817 3.313 9.736 11.369 9.736 28.136 0 39.504l-150.315 150.315 151.833 150.315c11.774 11.844 11.774 30.973 0 42.817-6.045 6.184-14.439 9.498-23.079 9.11z"/><path d="m456.283 272.773h-425.133c-16.771 0-30.367-13.596-30.367-30.367s13.596-30.367 30.367-30.367h425.133c16.771 0 30.367 13.596 30.367 30.367s-13.596 30.367-30.367 30.367z"/>
                </svg>
            </router-link>
        </template>
        <template #mid_content>
            <h1 class="mb-0 text-white spacing-cus">{{ $t('logo_name') }}</h1> 
        </template>
    </MainHeader>
    <div class="container  d-flex justify-content-center align-items-center mx-auto w-100 h-90-vh">
        <div class="bg-red cus-card shadow-lg">
            <div class="cus-card-header h-25">
                Tarot Success
            </div>
            <div class="cus-card-body h-50 h-auto text-white">
                Please input the phone number that is use 
            </div>
            <div class="cus-card-footer h-auto text-center spacing-cus">
                <button class="h-40-px cus-btn-footer" @click="goHome">Home</button>
                
            </div>
        </div>
    </div>

</template>
<script setup>
    import MainHeader from '@/components/utils/MainHeader.vue';
    import { useRouter } from 'vue-router';
    const router = useRouter() ;
    function goHome () {
        router.push({name : "home"});
    }
</script>