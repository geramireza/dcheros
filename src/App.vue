<template>
  <Header />
  <div class="container">
    <div class="col-md-8 offset-2 p-5">
      <heros :heros="heros" @remove-hero="removeHero" />
      <AddHero :heros="heros" @add-hero="addHero" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import heros from "./components/Heros.vue";
import AddHero from "./components/AddHero.vue";
import getHeros from "@/reusables/getHeros";
import addHero from "@/reusables/addHero";
import removeHero from '@/reusables/removeHero'
import editHero from '@/reusables/editHero'
export default {
  components: {
    Header,
    heros,
    AddHero,
  },
  data() {
    return {
      heros: []
    };
  },
  methods: {
    getHeros() {
      getHeros().then((data) => {
        this.heros = data;
      });
    },
    addHero(hero) {
      addHero(hero)

      this.getHeros()
    },
    removeHero(hero) {
      removeHero(hero).then(data => {
        if(data.status == 200)
          this.getHeros()
      })
    },
  },
  mounted() {
    this.getHeros()
    this.emitter.on("updateHero", (hero) => 
      editHero(hero).then(data => {
        if(data.status == 200){
          this.getHeros()
        }
      }).catch(error => console.log(error))
    );
  },
};
</script>

<style>
</style>
