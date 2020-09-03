<template>

  <div class="contact">
        <div class="header">  
          
          <img class="main-logo" src="../../public/human.png" alt="A human logo">
          <h1 class="title">Nous Contacter</h1>

        </div>

          <span id="info"> Vous voulez nous contactez ???</span>
          <span id="info"> Vous pouvez choisir parmi l'un des moyens ci-dessous. N'hésitez pas à tous les utiliser ... <i class="em em-grin"></i></span>

        <div>
          <div class="moyen-contact">
            <img src="../../public/linkedin.png" alt="The linkedin logo">
            <span><a href="www.linkedin.com/in/bonachisamuel"> <strong> Mon lien linkedin </strong></a></span>
          </div>

          <div class="moyen-contact">
            <img src="../../public/mail.jpg" alt="An envelope  logo">
            <span><strong> manduel21@gmail.com </strong></span>
          </div>
          
          <div class="moyen-contact">
            <img src="../../public/phone.png" alt="A phone  logo">
            <span>( +33 ) <strong> 07 - 83 - 18 - 91 - 71 </strong></span>
          </div>
          
          <div class="moyen-contact">
            <img src="../../public/human.png" alt="A human holding suitcase logo">
            <span><a href="https://samuel-mandeng-portfolio.herokuapp.com/" target="_blank"><strong>Accédez à mon portfolio en cliquant ici ...</strong></a></span>
          </div>
        </div>
        
  </div>
</template>

<script>
export default {
  name: 'contact-us',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.contact{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
}

.header{
  margin-top:12%;
  display:flex;
  width:100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 9vh;
  border: solid black;
}

.main-logo{
  width: 10vh;
  height: 10vh;

}
.title{

    display:flex;
    align-items: center;
    font-weight:bold;
 
}

span + span {
  margin-bottom: 5%;
}

div img {
  width: 4vh;
  margin-right: 1%;
}

a{
  text-decoration: none;
  color:black;
}

 div{
    width: 100%;

}

.moyen-contact{
  padding-left: 35%;
  margin-top: 0.5%;
}

.header + span, .header + span + span {
  font-size: 1.4em;
}


@media (max-width: 1205px){

  #info{

    font-size: 1.3em ;
  } 

  .moyen-contact{
  padding-left: 30%;
  margin-top: 0.5%;
}


}


  @media (max-width: 1128px){

  #info{

    font-size: 1.1em ;
  } 


}



@media (max-width: 1186px){

  .header{
    margin-top:16%;
  } 

}


@media (max-width: 1076px){


 #info, .moyen-contact span strong{
  font-size: 1em;
}
  .title{
    font-size: 1.8em;
    display:flex;
    align-items: center;
    justify-content: center;
  }


}



@media (max-width: 978px){

  #info, .moyen-contact span strong{
  font-size: 0.8em;
}

  .main-logo{
    height:5vh;
    width:5vh;
  }

  .moyen-contact{
  padding-left: 0%;
  margin-top: 0.5%;
}
}


@media (max-width: 880px){

  .header{
    margin-top:23.5%;
  } 

}


@media (max-width: 575px){

  #info, .moyen-contact span strong{
  font-size: 0.8em;
}

  .main-logo{
    height:5vh;
    width:5vh;
  }

  .moyen-contact{
  padding-left: 0%;
}
  .header{
    margin-top: 28%;
  }
}

@media (max-width: 490px){

  .header{
    margin-top:34%;
  } 

}

@media (max-width: 410px){

  .header{
    margin-top:40%;
  } 

}




</style>
