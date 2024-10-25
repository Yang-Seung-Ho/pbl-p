import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/proposal");  // proposals 경로로 변경
  }

  get(id) {
    return http.get(`/proposal/${id}`);
  }

  create(data) {
    return http.post("/proposal/submit", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();