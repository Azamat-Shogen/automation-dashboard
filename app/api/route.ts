import { NextResponse } from "next/server";


export async function GET() {
   const URL = process.env.API_ENDPOINT_RESULTS as string;
   
    try {
        const res = await fetch(URL, {'cache': 'no-store'});
        if (!res.ok) {
            // Handle non-2xx responses from the external API
            return NextResponse.json(
              { error: `Failed to fetch reports data: `, message: res.statusText },
              { status: res.status }
            );
          }
        
        const data = await res.json();
        return NextResponse.json({ data })

    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            {
                error: "Internal server error",
                message: err.message || "Unkown error"
            },
            {status: 500}
        )
    }
    
}