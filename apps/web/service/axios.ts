import axios from "axios";

export function getAxiosClient() {
  const api = axios.create({
    baseURL: "http://portal.local:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return api;
}
