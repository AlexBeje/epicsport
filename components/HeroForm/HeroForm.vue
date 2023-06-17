<template>
  <div
    class="fixed top-0 flex h-full w-full items-center justify-center backdrop-blur-sm"
  >
    <div
      ref="heroFormRef"
      class="relative top-0 flex items-center justify-center"
    >
      <div
        v-for="{ id, title, content, buttons } in heroFormData"
        :key="id"
        class="absolute flex flex-col-reverse items-center shadow-2xl md:max-w-[1000px] md:flex-row md:items-stretch"
      >
        <Transition>
          <div
            v-if="currentStep === id"
            class="relative w-10/12 md:ml-8 md:min-h-[500px] md:min-w-[500px] md:flex-1"
          >
            <div
              class="absolute h-full w-full rounded-bl-xl rounded-br-xl bg-[#FF0004]/50 md:rounded-br-none md:rounded-tl-xl"
            />
            <!-- <div
              class="hidden h-full w-full bg-cover bg-top md:block md:rounded-bl-xl md:rounded-tl-xl"
              :style="`background-image: url(${'/images/' + id + '.png'});`"
            /> -->
            <nuxt-img
              class="rounded-bl-xl rounded-br-xl md:rounded-tl-xl"
              :src="'/images/' + id + '.png'"
            />
          </div>
        </Transition>
        <Transition>
          <div
            v-if="currentStep === id"
            class="flex w-10/12 flex-col rounded-tl-xl rounded-tr-xl bg-[#3A0000] text-white md:mr-8 md:min-h-[500px] md:min-w-[500px] md:flex-1 md:rounded-br-xl md:rounded-tl-none"
          >
            <div class="flex justify-end p-6 pb-0 md:p-8 md:pb-0">
              <Icon
                name="ion:close-round"
                class="h-[16px] w-[16px] cursor-pointer md:h-[24px] md:w-[24px]"
                @click="heroFormStore.toggleHeroForm"
              />
            </div>
            <div
              class="flex flex-1 flex-col items-start justify-center gap-6 p-6 md:gap-8 md:p-8"
            >
              <h1 v-if="currentStep !== 6" class="text-4xl font-light">
                {{ title }}
              </h1>
              <p class="font-thin">{{ content }}</p>
              <div
                v-if="currentStep === 6"
                class="flex w-full flex-col items-center justify-center gap-10"
              >
                <h1 class="text-5xl font-light">{{ title }}</h1>
                <div class="flex flex-col gap-10 text-center font-light">
                  <div>
                    <p>
                      La cuota mensual es de
                      <span class="text-xl underline">{{ fianlPrice }}€</span>
                    </p>
                    <p>
                      Beneficias de la
                      <span class="text-xl underline">matricula gratis</span>.
                    </p>
                  </div>
                  <div>
                    <h2 class="text-3xl font-light">Horario</h2>
                    <p>
                      Lunes a Viernes -
                      <span class="underline">10:00 a 22:30</span>
                    </p>
                    <p>
                      Sabado -
                      <span class="underline">10:00 a 13:30</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-3 md:gap-4">
                <Button
                  v-for="{
                    id: buttonId,
                    type,
                    step,
                    label,
                    updatePrice,
                  } in buttons"
                  :key="buttonId"
                  :type="type"
                  @click="changeStep(step, updatePrice)"
                >
                  {{ label }}
                </Button>
              </div>
            </div>
          </div>
        </Transition>
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
const fianlPrice = ref(50);

/** Methods **/
const changeStep = (step: number, updatePrice: number) => {
  if (updatePrice) {
    fianlPrice.value += updatePrice;
  }
  if (step === 0) {
    heroFormStore.toggleHeroForm();
    return;
  }
  currentStep.value = step;
};

/** VueUse **/
onClickOutside(heroFormRef, () => heroFormStore.toggleHeroForm());

onKeyStroke("Escape", (e) => {
  e.preventDefault();
  if (heroFormStore.isHeroFormOpened) {
    heroFormStore.toggleHeroForm();
  }
});
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active {
  transition: opacity 0.5s ease;
}
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
