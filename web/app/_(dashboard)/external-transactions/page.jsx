import React, { Suspense } from "react";
import Listing from "./_component/listing";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { searchParams, serialize } from "@/lib/searchparams";
import TableActions from "./_component/table-actions";

export default function ExternalTransactions() {
  const key = serialize({ ...searchParams });

  return (
    <div>
      <TableActions />

      <Suspense
        key={key}
        fallback={<DataTableSkeleton columnCount={4} rowCount={10} />}
      >
        <Listing />
      </Suspense>
    </div>
  );
}
