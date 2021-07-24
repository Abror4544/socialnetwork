import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "0c1bf043-d485-4793-94df-f091be2d6891",
  },
});

export const API = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  getUserId(userId = 18052) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  auth() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },

  logout() {
    return instance.delete(`auth/login`);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/data",
      },
    });
  },

  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};
