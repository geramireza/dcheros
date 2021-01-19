<template>
  <div class="modal fade" id="editModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-info">Edit Hero's Name:</h4>
          <button class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body py-4">
          <input
            type="text"
            class="form-control"
            :value="hero.name"
            @input="checkInput"
          />
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline-secondary" data-bs-dismiss="modal">
            Cancle
          </button>
          <button
            class="btn btn-outline-primary"
            data-bs-dismiss="modal"
            @click="updateHero()"
            :disabled="disabled"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hero: {
      required: true,
    },
  },
  data() {
    return {
      disabled: true,
    };
  },
  emits: ["updateHero"],
  methods: {
    updateHero() {
      const hero = document.querySelector("input").value;
      if (hero != "") {
        const newHero = { id: this.hero.id , name: hero };
        this.emitter.emit("updateHero", newHero);
      }
    },
    checkInput(event) {
      const hero = event.target.value;
      if (hero.trim() != "" && hero != this.hero.name) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
  },
};
</script>f

<style>
</style>