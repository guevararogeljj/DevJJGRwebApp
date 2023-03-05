import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/product/getall");
  }

  get(id) {
    return http.get(`/product/GetbyId?Id=${id}`);
  }

  create(data) {
    return http.post("/product/SaveProduct", data);
  }

  update(data) {
    return http.put(`/product/Update`, data);
  }

  delete(id) {
    return http.delete(`/product/Delete/${id}`);
  }

  findById(Id) {
    return http.get(`/product/GetbyId?Id=${Id}`);
  }
}

export default new TutorialDataService();
