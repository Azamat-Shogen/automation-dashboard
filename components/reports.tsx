"use client";
import { IReport } from "@/types/reportTypes";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { EyeIcon } from "lucide-react";
import { ReportsPagination } from "./reports-pagination";
import { usePaginationItems } from "@/hooks/use-pagination-items";
import { getPassingPercentage } from "@/lib/utils";


export const formatTime = (timeString: string) => {
  const [hours, minutes, seconds] = timeString.split("-");

  const fomrattedTime = `${hours}h ${minutes}m ${seconds}s`;
  return fomrattedTime;
};

export const Reports = ({ reports }: { reports: IReport[] }) => {
  
  const { totalPages, currentPage, currentItems, handlePageChange } = 
  usePaginationItems({items: reports, itemsPerPage: 8})
  

  return (
    <Card className="md:m-8">
      <CardHeader>
        <CardTitle>Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Test suite name</TableHead>
              <TableHead>Total tests</TableHead>
              <TableHead className="hidden md:table-cell">Passed</TableHead>
              <TableHead className="hidden md:table-cell"> Failed</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Duration</TableHead>
              <TableHead>View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">
                  {report.test_suite_name + "-" + report.id}
                </TableCell>
                <TableCell>{report.tests.length}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <p className="text-green-600 font-bold">
                    {report.number_of_passed_tests}
                  </p>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <p className="text-red-600 font-bold">
                    {report.number_of_failed_tests}
                  </p>
                </TableCell>

                <TableCell>
                  <TestBadge report={report}/>
                  
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {report.total_time}
                </TableCell>

                <TableCell className="font-medium">
                  <Link href={`/${report.id}`}>
                    <EyeIcon className="text-blue-500 transition-transform duration-300 ease-in-out transform hover:text-blue-700 hover:scale-110" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <ReportsPagination 
            totalPages={totalPages} 
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            />
      </CardFooter>
    </Card>
  );
};


function TestBadge({report}: {report:IReport}){
  const passed_percentage = getPassingPercentage(
    report.number_of_passed_tests,
    report.number_of_failed_tests
  );

   // Cast string to integer "+", or Number(val)
  const percentageNumber = +passed_percentage.split("%")[0]
  const variantText = percentageNumber === 100 ? "success" :
  (percentageNumber < 95 ? "destructive" : "warning")

  return <Badge variant={variantText}>{report.result_status}</Badge>
}