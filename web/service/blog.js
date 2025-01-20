import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export async function fetchBlogs(params) {
  const { data } = await http().get(`${endpoints.blogs.getAll}?${params}`);

  return data;
}
