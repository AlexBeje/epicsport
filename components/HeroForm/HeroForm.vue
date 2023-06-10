<template>
  <div
    class="fixed top-0 flex h-full w-full items-center justify-center backdrop-blur-sm"
  >
    <div ref="heroFormRef">
      <div
        v-for="{ id, title, content, buttons } in heroFormData"
        :key="id"
        class="flex flex-col-reverse items-center shadow-2xl md:max-w-[1000px] md:flex-row md:items-stretch"
      >
        <div
          v-if="currentStep === id"
          class="relative w-10/12 md:ml-8 md:min-h-[500px] md:flex-1"
        >
          <div
            class="absolute h-full w-full rounded-bl-xl rounded-br-xl bg-[#FF0004]/50 md:rounded-br-none md:rounded-tl-xl"
          />
          <div
            class="hidden h-full w-full bg-cover bg-top md:block md:rounded-bl-xl md:rounded-tl-xl"
            :style="`background-image: url(${'/images/' + id + '.png'});`"
          />
          <img
            class="rounded-bl-xl rounded-br-xl md:hidden"
            :src="'/images/' + id + '.png'"
          />
        </div>
        <div
          v-if="currentStep === id"
          class="flex w-10/12 flex-col rounded-tl-xl rounded-tr-xl bg-[#3A0000] text-white md:mr-8 md:flex-1 md:rounded-br-xl md:rounded-tl-none"
        >
          <div class="flex justify-end p-6 pb-0 md:p-8 md:pb-0">
            <Icon
              name="ion:close-round"
              class="h-[16px] w-[16px] cursor-pointer hover:text-[#FF0004] md:h-[24px] md:w-[24px]"
              @click="heroFormStore.toggleHeroForm"
            />
          </div>
          <div
            class="flex flex-1 flex-col items-start justify-center gap-6 p-6 md:gap-8 md:p-8"
          >
            <h1 class="text-4xl font-light">{{ title }}</h1>
            <p class="font-thin">{{ content }}</p>
            <div class="flex flex-wrap gap-3 md:gap-4">
              <Button
                v-for="button in buttons"
                :key="button.id"
                :type="button.type"
                @click="currentStep = 2"
              >
                {{ button.label }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/** Imports **/
import heroFormData from "./data.json";
import { useHeroFormStore } from "@/stores/useHeroFormStore";

/** Variables **/
const heroFormStore = useHeroFormStore();
const heroFormRef = ref(null);
const currentStep = ref(1);

/** VueUse **/
onClickOutside(heroFormRef, () => heroFormStore.toggleHeroForm());
</script>
