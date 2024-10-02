<script setup>
import LocaleSelect from "./LocaleSelect.vue";
import { useAppLangStore } from "../stores/AppLangStore";
import { ref, watch, computed, onMounted } from "vue";
import { useAuthStore } from "../stores/Auth";
import UserProfileMenu from "./UserProfileMenu.vue";
import { useTheme } from "vuetify";
const router = useRouter()
import sawaLogo from "../assets/logo1.png";
import {useRouter} from "vue-router";
const theme = useTheme();
const drawer = ref(true);
const group = ref(null);
const authStore = useAuthStore();
const appLangStore = useAppLangStore();
const routename=ref('')

// methods
// const onClick = () => {
//     theme.value = theme.value === "light" ? "dark" : "light";
// };
const toggleTheme = () =>
(theme.global.name.value = theme.global.current.value.dark
  ? "light"
  : "dark");
const isRtl = computed({
  get() {
    return appLangStore.isRtl;
  },
  set(val) {
    appLangStore.isRtl = val;
  },
});
watch(group, (newGroupValue) => {
  drawer.value = false;
});
watch(routename.value, (newValue, oldValue) => {
         console.log('ssss')
    });
onMounted(async () => {
  routename.value=router.currentRoute._rawValue.name
  console.log(router.currentRoute._rawValue.name)
  await authStore.getUser();
});
</script>
<style lang="scss">
//@use '../settings.scss';
#local-switcher {
  width: 30px;
  height: 60px;
  border-radius: 50%;
  background-color: #a9ab7f;
  color: #ffffff;
  display: flex;
  margin: 0 15px;
  justify-content: center;

  i {
    margin: 0 !important;
  }
}

#theme-switcher {
  width: 50px;
  height: 61px;
  border-radius: 50%;
  background-color: #08233d;
  color: #ffffff;
  display: flex;
  justify-content: center;

  .v-btn__prepend {
    margin: 0;
  }
}

.setting {
  width: 50px;
  height: 61px;
  border-radius: 50%;
  background-color: #08233d;
  color: #ffffff;
  display: flex;
  justify-content: center;
}

#navbar {
  padding-top: 46px;
  background-color: #08233d !important;
  color: #ffffff !important;
  height: calc(100% - 119.81px) !important;
  //width: 19% !important;
}

.v-list-group__items .v-list-item {
  padding-right: 20px !important;
  padding-left: 20px !important;
}

.v-list-item {
  margin: 0 0 19px 0 !important;

  .v-list-item-title {
    font-size: 17px !important;
    line-height: 110% !important;
  }

  .v-list-item__prepend {
    text-align: center !important;
    justify-content: center;
  }
}

