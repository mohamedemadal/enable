<template>
  <div
      
      class="flex justify-between  text-center details"
  >
    <div class="flex mx-2 ">
      <div class="m-auto">
        <p style="font-size:100%" class="text-white text-base">
          <v-icon
          end
          icon="mdi-map-marker"
          class="  sec1  h-full  "
      ></v-icon>
      {{ $t("Amman_Rabieh_Maysaloon_Street") }}
          
        </p>
        
      </div>
      <div class="mx-2 m-auto">
        <p style="font-size:100%"  class=" text-white text-base">
          <v-icon
          end
          icon="mdi-phone"
          class="  sec1   h-full rotate-180 "
      ></v-icon>
          التواصل : 0096265522688-00962791017001
         
        </p>
      </div>
      <div class="h-full py-1">
        <LocaleSelect class="show" id="local-switcher" />
      </div>
    </div>
      <div class="flex">
     
      <div class="my-auto  "> <router-link to="/web"><img class="cursor-pointer h-14 px-2"  src="../../../assets/logo1.png" /></router-link></div>
      </div>

  </div>

</template>
<script>
import LocaleSelect from "../../../components/LocaleSelect.vue";
export default {
  components:{
    LocaleSelect
  }
}
</script>
