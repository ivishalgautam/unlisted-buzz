import config from "@/config";
import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import axios from "axios";

export async function fetchShares(params) {
  const { data } = await http().get(`${endpoints.shares.getAll}?${params}`);
  return data;
}

export async function fetchSharesNewArrivals(params) {
  const { data } = await http().get(
    `${endpoints.shares.getAll}/new-arrivals?${params}`
  );

  return data;
}

export async function fetchShare(slug) {
  const { data } = await axios.get(
    `${config.api_base}${endpoints.shares.getAll}/${slug}`
  );
  return data.data;
}

export async function fetchShareChartData(id, params) {
  const { data } = await axios.get(
    `${config.api_base}${endpoints.shares.getAll}/chart/${id}?${params}`
  );
  return data.data;
}
