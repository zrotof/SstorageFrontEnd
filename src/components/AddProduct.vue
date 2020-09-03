<template>
  <div class="add">   
   
    <form  enctype="multipart/form-data" v-on:submit.prevent="saveProduct" autocomplete="off" method="POST">
       
       <!--v-if="submitted"-->
       <div   class=" cool">
        <strong>Génial!</strong> Votre produit a été créé. Allez dans "<strong>Nos Produits</strong>" si vous voulez y jeter un coup d'oeil.
      </div> 

      <h1 class="text-center">Ajouter Un Produit</h1>
      <input required class="full" id="name" v-model="product.name" autocomplete="{anything}" name="name" type="text" placeholder="Entrez le nom du produit ici ..." >
      <div class="full ean" >
        <input required class="" id="ean" v-model="product.ean" autocomplete="{anything}" name="ean" type="text" placeholder="Entrez le code EAN ici ...">
        <div @click="randomNumber()" type="submit">Générez un code aléatoire</div>
      </div>
      <div class="numbers">
        <input class="middle" id="price" v-model="product.price" name="price" type="number" placeholder="Entrez un Prix ..." >
        <input class="middle" id="qty" v-model="product.qty" name="qty" type="number" placeholder="Entrez une Quantité ..." >
      </div>
      <input class="full"  id="image" name="image" type="file" placeholder="Choisir une image" >
      <textarea class="full" id="description" v-model="product.description" name="description" placeholder="Enter the description of the product here ... "></textarea>
      <button id="ajouter" @click="hide()" type="submit" class="full btn btn-primary ">Ajouter</button>
                               
    </form>

  </div>


</template>


<script>

import prodService from '../services/ProductsService';
import $ from 'jquery'
export default {
  name: 'add-product',
  props: {
    msg: String
  },

  data () {
    
    return{
      
        product : {
          name:'',
          ean:'',
          description: '',
          price: null ,
          qty: null,
          image: []
      },
      submitted: false,

    };
   },

  methods: {
   saveProduct() {

     console.log("price: ",this.product.price )
    var prod = {
      name : (this.product.name),
      description : this.product.description,
      price : ((this.product.price === null) ? 0 : this.product.price ),
      qty : ((this.product.qty === null) ? 0 : this.product.qty ),
      image : document.querySelector('#image').files[0],
      ean : this.product.ean
    };
          prodService.create(prod)
          .then (response => {
            this.message = response.data;
            console.log("server response :", response.data);
            });
        this.submitted = true;

  
    },
    hide(){

       window.setTimeout(function() {
      $(".alert").fadeTo(500, 0).slideUp(500, function(){
      });
       }, 5000);

    },
    randomNumber(){

      const max= Math.pow(10, 13);
      this.product.ean = Math.floor(Math.random() * Math.floor(max));
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



.add{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78%;

}


form{
  margin-top:10%;
  display:flex;
  flex-direction:column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.full{
  width: 60%;
  margin-bottom: 2.5%;
  height: 5vh;
}
.ean{
  display:flex;
  justify-content: space-between;
}

.ean input{
  width: 45%;
}
.ean div{
  width: 45%;
  border: solid black;
  text-align:center;
  font-weight: bolder;
  display:flex;
  align-items: center;
  justify-content:center;
}
.numbers{
  width:60%;
  display:flex;
  justify-content: space-between;
}

.middle{
  width: 40%;
  margin-bottom: 2.5%;
  height: 5vh;
  padding: 1%;
}

.text-center{

  font-weight: bold;
  font-size: 2.5em;
  margin-bottom: 4%;
}

#description{
  height: 20vh;
}

.cool{
  margin-top: 2vh;
    background-color: rgba(9, 202, 138, 0.514);
  color:rgb(4, 44, 37);
  text-align:center;
  padding-top:3vh;
  padding-bottom: 2vh;
  padding-left:1vh;
  padding-right:1vh;
  margin-bottom: 2vh;
}

@media (max-width: 1076px){

  .ean , #name , #price, #qty, #description, #ajouter, #image, .cool{
  
  font-size: 0.8em;

  }
  .text-center{

  font-size: 1.8em;
}

form{
  margin-top:15%;
}

}

@media (max-width: 938px){

  .full{
  width:100%
}
.numbers{
  width:100%;
}
.middle{
  width: 40%;
}

}



@media (max-width: 775px){

    
  .full{
    width:100%
  }
  .numbers{
    width:100%;
  }
  .middle{
    width: 40%;
  }

  form{
    margin-top:20%;
  }

}




@media (max-width: 575px){

    
  form{
    margin-top: 24%;
  }

}

@media (max-width: 528px){

    
  form{
    margin-top: 32%;
  }

}




@media (max-width: 421px){

   .ean div{
     width: 50%;

   }
    #ean{
      width:50%;
    }


}


@media (max-width: 392px){

 .ean div{
     width: 57%;

   }
    #ean{
      width:43%;
    }

    
  form{
    margin-top: 35%;
  }

}


</style>
