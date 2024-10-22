"use client";
import { IReport, ITest } from "@/types/reportTypes";
import { useState, useMemo } from "react";


export const usePaginationItems = <T extends IReport | ITest >({ items, itemsPerPage }: {
    items: T[]
    itemsPerPage: number
}) => {

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

   // Calculate the reports to show based on the current page
   const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  }, [currentPage, items]);

   // Handle page change
   const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  return { totalPages, currentPage, currentItems, handlePageChange }

}
