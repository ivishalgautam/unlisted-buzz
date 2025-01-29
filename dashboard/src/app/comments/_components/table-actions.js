"use client";
import { DataTableSearch } from "@/components/ui/table/data-table-search";
import { useTableFilters } from "./use-table-filters";
import { DataTableResetFilter } from "@/components/ui/table/data-table-reset-filter";
import { DataTableFilterBox } from "@/components/ui/table/data-table-filter-box";
import { DataTableSelectFilter } from "@/components/ui/table/data-table-select-filter";

export default function TableActions() {
  const {
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery,
    isReviewed,
    setIsReviewed,
  } = useTableFilters();

  return (
    <div className="my-3 flex flex-wrap items-center gap-4">
      <DataTableSearch
        searchKey="name"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPage={setPage}
      />
      <DataTableSelectFilter
        options={[
          { value: "1", label: "Reviewed" },
          { value: "0", label: "Not Reviewed" },
          { value: "0", label: "All" },
        ]}
        title={"Reviewed"}
        setFilterValue={setIsReviewed}
        filterValue={isReviewed}
      />
      <DataTableResetFilter
        isFilterActive={isAnyFilterActive}
        onReset={resetFilters}
      />
    </div>
  );
}
