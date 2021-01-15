const mixins = {
    methods:{
        checkInput(value){
                if(value.trim().length == 0 ){
                  this.disabled = true
                }
               else{
                  this.disabled = false
               }
              }
        }
}

export default mixins