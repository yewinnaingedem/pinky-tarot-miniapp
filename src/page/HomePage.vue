<template>
    <MainHeader>
        <template #mid_content >
            <h1 class="mb-0 text-white spacing-cus">{{ $t('logo_name') }}</h1> 
        </template>
    </MainHeader>
    <div class="container mt-3">
        <div class="row w-100 mx-auto mb-3">
            <div  class="col-6  h-100-px mb-3" v-for="(quote , index) in quotes" :key="index">
                <div @click="selectedQuote(quote.text)" class="bg-pink h-100 d-flex justify-content-center align-items-center rounded-lg p-3">
                    <p class="mb-0 fs-small fw-bold text-center spacing-cus text-black">{{ quote.text }}</p>
                </div>
            </div>
        </div>
        <div class="row w-100 mx-auto mb-3">
            <div class="col-6 text-center">
                <router-link :to="{name:'tacs'}" class="spacing-cus fs-small fw-semibold"> {{ $t('teram_and_conditions') }} </router-link>
            </div>
            <div class="col-6 text-center">
                <router-link :to="{name : 'faq'}" class="spacing-cus fs-small fw-bold">{{ $t('faq') }}</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { quotes } from '@/helper';
    import { useRouter } from 'vue-router';
    import MainHeader from '@/components/utils/MainHeader.vue';
    const router = useRouter() ;
    function selectedQuote ( quote ) {
        router.push({name : 'quoteDetails' , params : { name : quote }}) ;
    }
</script>