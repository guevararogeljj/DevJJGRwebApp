<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        DevJJGR
      </div>

      <v-btn to="/productos" text>
        Productos
      </v-btn>

      <v-btn to="/add" text>
        Agregar
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>
