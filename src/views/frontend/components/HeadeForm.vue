<template>
  <div style="padding-top: 6%; padding-bottom: 6%;" class=" relative bg-center bg-cover max-h-screen">
    <img
      src="../image/header/112.png"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div
      style="
        background: linear-gradient(to right, #027FB5, #08233E);
        opacity: 50%;
      "
      class="absolute inset-0 bg-black"
    ></div>
    <div class="relative background-color  px-[5%] z-10 m-auto w-full">
     <div class="flex m-auto">
      
        <h1 style="font-size: 45px" class="font-bold   pr-6 text-white">
          E N A B L E
        </h1>
        <h1 style="font-size: 45px" class="font-bold   pr-6 text-white">
         360
        </h1>
     </div>
      <h2 style="font-size: 30px" class="text-3xl m-10  text-white">
        
      </h2>
      <div
        style="color: white"
        class="relative flex justify-between bg-black max-w-xl p-2 opacity-70 w-[90%] rounded-3xl"
      >
        <button class="p-2 text-[#FFCF24]">{{ $t("search") }}</button>
        <div class="flex w-[90%]">
          <input
            type="search"
            class="text-center focus:ring-0 border-0 flex text-xs w-[90%] break-words bg-black md:text-xl"
            :placeholder="$t('looking_for_a_doctor_health_care_courses')"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
          <button class="m-auto text-2xl">
            <v-icon small>mdi-magnify</v-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
