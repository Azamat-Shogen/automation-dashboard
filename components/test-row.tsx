"use client";

import { Button } from "@/components/ui/button";
import { Bug, CircleCheckBig } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TableRow, TableCell } from "./ui/table";
import { ITest } from "@/types/reportTypes";

export const TestsRow = ({ test }: { test: ITest }) => {
  // Determine header background based on test result
  const headerBg = test.failure_msg ? "bg-red-500" : "bg-green-500";
  const icon = test.failure_msg ? <Bug color="red" /> : <CircleCheckBig color="green" />;
  const iconLabel = test.failure_msg ? "Bug detected" : "Test passed";

  return (
    <TableRow>
      {/* Test Name in Table */}
      <TableCell>{test.name}</TableCell>

      {/* Dialog Trigger with Dynamic Icon */}
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="ghost">
              {icon}
            </Button>
          </DialogTrigger>

          {/* Dialog Content */}
          <DialogContent className="s">
            {/* Dialog Header with Dynamic Background */}
            <DialogHeader className={`${headerBg} p-4 rounded-t-md`}>
              <DialogTitle className="text-white">Test Details</DialogTitle>
            </DialogHeader>

            {/* Test Details */}
            <DialogDescription>
            </DialogDescription>
              <div className="flex items-center gap-2">
                {icon}
                <span className="font-medium">{iconLabel}</span>
              </div>

              <div className="mt-4">
                <strong>Test Name:</strong> 
                <p className="text-sm"> {test.name}</p>
               
              </div>
              <div>
                <strong>Time Taken:</strong> <span className="text-sm">{test.time} seconds</span> 
              </div> 

              {/* Display Failure Message if Present */}
              {test.failure_msg && (
                <div className="mt-4 p-3 bg-red-100 text-red-600 rounded-md text-sm max-w-full">
                  <strong>Error Message:</strong>
                  <p className="whitespace-normal break-words break-all overflow-hidden max-h-40 overflow-y-auto">
                    {test.failure_msg}
                  </p>
                </div>
              )}

            {/* Footer with Close Button */}
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};
