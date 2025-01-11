import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export async function createSector(data) {
  const resp = await http().post(`${endpoints.sectors.getAll}`, data);
  return resp.data;
}

export async function updateSector(id, data) {
  const resp = await http().put(`${endpoints.sectors.getAll}/${id}`, data);
  return resp.data;
}

export async function deleteSector(id) {
  return await http().delete(`${endpoints.sectors.getAll}/${id}`);
}

export async function fetchSectors(params) {
  const { data } = await http().get(`${endpoints.sectors.getAll}?${params}`);

  return data;
}

export async function fetchSector(id) {
  const { data } = await http().get(`${endpoints.sectors.getOne}/${id}`);
  return data;
}
