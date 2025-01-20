import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import { useQuery } from "@tanstack/react-query";

const fetchShares = async () => {
  const { data } = await http().get(endpoints.shares.getAll);
  return (
    data?.shares?.map(({ id: value, name: label }) => ({
      value,
      label: String(label).toLocaleUpperCase(),
    })) ?? []
  );
};

export default function useFetchShares() {
  return useQuery({ queryKey: ["shares"], queryFn: fetchShares });
}
