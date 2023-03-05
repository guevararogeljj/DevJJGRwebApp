<template>
  <v-row align="center" class="list px-3 mx-auto">
    <br>
    <br>
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Lista de productos</v-card-title>
        <v-data-table
          :headers="headers"
          :items="productos"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteTutorial(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
    <v-timeline align="start">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card>
        <v-card-title :class="['text-h6', `bg-${item.color}`]">
          Lorem Ipsum Dolor
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            :color="item.color"
            variant="outlined"
          >
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </v-row>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "productos-list",
  data() {
    return {
      productos: [],
      title: "",
      headers: [
        { text: "Nombre del producto", align: "start", sortable: false, value: "title" },
        { text: "Nombre del catálogo", value: "description", sortable: false },
        
        { text: "Actions", value: "actions", sortable: false },
      ],
        items: [
        {
          color: 'red-lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple-lighten-2',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green-lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-buffer',
        },
      ],
    };
  },
  methods: {
    retrieveproductos() {
      TutorialDataService.getAll()
        .then((response) => {
          console.log(response.data);
          this.productos = response.data.data.map(this.getDisplayTutorial);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveproductos();
    },

    removeAllproductos() {
      TutorialDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editTutorial(id) {
      this.$router.push({ name: "tutorial-details", params: { id: id } });
    },

    deleteTutorial(id) {
      TutorialDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayTutorial(tutorial) {
      return {
        id: tutorial.productId,
        title: tutorial.productName,
        description: tutorial.categories.categoryName,
      };
    },
  },
  mounted() {
    this.retrieveproductos();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>
