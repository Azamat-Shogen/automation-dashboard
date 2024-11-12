import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


type PaginationItemType = {
    totalPages: number;
    currentPage: number;
    handlePageChange: (pageNumber: number) => void
}

export const ReportsPagination = ({
    totalPages,
    currentPage,
    handlePageChange
}: PaginationItemType) => {


  const displayPages = Array.from(
    { length: Math.min(totalPages, 4) }, 
    (_, i) => i + 1
  );

    return (
        <Pagination>
            <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              />
            </PaginationItem>
            {/* Display the pages up to the lesser of 4 or totalPages */}
            {displayPages.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

             {/* Display ellipsis if totalPages is greater than 4 and currentPage is beyond the first few pages */}
            {totalPages > 4 && currentPage > 4 && (
              <>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                <PaginationLink
                    href="#"
                    isActive={currentPage === currentPage}
                    onClick={() => handlePageChange(currentPage)}
                  >
                    {currentPage}
                </PaginationLink>
               </PaginationItem>
              </>
            )}
            
            <PaginationItem>
              <PaginationNext
                
                href="#"
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
              />
            </PaginationItem>
            </PaginationContent>
        </Pagination>
    )

}
