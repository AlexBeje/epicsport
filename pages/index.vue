<template>
  <div
    class="relative flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#1A0000] to-[#FF0E1C]"
  >
    <div class="absolute h-full w-full bg-black/90" />
    <div class="z-10 flex flex-col items-center">
      <img src="@/assets/logo.png" class="max-w-[40%]" />
      <p
        class="flex flex-wrap justify-center gap-2 font-roboto text-4xl font-thin text-white md:text-6xl"
      >
        <span>SITE EN</span><span class="text-[#FF0E1C]">CONSTRUCCIÓN</span>
      </p>
      <Button class="mt-10 hidden">Quiero apuntarme</Button>
    </div>
  </div>
</template>
