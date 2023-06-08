<template>
  <div
    class="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#1A0000] to-[#FF0E1C] relative"
  >
    <div class="h-full w-full absolute bg-black/90" />
    <div class="z-10 flex flex-col items-center">
      <img src="@/assets/logo.png" class="max-w-[40%]" />
      <p
        class="text-white text-4xl md:text-6xl font-roboto font-thin flex flex-wrap gap-2 justify-center"
      >
        <span>SITE EN</span><span class="text-[#FF0E1C]">CONSTRUCCIÓN</span>
      </p>
      <Button class="mt-10 hidden">Quiero apuntarme</Button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
