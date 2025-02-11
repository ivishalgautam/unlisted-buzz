import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export async function updateQuery(id, data) {
  const resp = await http().put(`${endpoints.queries.getAll}/${id}`, data);
  return resp.data;
}

export async function deleteQuery(id) {
  return await http().delete(`${endpoints.queries.getAll}/${id}`);
}

export async function fetchQueries(params) {
  const { data } = await http().get(`${endpoints.queries.getAll}?${params}`);

  return data;
}

export async function fetchQuery(id) {
  const { data } = await http().get(`${endpoints.queries.getAll}/${id}`);
  return data;
}
