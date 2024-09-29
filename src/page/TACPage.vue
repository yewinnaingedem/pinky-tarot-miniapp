<template>
    <MainHeader>
        <template #left_content>
            <router-link :to="{name : 'home'}" class="back-btn">
                <svg height="512" viewBox="0 0 486.65 486.65" width="512"><path d="m202.114 444.648c-8.01-.114-15.65-3.388-21.257-9.11l-171.875-171.572c-11.907-11.81-11.986-31.037-.176-42.945.058-.059.117-.118.176-.176l171.876-171.571c12.738-10.909 31.908-9.426 42.817 3.313 9.736 11.369 9.736 28.136 0 39.504l-150.315 150.315 151.833 150.315c11.774 11.844 11.774 30.973 0 42.817-6.045 6.184-14.439 9.498-23.079 9.11z"/><path d="m456.283 272.773h-425.133c-16.771 0-30.367-13.596-30.367-30.367s13.596-30.367 30.367-30.367h425.133c16.771 0 30.367 13.596 30.367 30.367s-13.596 30.367-30.367 30.367z"/>
                </svg>
            </router-link>
        </template>
        <template #mid_content>
            <h3 class="mb-0">{{ $t('teram_and_conditions') }}</h3>
        </template>
    </MainHeader>
    <div class="container">
        <div class="w-100 mx-auto card bg-custom-background "  v-for="(data  ) in t_qs" :key="data.id">
            <div class="card-body">
                <div class="spacing-cus fs-small">
                    <span class="fw-bold">{{ data.id }}</span> &nbsp;. {{ data.body }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import MainHeader from "@/components/utils/MainHeader.vue";
    import { t_qs } from "@/assets/js/textHelper";
</script>