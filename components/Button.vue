<template>
  <button>{{ label }}</button>
</template>

<script setup lang="ts">
/** Type **/
interface Props {
  label?: string;
}
defineProps<Props>();
</script>
