import { searchParams } from "@/lib/searchparams";
import { useQueryState } from "nuqs";
import { useCallback, useMemo } from "react";

export function useUserTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    "q",
    searchParams.q
      .withOptions({ shallow: false, throttleMs: 1000 })
      .withDefault(""),
  );

  const [page, setPage] = useQueryState(
    "page",
    searchParams.page.withDefault(1),
  );
  const [roleFilter, setRoleFilter] = useQueryState(
    "role",
    searchParams.role.withDefault(""),
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setRoleFilter(null);

    setPage(1);
  }, [setSearchQuery, setRoleFilter, setPage]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!roleFilter;
  }, [searchQuery, roleFilter]);

  return {
    searchQuery,
    setSearchQuery,
    page,
    setPage,
    roleFilter,
    setRoleFilter,
    resetFilters,
    isAnyFilterActive,
  };
}
