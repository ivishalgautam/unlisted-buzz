import config from "@/config";
import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import axios from "axios";

export async function fetchSectors(params) {
  const { data } = await http().get(`${endpoints.sectors.getAll}?${params}`);
  return data;
}

export async function fetchSectorsNewArrivals(params) {
  const { data } = await http().get(
    `${endpoints.sectors.getAll}/new-arrivals?${params}`
  );

  return data;
}
