<template>
  <button
    :class="`rounded-sm bg-gradient-to-br px-2 py-1 font-light transition-colors duration-100 md:px-6 md:py-2
    ${
      type === 'primary'
        ? 'from-[#FF0004] to-[#870002] text-white hover:from-white hover:to-white hover:text-black'
        : 'from-white to-white text-black hover:from-[#FF0004] hover:to-[#870002] hover:text-white'
    }
    `"
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
