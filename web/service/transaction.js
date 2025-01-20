import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export async function fetchTransactions(params) {
  const { data } = await http().get(
    `${endpoints.transactions.getAll}?${params}`
  );
  return data;
}

export async function fetchExternalTransactions(params) {
  const { data } = await http().get(
    `${endpoints.transactions.getAll}?share_type=external&${params}`
  );
  return data;
}

export async function fetchCurrentTransactions(params) {
  const { data } = await http().get(
    `${endpoints.transactions.getAll}?share_type=current&${params}`
  );
  return data;
}

export async function createTransaction(data) {
  return await http().post(`${endpoints.transactions.getAll}`, data);
}

export async function deleteTransaction(id) {
  const { data } = await http().delete(
    `${endpoints.transactions.getAll}/${id}`
  );
  return data;
}
