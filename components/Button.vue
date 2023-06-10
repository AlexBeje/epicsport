<template>
  <button
    class="rounded-lg bg-gradient-to-br from-[#FF0004] to-[#870002] px-2 py-1 font-light text-white transition-colors duration-100 hover:from-white hover:to-white hover:text-black md:px-6 md:py-2"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type: string;
}
defineProps<Props>();
</script>