#footer {
  width: 100% !important;
  left: 0 !important;
  background: linear-gradient(to right, #027FB5, #08233E);
 
  color: #ffffff;
  height: 55px;
}
</style>
<template>
  <v-locale-provider :rtl="isRtl">
    <v-app>
      <!-- v-system-bar -->

      <!-- v-app-bar -->
      <v-app-bar prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="">
          <v-img class="h-14"  max-width="100" :src="sawaLogo"></v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <!-- locale switcher -->
        <LocaleSelect id="local-switcher" />

        <!-- theme switcher -->
        <v-btn id="theme-switcher" :prepend-icon="theme.global.name.value === 'light'
            ? 'mdi-weather-sunny'
            : 'mdi-weather-night'
          " @click="toggleTheme">
        </v-btn>
        <template class="setting" v-if="authStore.authenticated">
          <UserProfileMenu />
        </template>
        <template class="setting" v-else>
          <v-btn :to="{ name: 'Register' }">Register</v-btn>
          <v-btn :to="{ name: 'Login' }">Login</v-btn>
        </template>
      </v-app-bar>

      <!-- sidebar menu -->
      <v-navigation-drawer id="navbar" v-model="drawer">
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home"  :title="$t('dashbored')" 
              :to="{ name: 'dashbord' }"></v-list-item>
          <v-list-group prepend-icon="mdi-shield-account" value="Admin">
            <template #activator="{ props }">
              <v-list-item v-bind="props" :title="$t('Adminstration')"></v-list-item>
            </template>

            <!--            here  your v- item list -->
            <v-list-item v-can="'show user'" :title="$t('users')" value="users"
              :to="{ name: 'Users' }"></v-list-item>

            
            <v-list-item v-can="'permissions show'" :title="$t('permissions')" value="permissions"
              :to="{ name: 'permissions' }"></v-list-item>

            <!-- <v-list-item  :title="$t('permissions')" value="roles"
              :to="{ name: 'permissions' }"></v-list-item> -->
            <v-list-item v-can="'roles show'" :title="$t('roles')" value="roles"
              :to="{ name: 'Roles' }"></v-list-item>
           
          </v-list-group>

          
          

          <v-list-group prepend-icon="mdi-human-male-boy" value="Children">
            <template #activator="{ props }">
              <v-list-item  v-can="'parent show'" v-bind="props" :title="$t('parents')"></v-list-item>
            </template>

            <v-list-item v-can="'roles show'"  :title="$t('parents')" value="parents"
              :to="{ name: 'Parents' }"></v-list-item>
              <v-list-item v-can="'doctor show'" :title="$t('doctors')" value="doctors"
              :to="{ name: 'doctors' }"></v-list-item>

            <v-list-item v-can="'child show'" :title="$t('children')" value="children"
              :to="{ name: 'Children' }"></v-list-item>
          </v-list-group>




       

          <v-list-group v-can="'show user'" prepend-icon="mdi-help-box-multiple-outline" value="Evaluation">
            <template #activator="{ props }">
              <v-list-item v-bind="props" :title="$t('evaluations')"></v-list-item>
            </template>

            <!-- <v-list-item  :title="$t('headers')" value="headers"
              :to="{ name: 'Headers' }"></v-list-item> -->
            <v-list-item  :title="$t('side profile')" value="SideProfiles"
              :to="{ name: 'SideProfiles' }"></v-list-item>
              <v-list-item  v-can="'able-mission show'" :title="$t('ablls')" value="ablls"
              :to="{ name: 'ablls' }"></v-list-item>
              <v-list-item v-can="'carolina-age-range show'" :title="$t('Carolaina')" value="Carolaina"
              :to="{ name: 'agerange' }"></v-list-item>
              <v-list-group value="VB">
            <template #activator="{ props }">
              <v-list-item v-bind="props" :title="$t('VB')"></v-list-item>
            </template>

           
              <v-list-item v-can="'milestone-level show'" :title="$t('milestone')" value="milestone" :to="{ name: 'levels' }"></v-list-item>
              <v-list-item v-can="'barrier-subtest list'" :title="$t('barriers')" value="barriers" :to="{ name: 'barrier-subtest' }"></v-list-item>

           
          </v-list-group>
           
          </v-list-group>
          <!-- edit Last -->
          <v-list-group prepend-icon="mdi-doctor">
            <template #activator="{ props }" value="Evaluation">
              <v-list-item v-bind="props">
                <v-list-item-title  class="mb-2">
                  {{ $t("Therapeutic") }}
                </v-list-item-title>
              </v-list-item>

             
            </template>
            
            <v-list-item v-can="'program show'" :title="$t('addTherapeutic')" value="Categories"
              :to="{ name: 'AllTherapeutic' }"></v-list-item>
              <v-list-item v-can="'student-program show'" :title="$t('student_programe')" value="student-programe"
              :to="{ name: 'student-programe' }"></v-list-item>
              <v-list-item v-can="'student-program show'" :title="$t('sessions')" value="sessions"
              :to="{ name: 'sessions' }"></v-list-item>
             
            
          </v-list-group>
          
          <v-list-group v-can="'room show'" prepend-icon="mdi-bed">
            <template #activator="{ props }" value="Evaluation">
              <v-list-item v-bind="props" :title="$t('room')"></v-list-item>
            </template>
            
            <v-list-item v-can="'room show'"  :title="$t('room')" value="Rooms" :to="{ name: 'Rooms' }"></v-list-item>
           
              
          </v-list-group>
          
        

          <v-list-group prepend-icon=" mdi-calendar" value="Calender">
            <template #activator="{ props }">
              <v-list-item v-bind="props" :title="$t('consulting')"></v-list-item>
            </template>
            <v-list-item  :title="$t('calender')" value="calender"
              :to="{ name: 'Calender' }"></v-list-item>
            <v-list-item  :title="$t('bookings')" value="bookings"
              :to="{ name: 'ShowBooking' }"></v-list-item>
          </v-list-group>
          <v-list-group prepend-icon="mdi-wrench"  value="Settings">
            <template #activator="{ props }">
              <v-list-item v-bind="props" :title="$t('Settings')"></v-list-item>
            </template>
            <v-list-item :title="$t('Pages')" value="Pages"
              :to="{ name: 'pages' }"></v-list-item>
            <v-list-item  :title="$t('Settings')" value="Settings"
              :to="{ name: 'settings' }"></v-list-item>
          </v-list-group>
          

         <!-- student_programe -->
          <!-- <v-list-group value="student_programe">
            <template #activator="{ props }">
              <v-list-item v-bind="props" :title="$t('student_programe')"></v-list-item>
            </template>
            <v-list-item prepend-icon="mdi-message-question-outline" :title="$t('Pages')" value="Pages"
              :to="{ name: 'pages' }"></v-list-item>
            <v-list-item prepend-icon="mdi-message-question-outline" :title="$t('Settings')" value="Settings"
              :to="{ name: 'settings' }"></v-list-item>
          </v-list-group> -->




          <!-- edits -->
          <v-list-group prepend-icon="mdi-apps" value="">
            <template #activator="{ props }">
              <v-list-item v-bind="props" :title="$t('inputs')"></v-list-item>
            </template>
             <v-list-item v-can="'skills show'"  :title="$t('skills')" value="skills"
              :to="{ name: 'skills' }"></v-list-item>
              <v-list-item v-can="'department show'" :title="$t('department')" value="department"
              :to="{ name: 'department' }"></v-list-item>
             
              

              <v-list-item v-can="'area show'" :title="$t('area')" value="area"
              :to="{ name: 'regin' }"></v-list-item>

              <v-list-item v-can="'transportation-schedule show'" :title="$t('veciles')" value="transportation"
              :to="{ name: 'transportation' }"></v-list-item>

              <v-list-item v-can="'student-transportation show'" :title="$t('student_tans')" value="student-transportation"
              :to="{ name: 'student-transportation' }"></v-list-item>

              <v-list-item  :title="$t('transportation_schedule')" value="transportation-schedule"
              :to="{ name: 'transportation-schedule' }"></v-list-item>
