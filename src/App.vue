<template>
  <Header />
  <div class="container">
    <div class="col-md-8 offset-2 p-5">
      <DcHeros :dcHeros="dcHeros" @remove-hero="removeHero" />
      <AddHero :dcHeros="dcHeros" @add-hero="addHero" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import DcHeros from "./components/DcHeros.vue";
import AddHero from "./components/AddHero.vue";
import getHeros from "@/reusables/getHeros";
import addHero from "@/reusables/addHero";
import removeHero from '@/reusables/removeHero'
import editHero from '@/reusables/editHero'
export default {
  components: {
    Header,
    DcHeros,
    AddHero,
  },
  data() {
    return {
      dcHeros: [],
    };
  },
  methods: {
    getHeros() {
      getHeros().then((data) => {
        this.dcHeros = data;
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
      }).catch(error => console.log('gerami',error))
    );


  },
};
</script>

<style>
</style>
