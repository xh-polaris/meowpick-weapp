import {createSSRApp} from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import { createUnistorage } from 'pinia-plugin-unistorage'

// import "tailwindcss/tailwind.css"

export function createApp() {
  const app = createSSRApp(App);
  const pinia = Pinia.createPinia()
  pinia.use(createUnistorage())
  app.use(pinia);

  return {
    app,
    Pinia
  };
}
