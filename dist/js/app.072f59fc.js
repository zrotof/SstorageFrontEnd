(function(e){function t(t){for(var c,r,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},a={app:0},o=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19a4":function(e,t,n){e.exports=n.p+"img/mail.647d18ba.jpg"},"1c21":function(e,t,n){},"385a":function(e,t,n){e.exports=n.p+"img/phone.d52750aa.png"},"40ea":function(e,t,n){},"46b7":function(e,t,n){"use strict";n("71ae")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=(n("b0c0"),Object(c["B"])("data-v-0f4dea66"));Object(c["p"])("data-v-0f4dea66");var o={id:"app"},r={class:"left"},i=Object(c["g"])("div",{class:"logo"},[Object(c["g"])("span",{class:"text"},"MAÏA"),Object(c["g"])("span",{class:"text"},"PROJECT")],-1),s={class:"nav"},u=Object(c["f"])("Nos produits"),d=Object(c["f"])("Ajouter Produit"),l=Object(c["f"])("Nous Contacter"),p={class:"right"},b={class:"head"},g={class:"banner"},m={class:"menu-bar"},j=Object(c["g"])("input",{type:"checkbox",id:"menu-toggle"},null,-1),O=Object(c["g"])("label",{id:"trigger",for:"menu-toggle"},null,-1),f=Object(c["g"])("label",{id:"burger",for:"menu-toggle"},null,-1),v={id:"menu"},h=Object(c["f"])("Nos produits"),y=Object(c["f"])("Ajouter Produit"),x=Object(c["f"])("Nous Contacter"),k=Object(c["g"])("div",{class:"logos"},[Object(c["g"])("span",{class:"text"},"MAÏA"),Object(c["g"])("span",{class:"text"},"PROJECT")],-1),q=Object(c["g"])("span",{class:"form-text"},"Cherchez un produit",-1),P={class:"inputs "},z=Object(c["g"])("button",{id:"button",class:"btn-search",type:"submit"},"Chercher",-1),w={class:"jumbotron"};Object(c["n"])();var A=a((function(e,t){var n=Object(c["t"])("router-link"),A=Object(c["t"])("router-view");return Object(c["m"])(),Object(c["d"])("div",o,[Object(c["g"])("div",r,[i,Object(c["g"])("div",s,[Object(c["g"])(n,{to:"/products",style:{"text-decoration":"none"},class:"link"},{default:a((function(){return[u]})),_:1}),Object(c["g"])(n,{to:"/add",style:{"text-decoration":"none"},class:"link"},{default:a((function(){return[d]})),_:1}),Object(c["g"])(n,{to:"/contact",style:{"text-decoration":"none"},class:"link"},{default:a((function(){return[l]})),_:1})])]),Object(c["g"])("div",p,[Object(c["g"])("div",b,[Object(c["g"])("div",g,[Object(c["g"])("div",m,[j,O,f,Object(c["g"])("div",v,[Object(c["g"])(n,{to:"/products",style:{"text-decoration":"none"},class:"link"},{default:a((function(){return[h]})),_:1}),Object(c["g"])(n,{to:"/add",style:{"text-decoration":"none"},class:"link"},{default:a((function(){return[y]})),_:1}),Object(c["g"])(n,{to:"/contact",style:{"text-decoration":"none"},class:"link"},{default:a((function(){return[x]})),_:1})])]),k]),Object(c["g"])("form",{class:"form-find",onSubmit:t[3]||(t[3]=Object(c["A"])((function(){return e.findProduct.apply(e,arguments)}),["prevent"])),method:"get"},[q,Object(c["g"])("div",P,[Object(c["z"])(Object(c["g"])("input",{id:"name","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t}),type:"text",placeholder:"Entrez le nom ...",required:""},null,512),[[c["x"],e.name]]),Object(c["z"])(Object(c["g"])("input",{id:"ean","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.ean=t}),type:"text",placeholder:"Entrez le code EAN ...",required:""},null,512),[[c["x"],e.ean]]),z])],32)]),Object(c["g"])("div",w,[Object(c["g"])(A)])])])})),_=(n("a4d3"),n("e01a"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),C=(n("99af"),n("d4ec")),N=n("bee2"),E=n("bc3a"),M=n.n(E),T=M.a.create({baseURL:"http://sstoragebackend.herokuapp.com/products",headers:{"Content-type":"application/json"}}),U=function(){function e(){Object(C["a"])(this,e)}return Object(N["a"])(e,[{key:"getAll",value:function(){return T.get("/")}},{key:"create",value:function(e){console.log("Inside the service 1: ",e.image);var t=new FormData;t.append("name",e.name),t.append("description",e.description),t.append("price",e.price),t.append("qty",e.qty),t.append("ean",e.ean);for(var n=0;n<e.image.length;n++){var c=e.image[n];t.append("images",c)}return T.post("/add",t)}},{key:"findByNameEan",value:function(e,t){return T.get("/product/".concat(e,"&").concat(t))}},{key:"update",value:function(e){console.log("Inside the service: ",e);var t=new FormData;return t.append("name",e.name),t.append("ean",e.ean),t.append("qty",e.qty),T.put("/modify",t)}}]),e}(),D=new U,I={data:function(){return{name:"",ean:"",product:{name:"",ean:"",description:"",image:"",price:"",qty:""}}},methods:{findProduct:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.name,c=e.ean,t.next=4,D.findByNameEan(n,c).then((function(t){var n=t.data;console.log("server response : rien",n),e.$router.replace({name:"product",params:{name:n[0].name,ean:n[0].ean,description:n[0].description,price:n[0].price,qty:n[0].qty,image:n[0].image}})})).catch((function(t){console.log("Message: ",t),e.$router.replace({name:"product",params:{message:"Oops, quelque chose n'a pas marché, veuillez vérifier les champs et essayez de nouveau ."}})}));case 4:case"end":return t.stop()}}),t)})))()}}};n("b3d4");I.render=A,I.__scopeId="data-v-0f4dea66";var S=I,V=n("8c4f"),B={class:"products"};function R(e,t){var n=Object(c["t"])("Products");return Object(c["m"])(),Object(c["d"])("div",B,[Object(c["g"])(n)])}var $=Object(c["B"])("data-v-30bd933e");Object(c["p"])("data-v-30bd933e");var J={class:"products"},F=Object(c["g"])("h1",null,"Nos Produits",-1),G={class:"bloc-products"},Q={id:"nam",class:"name"},L={id:"price",class:"price"},H={id:"ea",hidden:""};Object(c["n"])();var K=$((function(e,t){return Object(c["m"])(),Object(c["d"])("div",J,[F,Object(c["g"])("div",G,[(Object(c["m"])(!0),Object(c["d"])(c["a"],null,Object(c["s"])(e.products,(function(t){return Object(c["m"])(),Object(c["d"])("div",{key:t.message,class:"item",style:{cursor:"pointer"},onClick:function(n){return e.goTo(t)}},[Object(c["g"])("img",{src:t.image[0]},null,8,["src"]),Object(c["g"])("span",Q,Object(c["v"])(t.name),1),Object(c["g"])("span",L,Object(c["v"])(t.price)+" €",1),Object(c["g"])("span",H,Object(c["v"])(t.ean),1)],8,["onClick"])})),128))])])})),W={name:"products-list",props:{msg:String},data:function(){return{products:this.listproduct()}},methods:{listproduct:function(){var e=this;D.getAll().then((function(t){e.products=t.data,console.log(t.data)}))},goTo:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,D.findByNameEan(e.name,e.ean).then((function(e){var n=e.data;console.log("server response : rien",n),t.$router.replace({name:"product",params:{name:n[0].name,ean:n[0].ean,description:n[0].description,price:n[0].price,qty:n[0].qty,image:n[0].image}})})).catch((function(e){console.log("Message: ",e),t.$router.replace({name:"product",params:{message:"Oops, quelque chose n'a pas marché, veuillez essayez de nouveau plus tard."}})}));case 2:case"end":return n.stop()}}),n)})))()}}};n("46b7");W.render=K,W.__scopeId="data-v-30bd933e";var X=W,Y={name:"products",components:{Products:X}};Y.render=R;var Z=Y,ee={class:"contact"};function te(e,t){var n=Object(c["t"])("ContactUs");return Object(c["m"])(),Object(c["d"])("div",ee,[Object(c["g"])(n)])}var ne=n("c965"),ce=n.n(ne),ae=n("8b86"),oe=n.n(ae),re=n("19a4"),ie=n.n(re),se=n("385a"),ue=n.n(se),de=Object(c["B"])("data-v-36e7566c");Object(c["p"])("data-v-36e7566c");var le={class:"contact"},pe=Object(c["g"])("div",{class:"header"},[Object(c["g"])("img",{class:"main-logo",src:ce.a,alt:"A human logo"}),Object(c["g"])("h1",{class:"title"},"Nous Contacter")],-1),be=Object(c["g"])("span",{id:"info"}," Vous voulez nous contactez ???",-1),ge=Object(c["g"])("span",{id:"info"},[Object(c["f"])(" Vous pouvez choisir parmi l'un des moyens ci-dessous. N'hésitez pas à tous les utiliser ... "),Object(c["g"])("i",{class:"em em-grin"})],-1),me=Object(c["g"])("div",null,[Object(c["g"])("div",{class:"moyen-contact"},[Object(c["g"])("img",{src:oe.a,alt:"The linkedin logo"}),Object(c["g"])("span",null,[Object(c["g"])("a",{href:"www.linkedin.com/in/bonachisamuel"},[Object(c["g"])("strong",null," Mon lien linkedin ")])])]),Object(c["g"])("div",{class:"moyen-contact"},[Object(c["g"])("img",{src:ie.a,alt:"An envelope  logo"}),Object(c["g"])("span",null,[Object(c["g"])("strong",null," manduel21@gmail.com ")])]),Object(c["g"])("div",{class:"moyen-contact"},[Object(c["g"])("img",{src:ue.a,alt:"A phone  logo"}),Object(c["g"])("span",null,[Object(c["f"])("( +33 ) "),Object(c["g"])("strong",null," 07 - 83 - 18 - 91 - 71 ")])]),Object(c["g"])("div",{class:"moyen-contact"},[Object(c["g"])("img",{src:ce.a,alt:"A human holding suitcase logo"}),Object(c["g"])("span",null,[Object(c["g"])("a",{href:"https://samuel-mandeng-portfolio.herokuapp.com/",target:"_blank"},[Object(c["g"])("strong",null,"Accédez à mon portfolio en cliquant ici ...")])])])],-1);Object(c["n"])();var je=de((function(e,t){return Object(c["m"])(),Object(c["d"])("div",le,[pe,be,ge,me])})),Oe={name:"contact-us",props:{msg:String}};n("b6e1");Oe.render=je,Oe.__scopeId="data-v-36e7566c";var fe=Oe,ve={name:"contact",components:{ContactUs:fe}};ve.render=te;var he=ve,ye=Object(c["B"])("data-v-26a15c1a");Object(c["p"])("data-v-26a15c1a");var xe={class:"home"};Object(c["n"])();var ke=ye((function(e,t){var n=Object(c["t"])("AddProduct");return Object(c["m"])(),Object(c["d"])("div",xe,[Object(c["g"])(n)])})),qe=Object(c["B"])("data-v-9b7908ae");Object(c["p"])("data-v-9b7908ae");var Pe={class:"add"},ze={key:0,class:" cool"},we=Object(c["g"])("strong",null,"Génial!",-1),Ae=Object(c["f"])(' Votre produit a été créé. Allez dans "'),_e=Object(c["g"])("strong",null,"Nos Produits",-1),Ce=Object(c["f"])("\" si vous voulez y jeter un coup d'oeil. "),Ne=Object(c["g"])("h1",{class:"text-center"},"Ajouter Un Produit",-1),Ee={class:"full ean"},Me={class:"numbers"},Te={ref:"image",class:"full",id:"image",name:"image",type:"file",placeholder:"Choisir une/des image(s)",multiple:"",accept:"image/*"};Object(c["n"])();var Ue=qe((function(e,t){return Object(c["m"])(),Object(c["d"])("div",Pe,[Object(c["g"])("form",{enctype:"multipart/form-data",onSubmit:t[8]||(t[8]=Object(c["A"])((function(){return e.saveProduct.apply(e,arguments)}),["prevent"])),autocomplete:"off",method:"POST"},[e.submitted?(Object(c["m"])(),Object(c["d"])("div",ze,[we,Ae,_e,Ce])):Object(c["e"])("",!0),Ne,Object(c["z"])(Object(c["g"])("input",{required:"",class:"full",id:"name","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.product.name=t}),autocomplete:"{anything}",name:"name",type:"text",placeholder:"Entrez le nom du produit ici ..."},null,512),[[c["x"],e.product.name]]),Object(c["g"])("div",Ee,[Object(c["z"])(Object(c["g"])("input",{required:"",class:"",id:"ean","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.product.ean=t}),autocomplete:"{anything}",name:"ean",type:"text",placeholder:"Entrez le code EAN ici ..."},null,512),[[c["x"],e.product.ean]]),Object(c["g"])("div",{onClick:t[3]||(t[3]=function(t){return e.randomNumber()})},"Générez un code aléatoire")]),Object(c["g"])("div",Me,[Object(c["z"])(Object(c["g"])("input",{class:"middle",id:"price","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.product.price=t}),name:"price",type:"number",placeholder:"Entrez un Prix ..."},null,512),[[c["x"],e.product.price]]),Object(c["z"])(Object(c["g"])("input",{class:"middle",id:"qty","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.product.qty=t}),name:"qty",type:"number",placeholder:"Entrez une Quantité ..."},null,512),[[c["x"],e.product.qty]])]),Object(c["g"])("input",Te,null,512),Object(c["z"])(Object(c["g"])("textarea",{class:"full",id:"description","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.product.description=t}),name:"description",placeholder:"Enter the description of the product here ... "},null,512),[[c["x"],e.product.description]]),Object(c["g"])("button",{id:"ajouter",onClick:t[7]||(t[7]=function(t){return e.hide()}),type:"submit",class:"full btn btn-primary "},"Ajouter")],32)])})),De=n("1157"),Ie=n.n(De),Se={name:"add-product",props:{msg:String},data:function(){return{product:{name:"",ean:"",description:"",price:null,qty:null,image:[]},submitted:!1}},methods:{saveProduct:function(){var e=this;if(console.log("image input: ",this.$refs.image.value.length),this.$refs.image.value.length>0){var t=document.querySelector("#image").files;console.log("selectedImage: ",t.length,t);for(var n=0;n<t.length;n++)this.product.image.push(t[n])}console.log(" Images [] :",this.product.image);var c={name:this.product.name,description:this.product.description,price:null===this.product.price?0:this.product.price,qty:null===this.product.qty?0:this.product.qty,image:this.product.image,ean:this.product.ean};D.create(c).then((function(t){e.message=t.data,console.log("server response :",t.data)})),this.submitted=!0,this.product.name="",this.product.description="",this.product.price=null,this.product.qty=null,this.$refs.image.value="",this.product.ean=""},hide:function(){window.setTimeout((function(){Ie()(".cool").fadeTo(500,0).slideUp(500,(function(){}))}),5e3)},randomNumber:function(){var e=Math.pow(10,13);this.product.ean=Math.floor(Math.random()*Math.floor(e))}}};n("db41");Se.render=Ue,Se.__scopeId="data-v-9b7908ae";var Ve=Se,Be={name:"add",components:{AddProduct:Ve}};n("7dd2");Be.render=ke,Be.__scopeId="data-v-26a15c1a";var Re=Be;function $e(e,t){var n=Object(c["t"])("Product");return Object(c["m"])(),Object(c["d"])(n)}var Je=Object(c["B"])("data-v-6ad347b0");Object(c["p"])("data-v-6ad347b0");var Fe={class:"product"},Ge=Object(c["g"])("h1",{class:"pTitle"},"Détails",-1),Qe={class:"details"},Le={key:0,class:"content"},He={class:"top"},Ke={class:"images"},We=Object(c["g"])("div",{class:"miniatures"},null,-1),Xe={class:"info"},Ye={class:"labels"},Ze=Object(c["g"])("strong",null,"Nom :",-1),et=Object(c["g"])("strong",null,"EAN :",-1),tt=Object(c["g"])("strong",null,"Prix :",-1),nt=Object(c["g"])("strong",null,"Quantité:",-1),ct={class:"description"},at=Object(c["g"])("strong",null,"Description",-1),ot=Object(c["f"])(),rt={class:"modify"},it={key:1,class:"no-content"};Object(c["n"])();var st=Je((function(e,t){return Object(c["m"])(),Object(c["d"])("div",Fe,[Ge,Object(c["g"])("div",Qe,[Object(c["g"])("span",{class:"back",onClick:t[1]||(t[1]=function(){return e.goTo.apply(e,arguments)})}," << Retour"),e.name?(Object(c["m"])(),Object(c["d"])("div",Le,[Object(c["g"])("div",He,[Object(c["g"])("div",Ke,[We,Object(c["g"])("img",{id:"currentImg",src:e.image,alt:"Image of a product"},null,8,["src"])]),Object(c["g"])("div",Xe,[Object(c["g"])("div",Ye,[Object(c["g"])("span",null,[Ze,Object(c["f"])(Object(c["v"])(e.name),1)]),Object(c["g"])("span",null,[et,Object(c["f"])(Object(c["v"])(e.ean),1)]),Object(c["g"])("span",null,[tt,Object(c["f"])(Object(c["v"])(e.price)+"€",1)]),Object(c["g"])("span",null,[nt,Object(c["z"])(Object(c["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.qtt=t}),id:"qty",type:"number"},null,512),[[c["x"],e.qtt]]),Object(c["g"])("div",{style:{cursor:"pointer"},class:"enable-modification",onClick:t[3]||(t[3]=function(){return e.changes.apply(e,arguments)})}," Activer/Déasctiver ")])]),Object(c["g"])("div",ct,[at,ot,Object(c["g"])("span",null,Object(c["v"])(e.description),1)])])]),Object(c["g"])("div",rt,[Object(c["g"])("button",{id:"mod",onClick:t[4]||(t[4]=function(){return e.modifyProduct.apply(e,arguments)}),type:"submit",class:e.isDisabled?"btn btn-secondary":"btn btn-success",disabled:e.isDisabled}," Appliquer Modifictation",10,["disabled"])])])):(Object(c["m"])(),Object(c["d"])("div",it,[Object(c["g"])("span",null,Object(c["v"])(e.message),1)]))])])})),ut={name:"product",props:["name","ean","description","price","qty","image","message"],data:function(){return{qtt:this.qty,isDisabled:!0,messages:""}},methods:{goTo:function(){this.$router.push({path:"/"})},changes:function(){return console.log("yes"),console.log("idDisable :",this.isDisabled),this.isDisabled=!this.isDisabled},modifyProduct:function(){var e=this,t={name:this.name,ean:this.ean,qty:this.qtt};D.update(t).then((function(t){e.messages=t.data,console.log("server response update:",t.data)}))}}};n("d82f");ut.render=st,ut.__scopeId="data-v-6ad347b0";var dt=ut,lt={name:"product",components:{Product:dt}};lt.render=$e;var pt=lt,bt=[{path:"/",alias:"/products",name:"products",component:Z},{path:"/contact",name:"contact",component:he},{path:"/add",name:"add",component:Re},{path:"/product",name:"product",component:pt,props:!0}],gt=Object(V["a"])({history:Object(V["b"])(),routes:bt}),mt=gt;n("4989"),n("ab8b");Object(c["c"])(S).use(mt).mount("#app")},"71ae":function(e,t,n){},"7dd2":function(e,t,n){"use strict";n("40ea")},"8b86":function(e,t,n){e.exports=n.p+"img/linkedin.a779715b.png"},b3d4:function(e,t,n){"use strict";n("be85")},b6e1:function(e,t,n){"use strict";n("d013")},be85:function(e,t,n){},bedd:function(e,t,n){},c965:function(e,t,n){e.exports=n.p+"img/human.e50d2159.png"},d013:function(e,t,n){},d82f:function(e,t,n){"use strict";n("1c21")},db41:function(e,t,n){"use strict";n("bedd")}});
//# sourceMappingURL=app.072f59fc.js.map