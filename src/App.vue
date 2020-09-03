<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div class="left">

      <div class="logo">
        
        <span class="text">MAÏA</span>
        <span class="text">PROJECT</span>
  
      </div>

      <div class="nav">


        
        <router-link to="/products" style="text-decoration:none" class="link">Nos produits</router-link>
          
        <router-link to="/add" style="text-decoration:none" class="link">Ajouter Produit</router-link>

        <router-link to="/contact"  style="text-decoration:none" class="link">Nous Contacter</router-link>

      </div>

    </div>
    
    <div class="right">

      <div class="head">
      <div class="banner">
        <div class="menu-bar">
          <input type="checkbox" id="menu-toggle"/>
          <label id="trigger" for="menu-toggle"></label>
          <label id="burger" for="menu-toggle"></label>
          <div id="menu">
            <router-link to="/products" style="text-decoration:none" class="link">Nos produits</router-link>
            <router-link to="/add" style="text-decoration:none" class="link">Ajouter Produit</router-link>
            <router-link to="/contact"  style="text-decoration:none" class="link">Nous Contacter</router-link>
          </div>
        </div> 
        <div class="logos">
        
        <span class="text">MAÏA</span>
        <span class="text">PROJECT</span>
  
      </div>
      </div>

      
      <form class="form-find" v-on:submit.prevent="findProduct" method="get">
          <span class="form-text">Cherchez un produit</span>
          <div class="inputs ">
            <input id="name" v-model="name" type="text" placeholder="Entrez le nom ..." />
            
            <input id="ean" v-model="ean" type="text" placeholder="Entrez le code EAN ..." />
            
            <button id="button" class="btn-search" type="submit">Chercher</button>
          </div>
            
       </form>
      </div>
      <div class="jumbotron">
        <router-view/>
      </div>
      
    </div>
  </div>
</template>

<script>

    import prodService from './services/ProductsService';
export default {

  data(){
    return{
      name:'',
      ean:'',
      product: {
        name:'',
        ean:'',
        description:'',
        image:'',
        price:'',
        qty:''
      }
    }
  },
  methods: {
  async  findProduct(){

        const name= this.name;
        const ean= this.ean;

        await   prodService.findByNameEan(name,ean)
        .then(response =>{
          const product = response.data;

          console.log("server response : rien", product);
          this.$router.replace(
          {
              name: 'product',
              
              params: { 
                name : product[0].name,
                ean: product[0].ean,
                description: product[0].description,
                price: product[0].price,
                qty: product[0].qty,
                image: product[0].image}
              
          })

        })
        .catch(message =>{
          console.log("Message: ", message)
        this.$router.replace(
          {
              name: 'product',
              
              params: { 
                message: "Oops, quelque chose n'a pas marché, veuillez vérifier les champs et essayez de nouveau ."}
              
          })})
      
  }
  }
  
}
</script>

<style scoped lang="scss">


body{
  height:100%;
  width:100%;
}
  #app{
    
    padding-left:0.5%;
    padding-right:0.5%;
    height:100%;

  }
  .left{
    width: 19%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position:fixed;
    overflow: auto;

  }

  .logo{
    width:80%;
    height: 15%;
   // border: solid green;
    margin-left: auto;
    margin-right: auto;
    display:flex;
    flex-direction: column;
    align-items:center;


  }

  .logos{
    display:none;
  }

