import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export async function createShare(data) {
  const resp = await http().post(`${endpoints.shares.getAll}`, data);
  return resp.data;
}

export async function updatePrice(shareId, data) {
  const resp = await http().post(
    `${endpoints.shares.getAll}/${shareId}/update-price`,
    data,
  );
  return resp.data;
}

export async function updateShare(id, data) {
  const resp = await http().put(`${endpoints.shares.getAll}/${id}`, data);
  return resp.data;
}

export async function deleteShare(id) {
  return await http().delete(`${endpoints.shares.getAll}/${id}`);
}

export async function fetchShares(params) {
  const { data } = await http().get(`${endpoints.shares.getAll}?${params}`);

  return data;
}

export async function fetchShare(id) {
  const { data } = await http().get(`${endpoints.shares.getOne}/${id}`);
  return data;
}
