import { Reports } from "@/components/reports";


async function getReports() {

  const URL = process.env.API_ENDPOINT_RESULTS as string;

  // const res = await fetch(`${url}?timestamp=${Date.now()}`);
  const res = await fetch(URL, {'cache': 'no-store'});

  if (!res.ok) {
    throw new Error('Failed to fetch reports');
  }
  return await res.json(); // Ensure this returns an array of reports
}

export default async function Home() {

  const reports = await getReports();

 
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Reports reports={reports} />
        
      </div>
    );
  }
  