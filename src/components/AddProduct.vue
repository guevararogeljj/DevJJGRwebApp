<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Agregar producto</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <!-- <v-text-field
          v-model="tutorial.title"
          :rules="[(v) => !!v || 'Title is required']"
          label="Title"
          required
        ></v-text-field> -->
        <v-combobox
          label="Combobox"
          outlined
          clearable
          v-model="tutorial.title"
          :rules="[(v) => !!v || 'Categoria es requerida']"
          :items="['Categoria 1']"
        ></v-combobox>

        <v-text-field
          v-model="tutorial.description"
          :rules="[(v) => !!v || 'Producto es requerido']"
          label="Producto"
          required
        ></v-text-field>
      </v-form>

      <v-btn color="primary" class="mt-3" @click="saveTutorial">Enviar</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Actualizado con éxito!
        </v-card-title>

        <v-card-subtitle>
          Click para agregar
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newTutorial">Agregar</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        productId: this.tutorial.title,
        productName: this.tutorial.description,
        categoryId: "023cea7e-6639-4fe7-9da9-54dd4a96f776",
      };

      TutorialDataService.create(data)
        .then((response) => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
}
</style>
