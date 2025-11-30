import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

if (!baseURL) {
  throw new Error(
    "Missing NEXT_PUBLIC_API_URL environment variable. Please set it in your environment."
  );
}

export const axiosClient = axios.create({
  baseURL,
});
