<template>
    <!-- start f & q  -->
    <MainHeader>
        <template #left_content>
            <router-link :to="{name : 'home'}" class="back-btn">
                <svg height="512" viewBox="0 0 486.65 486.65" width="512"><path d="m202.114 444.648c-8.01-.114-15.65-3.388-21.257-9.11l-171.875-171.572c-11.907-11.81-11.986-31.037-.176-42.945.058-.059.117-.118.176-.176l171.876-171.571c12.738-10.909 31.908-9.426 42.817 3.313 9.736 11.369 9.736 28.136 0 39.504l-150.315 150.315 151.833 150.315c11.774 11.844 11.774 30.973 0 42.817-6.045 6.184-14.439 9.498-23.079 9.11z"/><path d="m456.283 272.773h-425.133c-16.771 0-30.367-13.596-30.367-30.367s13.596-30.367 30.367-30.367h425.133c16.771 0 30.367 13.596 30.367 30.367s-13.596 30.367-30.367 30.367z"/>
                </svg>
            </router-link>
        </template>
        <template #mid_content>
            <h3 class='mb-0'>{{ $t('faq') }}</h3>
        </template>
    </MainHeader>
    <div class="container">
        <div class=" w-100 mx-auto card box-shadow-none bg-custom-background" v-for="(faq , index ) in faqs" :key="index">
            <div class="card-header row rounded text-black align-items-baseline" >
                <div class="fs-6 spacing-cus col pe-0">
                    <strong>{{index + 1 }}.</strong>
                    {{ faq.question }}
                </div>
                <div @click="toggleVisibility(faq)" class="col-2 col-md-1">
                    <img src="@/assets/images/png/down_arrow.png" :class="{'upper' : faq.visibility }" alt="Down Arrow" >
                </div>
            </div>
            <div class="card-body" v-if="faq.visibility">
                <p class="fs-6 text-black lead spacing-cus cus-para">{{ faq.answer }}</p>
            </div>
        </div>
    </div>
    <!-- end f & q  -->
</template>
<script >
    import MainHeader from "@/components/utils/MainHeader.vue";
    import { faqs  } from '@/assets/js/textHelper';
    export default {
        methods : {
            toggleVisibility (faq) {
                faq.visibility = !faq.visibility ;
            }
        },
        data () {
            return {faqs}
        },
        components : {
            MainHeader ,
        }
    }
</script>