.text {
    text-transform: uppercase;
    font-family: verdana;
    font-size: 2.2em;
    font-weight: 700;
    color: rgb(4, 54, 110);
    text-shadow: 1px 1px 1px #9c0606d2,
        1px 2px 1px #9c0606d2,
        1px 3px 1px #9c0606d2,
        1px 4px 1px #9c0606d2,
        1px 5px 1px #9c0606d2,
        1px 6px 1px #9c0606d2,
        1px 7px 1px #4b4848,
        1px 8px 1px #4b4848,
        1px 9px 1px #4b4848,
        1px 10px 1px #4b4848,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
    }

  .nav{
    width:100%;
    display:flex;
    height:85%;
    flex-direction: column;
    display:flex;
    align-items:center;
    justify-content: center;

  }

  .link {
    border-top: thick double black;
    width:75%;
    height: 10%;
    text-decoration:none;
    font-weight: bold;
    font-size: 1.25em;
    display:flex;
    align-items:center;
    justify-content:center;
    color: black;
  }


  .link:last-child{
        border-bottom: thick double black;

  }



  .link:hover{
    background-color: black;
    color: white;

  }

  .right{
    width: 81%;
    margin-left:19.5%;

  }
  
  .head{
   position: fixed;
   display:flex;
   flex-direction: column;
    width:80.5%;
    height:22%;
  }

  .banner{
    background-image: url('../public/banner.jpeg');
    height:46%;    
    width:100%;

  }

  .form-find{
        height:54%;    
    width:100%;
    display:flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e9ecef;

  }

.menu-bar{
  display: none;
}

.form-text{
  font-weight: bolder;
  font-size: 1.5em;

}

.inputs{
  width:100%;
}

#name{
  width:30%;
}

#ean{
    width:30%;

}

#button{
    width:20%;

}





@media (max-width: 1076px){

  .text{
    font-size: 2em;
      font-weight: 600;
  }

  .link{
    font-size: 1em;
  }

}

@media (max-width: 936px){

  .text{
    font-size: 1.65em;
    font-weight: 550;
  }

  .link{
    font-size: 0.7em;
  }

}



@media (max-width: 775px){

  .left{
    display:none;
  }
  .right{
    margin-left: 0%;
    width:100%;
  }

  .head{
    width:99%;
    height:22%;
    display: flex;
    flex-direction: column;
  }
  .banner{
    height:46%;    

    display:flex;
    justify-content: space-between;


  }

.text:last-child {

  margin-left: 10px;
}

  .text {
    
    text-transform: uppercase;
    font-family: verdana;
    font-size: 1.7em;
    font-weight: 700;
    color: rgb(4, 54, 110);
    text-shadow: 1px 1px 1px white,
        1px 2px 1px white,
        1px 3px 1px white,
        1px 4px 1px white,
        1px 5px 1px white,
        1px 6px 1px white,
        1px 7px 1px #9c0606d2,
        1px 8px 1px #9c0606d2,
        1px 9px 1px #9c0606d2,
        1px 10px 1px #9c0606d2,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
    }

  .logos{
    display: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
  }

  .form-find{
    width:100%;
    height:56%;    

  }

  .menu-bar{
    display: inherit;
  }



  .link{
    
    font-size: inherit;
    border: none;
    width:50%;
    height: 5vh;
    color: #9c0606d2;
    font-weight: bold;
    display:none;

  }

  .link:last-child{
    border: none;
  }





  @keyframes checked-anim {
      5% {
          width: 5%;
          height: 3000px;
          
          border-radius: 0;
      }
      50% {
          width: 100%;
          height: 3000px;
          border-radius: 0;
      }

      100%{
        width: 45%;
          height: 3000px;
          border-radius: 0;
      }
  }

  @keyframes not-checked-anim {
      0% {
          width: 0%;
          height: 100%;
      }
  }



  #trigger, #burger, #burger:before, #burger:after {
      position: absolute;
      top:23px;
      left: 15px;
      background: #9c0606d2;
      width: 30px;
      height: 5px;
      transition: .2s ease;
      cursor: pointer;
      z-index: 1;
  }
  #trigger {
      height: 25px;
      background: none;
  }
  #burger:before {
      content: " ";
      top: 10px;
      left: 0;
  }
  #burger:after {
      content: " ";
      top: 20px;
      left: 0;
  }
  #menu-toggle:checked + #trigger + #burger {
      top: 35px;
      transform: rotate(180deg);
      transition: transform .2s ease;
  }

  #menu-toggle:checked + #trigger + #burger:before {
      width: 20px;
      top: -2px;
      left: 18px;
      transform: rotate(45deg) translateX(-5px);
      transition: transform .2s ease;
  }

  #menu-toggle:checked + #trigger + #burger:after {
      width: 20px;
      top: 2px;
      left: 18px;
      transform: rotate(-45deg) translateX(-5px);
      transition: transform .2s ease;
  }

  #menu {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 14.5%;
      height: 46%;
      background-color: white;
      border-bottom-right-radius: 100%;
      box-shadow: 0 2px 5px rgba(0,0,0,0.26);
      animation: not-checked-anim .2s linear;
      transition: .2s;
  }

  #menu-toggle:checked + #trigger + #burger + #menu {
      animation: checked-anim 1s ease both;
      
  }

    #menu-toggle:checked + #trigger ~ #menu > .link {

          display: block;
    }

    [type="checkbox"]:not(:checked), [type="checkbox"]:checked {
        display: none;
    }


    .link{
      white-space: nowrap;text-align: center;
      width:100%;
    }
    .link:first-child{
      margin-top: 12vh;
    }


    .link:hover{

      white-space: nowrap;
      background-color: rgb(4, 54, 110);
      color: white;

    }
}



