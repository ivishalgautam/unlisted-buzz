import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import { useQuery } from "@tanstack/react-query";

const fetchSectors = async () => {
  const { data } = await http().get(endpoints.sectors.getAll);
  return (
    data?.sectors?.map(({ id: value, name: label }) => ({
      value,
      label: String(label).toLocaleUpperCase(),
    })) ?? []
  );
};

export default function useFetchSectors() {
  return useQuery({ queryKey: ["sectors"], queryFn: fetchSectors });
}
