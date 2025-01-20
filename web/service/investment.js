import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export async function fetchInvestments(params) {
  const { data } = await http().get(
    `${endpoints.investments.getAll}?${params}`
  );
  return data;
}

export async function fetchInvestmentPortfolio() {
  const { data } = await http().get(
    `${endpoints.investments.getAll}/portfolio`
  );
  return data;
}

export async function createInvestment(data) {
  return await http().post(`${endpoints.investments.getAll}`, data);
}

export async function deleteInvestment(id) {
  const { data } = await http().delete(`${endpoints.investments.getAll}/${id}`);
  return data;
}
