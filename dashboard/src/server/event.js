import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export async function createEvent(data) {
  const resp = await http().post(`${endpoints.events.getAll}`, data);
  return resp.data;
}

export async function updateEvent(id, data) {
  const resp = await http().put(`${endpoints.events.getAll}/${id}`, data);
  return resp.data;
}

export async function deleteEvent(id) {
  return await http().delete(`${endpoints.events.getAll}/${id}`);
}

export async function fetchEvents(params) {
  const { data } = await http().get(`${endpoints.events.getAll}?${params}`);

  return data;
}

export async function fetchEvent(id) {
  const { data } = await http().get(`${endpoints.events.getAll}/${id}`);
  return data;
}
