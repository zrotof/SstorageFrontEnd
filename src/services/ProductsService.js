import http from "../http-common";

class ProductsService {
  getAll() {
    return http.get("/");
  }

  create(data) {
    

    console.log("Inside the service 1: ",data.image);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("qty", data.qty);
    formData.append("ean", data.ean);

    for(let i =0; i< data.image.length; i++){
      let image = data.image[i];
      formData.append('images',image);
    }
    //console.log("Inside the service 2: ",formData);
    return http.post("/add", formData);
  }

  findByNameEan(name,ean) {

    return http.get(`/product/${name}&${ean}`);

  }


  update(data) {

    console.log("Inside the service: ",data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("ean", data.ean);
    formData.append("qty", data.qty);

    return http.put("/modify", formData);
  }

/*  

  get(id) {
    return http.get(`/tutorials/${id}`);
  }



  

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }
*/
}

export default new ProductsService();