<template>
    <MainHeader>
        <template #mid_content >
            <h1 class="mb-0 text-white spacing-cus">{{ $t('logo_name') }}</h1> 
        </template>
    </MainHeader>
    <ProgessLoader v-if="loader"/>
    <div class="container mt-3" v-else>
        <div class="row w-100 mx-auto mb-3">
            <div  class="col-6  h-100-px mb-3" v-for="(quote) in quotes" :key="quote.id">
                <div @click="selectedQuote(quote.name)" class="bg-pink h-100 d-flex justify-content-center align-items-center rounded-lg p-3">
                    <p class="mb-0 fs-small fw-bold text-center spacing-cus text-black">{{ quote.name }}</p>
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
    import ProgessLoader from '@/components/utils/ProgessLoader.vue';
    import { useRouter } from 'vue-router';
    import { onMounted , ref  } from "vue" ;    
    import { useI18n } from 'vue-i18n';
    import { useStore } from 'vuex';
    import apiClient from '@/services/apiClinet';
    import MainHeader from '@/components/utils/MainHeader.vue';
    // end import state
    const router = useRouter() ;
    const quotes = ref([]) ;
    const loader = ref(true);
    const {locale} = useI18n() ;
    const store = useStore() ;

    function selectedQuote ( quote ) {
        router.push({name : 'quoteDetails' , params : { name : quote }}) ;
    }
    
    const getCategories = () => {
        if(!store.getters.get_categories.length) return fetch_categories();
        quotes.value = store.getters.get_categories ;
        loader.value = false ;
    }

    const fetch_categories = async () => {
        try {
            const { categories } = await apiClient.get('get-category') ;    
            categories.forEach(quote => {
                if(locale.value == "en-US") return quotes.value.push({ id: quote.id, name: quote.name });
                quotes.value.push({ id: quote.id, name: quote.mm_name });
            });
            store.commit('store_categoies', quotes.value);
            loader.value = false ;
        } catch (error) {
            console.error(error.message);
        }
    }

    //that is the start point 
    onMounted  (() => { getCategories() });
</script>