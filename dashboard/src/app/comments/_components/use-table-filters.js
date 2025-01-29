import { searchParams } from "@/lib/searchparams";
import { useQueryState } from "nuqs";
import { useCallback, useMemo } from "react";

export function useTableFilters() {
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

  const [isReviewed, setIsReviewed] = useQueryState(
    "is_reviewed",
    searchParams.page.withDefault(""),
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setIsReviewed(null);

    setPage(1);
  }, [setSearchQuery, setPage, setIsReviewed]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || isReviewed;
  }, [searchQuery, isReviewed]);

  return {
    searchQuery,
    setSearchQuery,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive,
    isReviewed,
    setIsReviewed,
  };
}
