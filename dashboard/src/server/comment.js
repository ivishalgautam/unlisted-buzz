import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export async function createComment(data) {
  const resp = await http().post(`${endpoints.comments.getAll}`, data);
  return resp.data;
}

export async function updateComment(id, data) {
  const resp = await http().put(`${endpoints.comments.getAll}/${id}`, data);
  return resp.data;
}

export async function deleteComment(id) {
  return await http().delete(`${endpoints.comments.getAll}/${id}`);
}

export async function fetchComments(params) {
  const { data } = await http().get(`${endpoints.comments.getAll}?${params}`);

  return data;
}

export async function fetchComment(id) {
  const { data } = await http().get(`${endpoints.comments.getOne}/${id}`);
  return data;
}
