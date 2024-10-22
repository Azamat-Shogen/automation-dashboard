"use server";


export async function getReports() {

    const URL = process.env.API_ENDPOINT_RESULTS as string;
  
    // const res = await fetch(`${url}?timestamp=${Date.now()}`);
    const res = await fetch(URL, {'cache': 'no-store'});
  
    if (!res.ok) {
      throw new Error('Failed to fetch reports');
    }
    return await res.json(); // Ensure this returns an array of reports
  }


  
export async function fetchReport(reportId: string) {

const URL = process.env.API_ENDPOINT_RESULTS as string;
const res = await fetch(`${URL}/${reportId}`, {'cache': 'no-store'});

if (!res.ok){
    throw new Error("Failed to fetch data");
}

return await res.json();

}
