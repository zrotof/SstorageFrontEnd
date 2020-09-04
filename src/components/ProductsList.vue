<template>
  <div class="products">
    <h1>Nos Produits</h1>

    <div class="bloc-products">

        <div v-for="item in products" :key="item.message" class="item" style="cursor: pointer;" @click="goTo(item)">
        <img v-bind:src="item.image[0]">
        <span id="nam" class="name">{{item.name}}</span>
        <span id="price" class="price">{{item.price}} €</span>
        <span id="ea" hidden>{{item.ean}}</span>

      </div>
    </div>
  </div>
</template>

<script>

import prodService from '../services/ProductsService';

export default {
  name: 'products-list',
  props: {
    msg: String
  },
  data() {
    
    return{
      products: this.listproduct()
    }
  },
  methods:{

    listproduct(){
      prodService.getAll()
      .then(response =>{
        this.products=response.data;
        console.log(response.data)
      })
    },

    async goTo(product){


      await prodService.findByNameEan(product.name, product.ean)
        .then(response =>{
          const prod = response.data;

          console.log("server response : rien", prod);


          
          this.$router.replace(
          {
              name: 'product',
              
              params: { 
                name : prod[0].name,
                ean: prod[0].ean,
                description: prod[0].description,
                price: prod[0].price,
                qty: prod[0].qty,
                image: prod[0].image
                }
              
          })})
          .catch(message =>{
          console.log("Message: ", message)
        this.$router.replace(
          {
              name: 'product',
              
              params: { 
                message: "Oops, quelque chose n'a pas marché, veuillez essayez de nouveau plus tard."}
              
          })})

        }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.products{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bloc-products{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item{
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  justify-content: center;
  align-items: center;
  width: 15%;

}


img{
  width: 100%;
  height: 20vh;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2.5%;
  padding-bottom: 3%;
}

h1{
    margin-top: 12%;

  font-weight: bold;
  font-size: 2.5em;
  margin-bottom: 4%;

}

.name{
  font-weight: bold;
  font-size: 0.96em;
  width: 100%;
  text-align:center;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}

.price{
  color: rgb(173, 1, 1);
  font-weight: bold;
  text-align:center;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}



@media (max-width: 1178px){

  
img{
  height: 13vh;
}

.item{
  width: 18%;
}

h1{
    margin-top: 14%;
  font-size: 2.1em;

}




}
@media (max-width: 978px){

   #nam , #price{
  
  font-size: 0.8em;

  }
 h1{
   margin-top: 16%;
  font-size: 1.8em;
} 

img{
  height: 15vh;
}

.item{
  width: 22%;
}





}


@media (max-width: 776px){

  
img{
  height: 12vh;
}

.item{
  width: 22%;
}

h1{
  margin-top:17%;
}

}


@media (max-width: 575px){

  
img{
  height: 10vh;
}

.item{
  width: 28%;
}
h1{
  margin-top:25%;
  font-size: 1.5em;

}

}


@media (max-width: 575px){



h1{
  margin-top:29%;
  font-size: 1.5em;

}

}



@media (max-width: 575px){



h1{
  margin-top:32%;
  font-size: 1.5em;

}

}


@media (max-width: 421px){



h1{
  margin-top:38%;
  font-size: 1.5em;

}

}



@media (max-width: 359px){



h1{
  margin-top:41%;
  font-size: 1.3em;

}

}




@media (max-width: 358px){

  
img{
  height: 10vh;
}

.item{
  width: 48%;
}

}


</style>
