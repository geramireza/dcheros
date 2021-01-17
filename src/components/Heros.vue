<template>
  <div>
    <h3 class="mb-3"><strong>Heros:</strong></h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="(hero, index) in heros" :key="index">
        <span class="">{{ hero.name }}</span>
        <button
          class="float-end btn btn-sm mx-2 btn-outline-danger"
          @click="removeHero(hero)"
        >
          <strong>Delete</strong>
        </button>
        <button
          class="float-end btn btn-sm mx-2 btn-outline-warning"
          @click="editHero(hero)"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
        >
          <strong>Edit</strong>
        </button>
      </li>
    </ul>

  </div>
  <EditHero :hero="hero"/>
</template>

<script>
import EditHero from "./EditHero.vue";

export default {
  components: {
    EditHero,
  },
  props: ["heros"],
  emits:['removeHero','updateHero'],
  data() {
    return {
      hero: {
        id: null,
        name: "",
      },
    };
  },
  methods: {
    removeHero(hero) {
      this.$emit("removeHero", hero);
    },
    editHero(hero) {
      this.hero = hero;
    },
  },
};
</script>

<style>
</style>