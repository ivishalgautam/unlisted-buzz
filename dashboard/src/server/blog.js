import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export async function createBlog(data) {
  const resp = await http().post(`${endpoints.blogs.getAll}`, data);
  return resp.data;
}

export async function updateBlog(id, data) {
  const resp = await http().put(`${endpoints.blogs.getAll}/${id}`, data);
  return resp.data;
}

export async function deleteBlog(id) {
  return await http().delete(`${endpoints.blogs.getAll}/${id}`);
}

export async function fetchBlogs(params) {
  const { data } = await http().get(`${endpoints.blogs.getAll}?${params}`);

  return data;
}

export async function fetchBlog(id) {
  const { data } = await http().get(`${endpoints.blogs.getAll}/${id}`);
  return data;
}
