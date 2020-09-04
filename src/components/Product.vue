<template>
    <div class="product">

        <h1 class="pTitle">Détails</h1>
        <div class="details">

                <span class="back" v-on:click="goTo"> &lt;&lt; Retour</span>            

                    <div class="content" v-if="name">

                    <div class="top">
                        <div class="images">
                            <div class="miniatures">
                                <div v-on:click="current(event)" v-for="curImg in image" :key="curImg.message" style="cursor:pointer" >
                                    <img v-bind:src="curImg"  >
                                </div>
                            </div>
                            <img id="currentImg" v-bind:src="this.currentImg" >

                        </div>
                        <div class="info" >
                            <div class=labels>
                                <span><strong>Nom :</strong>{{ name }}</span>
                                <span><strong>EAN :</strong>{{ ean }}</span>
                                <span><strong>Prix :</strong>{{ price }}€</span>
                                <span>
                                    <strong>Quantité:</strong> 
                                    <input v-model="qtt" id="qty" type="number" >
                                    <div style="cursor: pointer;" class="enable-modification" v-on:click="changes"> Activer/Déasctiver </div>
                                </span>
                            </div>
                            <div class="description">
                                <strong>Description</strong> <span> {{ description }} </span>
                            </div>
                        </div>
                    </div>
                    <div class="modify">
                        <button id="mod" @click="modifyProduct" type="submit" v-bind:class="(isDisabled? 'btn btn-secondary':'btn btn-success')" :disabled='isDisabled'> Appliquer Modifictation</button>
                    </div>

                </div>
            
                <div class="no-content" v-else>
                    <span>{{ message }}</span>
                </div>
        </div>
    </div>
</template>

<script>

import prodService from '../services/ProductsService';

export default {
    name: 'product',
    props:['name','ean','description','price','qty','image','message'],

    data(){
        return{
            qtt: this.qty,
            isDisabled: true, 
            messages:'',
            currentImg : this.image[0]
        }
    },
    methods:{
        
        goTo(){
            this.$router.push(
                {
                    path: '/'
                    
                }
            )
            
        },changes(){

            console.log("yes")
        console.log("idDisable :",this.isDisabled)

        return this.isDisabled = !this.isDisabled;

        },
        modifyProduct(){
            var prod ={
                name: this.name,
                ean : this.ean,
                qty : this.qtt,

            }

            prodService.update(prod)
            .then(response => {
                
                this.messages = response.data;
                console.log("server response update:", response.data);

            });
            
        },
        current(event) {

            this.currentImg = event.target.getAttribute('src');
            console.log(this.currentImg);
        }
    }
    

}
</script>

<style scoped lang="scss">


.product{

    margin-top:12%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.pTitle{
  font-weight: bold;
  font-size: 2.5em;
  margin-bottom: 4%;
}

.back{
    font-weight: bold;
    font-size: 1em;
    height:5%;
    width: 13%;
    text-align:center;
    cursor: pointer;
    color: rgb(4, 54, 110);
}

.details{
    display: flex;
    background: white;
    width:90%;
    padding-top: 2%;
}



.content{

    display:flex;
    flex-direction: column;
    width:100%;
    

}

.top{
    display:flex;
    flex-direction:column;
    width:100%;
    margin-bottom: 2%;
}

.images{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;

}
.miniatures{
    width: 15%;
    height:100%;
    display:flex;
    flex-direction: column;
    padding-left:auto;
    padding-right:auto;
}

.miniatures > div{
    width:100%;
    margin-left:auto;
    margin-right:auto;
}

.miniatures div img{
    width:100%;
    padding-left:auto;
    padding-right:auto;
}

.miniatures div img:hover{
    width:120%;
    border: solid black;
}
#currentImg{
    height: 38vh;
    width: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 23%;

}
.info{
    display:flex;
    justify-content: space-between;
    width: 100%;    
    margin-top: 2%;


}

.labels{
    display:flex;
    flex-direction: column;
    width: 50%;    

}

.description{
    display:flex;
    flex-direction: column;
    width:50%;
    height:20vh;
    border-left: solid black;
}

.description strong {
    width: 100%;
    text-decoration: underline;
    text-align:center;
}

.description span{
    padding-left: 2%;
    padding-right: 2%;

    width: 98%;
    overflow: auto;
    text-align: justify;
    margin-right:5%;
}

.no-content{
    height: 62vh;
}

#qty{
    width:40%;
    border-bottom: 0.3em solid rgb(21, 78, 100);
    border-right: 0.3em solid rgb(21, 78, 100);
}

.enable-modification{
    background:  rgb(21, 78, 100);
    color:white;
    font-weight: bold;
    margin-left: 3%;
    width:57%;
    display:flex;
    align-items: center;
    justify-content:center;
    margin-right: 3%;
}

.modify{
    text-align:center;
}


.modify button{
    width: 50%;
}


.labels span:last-child{
    display: flex;
}
  

  @media (max-width: 1030px){


  .back{
      font-size: 0.87em;
  }

}

@media (max-width: 940px){

  .content, #mod{
      font-size: 0.83em;
  }

  #currentImg
  {
      height: 28vh;
    width: 35vh;
  }

  .back{
      font-size: 0.7em;
  }

    .product{

    margin-top:16%;
}

  

}

@media (max-width: 686px){


  #currentImg{
      height: 20vh;
    width: 25vh;
  }

  .back{
      font-size: 0.7em;
  }
.top{
    margin-left:2%;
}
.info{
    display: flex;
    flex-direction: column;
    

}
.description{
    display:block;
    border: none;
    width: inherit;
    padding-right:3%;
}

.back{
    display:none;
}

.labels{
    width:98%;
    padding-right: 3%;
}
.labels #qty{
    width: 50%;
}
.labels .enable-modification{
    width: 50%;

}

}



  @media (max-width: 575px){


    .product{

    margin-top:25%;
}


}


 @media (max-width: 492px){


    .product{

    margin-top:28%;
}

 }

@media (max-width: 443px){


    .product{

    margin-top:32%;
}

.details{
    width:100%;
}
}





</style>
