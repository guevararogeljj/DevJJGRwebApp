<template>
  <div v-if="currentTutorial" class="edit-form py-3">
    <p class="headline">Editar producto</p>
    <v-form ref="form" lazy-validation>
       <v-combobox
          label="Combobox"
          outlined
          clearable
          v-model="currentTutorial.title"
          :rules="[(v) => !!v || 'Categoria es requerida']"
          :items="['Categoria 1']"
        ></v-combobox>

      <v-text-field
        v-model="currentTutorial.description"
        :rules="[(v) => !!v || 'Nombre requerido']"
        label="Nombre del producto"
        required
      ></v-text-field>
      
      <v-divider class="my-5"></v-divider>


      <v-btn color="error" small class="mr-2" @click="deleteTutorial">
        Eliminar
      </v-btn>

      <v-btn color="success" small @click="updateTutorial">
        Actualizar
      </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Espera un momento..</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorial",
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then((response) => {
          this.currentTutorial = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status,
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then((response) => {
          this.currentTutorial.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      var model = {
          productId : this.currentTutorial.productId,
          productName :this.currentTutorial.description,
      }
      TutorialDataService.update(model)
      
        .then((response) => {
          console.log(response.data);
          this.message = "Actualizado con éxito!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.productId)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "productos" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTutorial(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
