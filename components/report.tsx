"use client";

import { IReport } from "@/types/reportTypes"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Table, TableHeader, TableBody, TableHead, TableRow } from "./ui/table";
import { CardItem } from "./cards";
import { ChartComponent } from "./chart-component";
import { TestsRow } from "./test-row";
import { formatTime } from "./reports";



export const Report = ({ report }: { report: IReport }) => {
    console.log("report is: ", report)
    const duration = formatTime(report.total_time)
    const passed_percengage = getPassingPercentage(report.number_of_passed_tests, report.number_of_failed_tests)

    return (
        <div className="p-8">
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                 <CardItem title="Start time" value={report.timestamp} />
                 <CardItem title="End time" value={report.end_time} />
                 <CardItem title="Duration" value={duration} />
                 <CardItem title="Passed %" value={passed_percengage} />
                
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 w-full">

            <Card className="bg-slate-50 w-full">
            <CardHeader>
            <CardTitle>Tests</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Test Name</TableHead>
                        <TableHead>View</TableHead>

                    </TableRow>
                    </TableHeader>
                <TableBody>
                    {report.tests.map((test, i) => (
                        <TestsRow test={test} key={i} /> 
                    ))}
                </TableBody>
                </Table>
            </CardContent>
            
            </Card>

            <div className="w-full">
            <ChartComponent report={report} />
            </div>
            </div>
        </div>
    )
}


function getPassingPercentage(passedTests: number, failedTests: number) {
    const totalTests = passedTests + failedTests;
    
    // Calculate percentage only if there are tests
    if (totalTests === 0) return "0%";
    
    const passingPercentage = (passedTests / totalTests) * 100;
    
    // Return as a formatted string, rounded to the nearest whole number
    return `${Math.round(passingPercentage)}%`;
  };