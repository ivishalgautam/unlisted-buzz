import config from "@/config";
import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import axios from "axios";

export async function fetchBlogs(params) {
  const { data } = await http().get(`${endpoints.blogs.getAll}?${params}`);

  return data;
}

export async function fetchBlogBySlug(slug) {
  const { data } = await axios.get(
    `${config.api_base}${endpoints.blogs.getAll}/${slug}`
  );

  return data;
}

export const getRecentBlogs = async (limit) => {
  return [];
  const { data } = await axios.get(
    `${config.api_base}${endpoints.blogs.getAll}/getRecentBlogs?limit=${limit}`
  );
  return data;
};
