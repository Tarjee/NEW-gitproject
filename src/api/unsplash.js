import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID CIl2XW-3CMCsUKsdSZKZ7db9qW8PH_nt2_aLTKk6j3I",
  },
});
