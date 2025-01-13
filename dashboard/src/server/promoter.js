import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export async function createPromoter(data) {
  const resp = await http().post(`${endpoints.promoters.getAll}`, data);
  return resp.data;
}

export async function updatePromoter(id, data) {
  const resp = await http().put(`${endpoints.promoters.getAll}/${id}`, data);
  return resp.data;
}

export async function deletePromoter(id) {
  return await http().delete(`${endpoints.promoters.getAll}/${id}`);
}

export async function fetchPromoters(params) {
  const { data } = await http().get(`${endpoints.promoters.getAll}?${params}`);

  return data;
}

export async function fetchPromoter(id) {
  const { data } = await http().get(`${endpoints.promoters.getAll}/${id}`);
  return data;
}
