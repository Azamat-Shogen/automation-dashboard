"use client"

import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { IReport } from "@/types/reportTypes"

export const description = "A pie chart with no separator"


const getChartData = (report: IReport) => {
  return [
    { name: "Passed", value: report.number_of_passed_tests, fill: "green" },
    { name: "Failed", value: report.number_of_failed_tests, fill: "red" },
    { name: "Skipped", value: report.skipped, fill: "yellow" }
  ].filter((entry) => entry.value > 0);  // Remove categories with 0 tests

}

export function ChartComponent({ report }: { report: IReport}) {
  
  const chartData = getChartData(report);
  const totalTests = report.tests.length;

  const chartConfig = {
    passed: {
      label: "Passed",
      color: "green",
    },
    failed: {
      label: "Failed",
      color: "red",
    },
    skipped: {
      label: "Skipped",
      color: "yellow",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Test Results Overview</CardTitle>
        <CardDescription>{`Total Tests: ${totalTests}`}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
        config={chartConfig} 
        className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              stroke="0"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total test results
        </div>
      </CardFooter>
    </Card>
  )
}
