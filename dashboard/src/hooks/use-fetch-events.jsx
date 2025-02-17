import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const fetchEvents = async () => {
  const { data } = await http().get(endpoints.events.getAll);
  return (
    data?.events?.map(({ id: value, name: label, date }) => ({
      value,
      label: `${String(label).toLocaleUpperCase()} (${moment(date).format("DD/MM/YYYY")})`,
    })) ?? []
  );
};

export default function useFetchEvents() {
  return useQuery({ queryKey: ["events"], queryFn: fetchEvents });
}
