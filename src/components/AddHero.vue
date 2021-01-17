<template>
  <form class="row my-5" @submit.prevent="addHero">
    <div class="col-10">
      <input
        v-model="hero.name"
        required
        type="text"
        @keyup="checkInput(hero.name)"
        class="form-control"
        placeholder="Hero's name"
      />
    </div>
    <div class="col-2 text-end">
      <button class="btn btn-outline-primary" :disabled="disabled">
        Add Hero
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    heros: {
      type: Array,
    },
  },
  emits: ["addHero"],
  data() {
    return {
      hero: {
        name: "",
      },
      disabled: true,
    };
  },
  methods: {
    addHero() {
      if (this.hero.name.trim() != "") {
        this.$emit("addHero", this.hero);
        this.hero.name = "";
        this.disabled = true;
      }
    },
  },
};
</script>

<style>
</style>