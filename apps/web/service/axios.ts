import axios from "axios";

export function getAxiosClient() {
  const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return api;
}