<!--                

transportation_schedule
            <v-list-item  value="Pages" :to="{ name: 'ProgramType' }"
              class="mb-2 py-2"><v-list-item-title class="mb-2" style="padding: 10px">
                {{ $t("ProgramType") }}
              </v-list-item-title>student_tans
            </v-list-item> -->

            <!-- <v-list-item :to="{ name: 'SystemProgram' }" class="">
              <v-list-item-title class="mb-2" style="padding: 10px">
                {{ $t("SystemProgram") }}
              </v-list-item-title>
            </v-list-item> -->

            <!-- <v-list-item  value="Settings" :to="{ name: 'SessionType' }" class="">
              <v-list-item-title class="mb-2" style="padding: 10px">
                {{ $t("SessionType") }}
              </v-list-item-title>
            </v-list-item> -->
            <v-list-item v-can="'treatment show'"  value="Settings" :to="{ name: 'treatments-type' }" class="">
              <v-list-item-title class="mb-2" style="padding: 10px">
                {{ $t("Typetreatment") }}
              </v-list-item-title>
            </v-list-item>
            <!-- <v-list-item  value="Settings" :to="{ name: 'AppointmentType' }"
              class="mb-2">
              <v-list-item-title class="mb-2" style="padding: 10px">
                {{ $t("AppointmentType") }}
              </v-list-item-title>
            </v-list-item> -->
            
          </v-list-group>
          <v-list-group v-can="'room show'" prepend-icon="mdi-bed">
            <template #activator="{ props }" value="Evaluation">
              <v-list-item v-bind="props" :title="$t('hr')"></v-list-item>
            </template>
            
            <v-list-item v-can="'room show'"  :title="$t('Employees')" value="Employees" :to="{ name: 'Employees' }"></v-list-item>
            <v-list-item v-can="'room show'"  :title="$t('leaves')" value="leaves" :to="{ name: 'leaves' }"></v-list-item>
            <v-list-item v-can="'room show'"  :title="$t('Settings')" value="setting" :to="{ name: 'setting' }"></v-list-item>
            <v-list-item v-can="'room show'"  :title="$t('deductions')" value="deduction" :to="{ name: 'deduction' }"></v-list-item>
            <v-list-item v-can="'room show'"  :title="$t('holidays')" value="holidays" :to="{ name: 'holidays' }"></v-list-item>
            <v-list-item v-can="'room show'"  :title="$t('official_leaves')" value="official-leaves" :to="{ name: 'official-leaves' }"></v-list-item>
            <v-list-item v-can="'room show'"  :title="$t('payroll')" value="payroll" :to="{ name: 'payroll' }"></v-list-item>
            <v-list-item v-can="'room show'"  :title="$t('bonus')" value="bonus" :to="{ name: 'bonus' }"></v-list-item>
            <v-list-item v-can="'room show'"  :title="$t('departments')" value="departments" :to="{ name: 'departments' }"></v-list-item>
            <v-list-item v-can="'room show'"  :title="$t('posttion')" value="posttion" :to="{ name: 'posttion' }"></v-list-item>
           
              
          </v-list-group>
        </v-list>
        

            <!-- <v-list-group style="text-align: center !important; width: 100% !important;" value="Settings">
              <template #activator="{ props }">
                <div class="flex justify-between w-full px-4">
                  <a  href="https://attendance.new.sawa.academy/" target=”_blank” >{{ $t('fingerPrint') }}</a>
                  <p><svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 210 256" enable-background="new 0 0 210 256" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M174.55,144.5L174.55,144.5c-1.4-4-5-6.5-9.2-6.5H159V23c0-11.708-9.292-21-21-21H25C12.57,2,2,12.57,2,25v183 c0,11.9,10.95,22,22.75,22l114.213,0c1.207,0,2.27,0.984,2.18,2.188c-0.095,1.266-1.153,1.812-2.393,1.812h-45.5L128,254h80 L174.55,144.5z M82.05,220.2c-3.199,0-5.599-2.399-5.6-5.598c-0.001-3.045,2.557-5.602,5.602-5.602 c3.199,0.001,5.598,2.401,5.598,5.6C87.55,217.8,85.25,220.2,82.05,220.2z M144,138h-19.65c-5.3,0-9.8,4.7-9.8,10l0,0 c0,5.3,4.5,10,9.8,10h19.8v42H18V31h126V138z M122.309,87.625v31.221c0,4.652-4.445,9.097-9.097,9.097H85.92 c-5.686,0-10.286-0.724-15.61-2.584c-1.654-0.569-6.513-2.584-6.513-2.584v-36.39l21.451-25.225l1.964-11.217h3.877 c4.342,0,7.34,3.463,7.34,7.753v2.429c0,5.531-0.31,11.113-0.982,16.592l-0.207,1.809h15.972 C117.864,78.527,122.309,82.972,122.309,87.625z M39.089,126.65h19.487V82.456H39.089V126.65z"></path> </g></svg></p>
                </div>
              </template>
            </v-list-group> -->
        
      </v-navigation-drawer>

      <!-- this is main content for the application -->
      <v-main style="width:100% !important;">
        <v-container>
          <RouterView />
        </v-container>
<!-- CONTAINS of home page -->



        
       
   

      </v-main>
      <!-- footer -->
      <v-footer app id="footer" class="justify-center" border>
        <div class="flex my-3">
          <div class="my-auto mx-3">
            All Rights Reserved.
          </div>
          <div class="">
            <svg width="75" height="59" viewBox="0 0 75 59" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="75" height="59" fill="url(#pattern0_66_190)"/>
                <defs>
                <pattern id="pattern0_66_190" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_66_190" transform="scale(0.0037037 0.00471698)"/>
                </pattern>
                <image id="image0_66_190" width="433" height="232" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>

          </div>
         



        </div>
      </v-footer>
    </v-app>
  </v-locale-provider>
</template>
<style>
.element:hover {



  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}

</style>