@media (max-width: 460px){


.form-text{
  font-size: 1.2em;
}


}


@media (max-width: 551px){


#name{
  width:30%;
}

#ean{
  width:40%;

}

#boutton{
  width:15%;

}


}


@media (max-width: 414px){


.form-text{
  font-size: 1.15em;
}



}

@media (max-width: 445px){


   #trigger, #burger, #burger:before, #burger:after {
      position: absolute;
      top:23px;
      left: 10px;
      background: #9c0606d2;
      width: 30px;
      height: 5px;
      transition: .2s ease;
      cursor: pointer;
      z-index: 1;
  }

  #trigger {
      height: 25px;
      background: none;
  }
  #burger:before {
      content: " ";
      top: 10px;
      left: 0;
  }
  #burger:after {
      content: " ";
      top: 20px;
      left: 0;
  }
  #menu-toggle:checked + #trigger + #burger {
      top: 35px;
      transform: rotate(180deg);
      transition: transform .2s ease;
  }

  #menu-toggle:checked + #trigger + #burger:before {
      width: 20px;
      top: -2px;
      left: 18px;
      transform: rotate(45deg) translateX(-5px);
      transition: transform .2s ease;
  }

  #menu-toggle:checked + #trigger + #burger:after {
      width: 20px;
      top: 2px;
      left: 18px;
      transform: rotate(-45deg) translateX(-5px);
      transition: transform .2s ease;
  }


}


 
@media (max-width: 401px){


   #trigger, #burger, #burger:before, #burger:after {
      position: absolute;
      top:23px;
      left: 5px;
      background: #9c0606d2;
      width: 30px;
      height: 5px;
      transition: .2s ease;
      cursor: pointer;
      z-index: 1;
  }

  #trigger {
      height: 25px;
      background: none;
  }
  #burger:before {
      content: " ";
      top: 10px;
      left: 0;
  }
  #burger:after {
      content: " ";
      top: 20px;
      left: 0;
  }
  #menu-toggle:checked + #trigger + #burger {
      top: 35px;
      transform: rotate(180deg);
      transition: transform .2s ease;
  }

  #menu-toggle:checked + #trigger + #burger:before {
      width: 20px;
      top: -2px;
      left: 18px;
      transform: rotate(45deg) translateX(-5px);
      transition: transform .2s ease;
  }

  #menu-toggle:checked + #trigger + #burger:after {
      width: 20px;
      top: 2px;
      left: 18px;
      transform: rotate(-45deg) translateX(-5px);
      transition: transform .2s ease;
  }


} 

</style>
