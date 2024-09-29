import { defineStore } from "pinia";
import axios from "axios";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";
import { useParentStore } from "../stores/ParentStore";
export const useAuthStore = defineStore("Auth", {
  state: () => ({
    authUser: useStorage("authUser", {}),
    authenticated: useStorage("authenticated", false),
    userPermissions: useStorage("userPermissions", []),
    type: useStorage("type", []),
    user_id: useStorage("user_id", []),
    authErrors: [],
    token: useStorage("token", null),
    msg: "",
    loading: ref(false),
  }),
  getters: {
    user: (state) => state.authUser,
    permissions: (state) => state.userPermissions,
    errors: (state) => state.authErrors,
    successMsg: (state) => state.msg,
  },
  actions: {
    async getUser() {
      if (this.authenticated == true && this.authUser) {
        const response = await axios.get("api/get-user");
      }
    },
    async handleLogin(data) {
      if (this.loading) return;
      this.resetAuthStore();
      this.loading = true;
      try {
        const response = await axios.post("/api/login", {
          email: data.email,
          password: data.password,
        });
        useParentStore().resetAuthStore()
        
        this.authenticated = true;
        this.token = response.data.tokens;
        this.authUser = response.data.user;
        this.userPermissions = response.data.user.roles_permissions;
        this.type=response.data.user.type
        this.user_id=response.data.user.user_id
        this.router.push({ name: "dashbord" });
      } catch (error) {
        if (error.response.status === 422) {
          console.log(error);
          this.authErrors = error.response.data.errors;
        }
      } finally {
        this.loading = false;
      }
    },
    async handleRegister(data) {
      if (this.loading) return;
      this.resetAuthStore();
      this.loading = true;
      try {
        const response = await axios.post("/api/register", {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
        this.authenticated = true;
        this.token = response.data.token;
        this.authUser = response.data.user;
        this.router.push({ name: "dashbord" });
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      } finally {
        this.loading = false;
      }
    },
     handleLogout() {
      this.resetAuthStore();
      this.router.push({ name: "Login" });
       axios.post("/api/logout");
      
    
    },
    async forgotPassword(data) {
      try {
        this.resetAuthStore();
        const response = await axios.post("/api/forgot-password", {
          email: data.email,
        });
        this.msg = response.data.status;
        this.router.push({ name: "ResetPassword" });
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        } else {
          // handling exceptions from frontend prespective only
          let errors = [];
          let exceptionArr = [];
          exceptionArr.push(error.response.data.message);
          errors.push(exceptionArr);
          this.authErrors = errors;
        }
      }
    },
    async resetPassword(data) {
      try {
        await axios.post("/api/reset-password", data);
        this.router.push({ name: "Login" });
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    resetAuthStore() {
      this.authUser = null;
      this.token = null;
      this.authenticated = false;
      this.userPermissions = null;
      this.authErrors = [];
      this.msg = "";
      this.loading = false;
    },
  },
});