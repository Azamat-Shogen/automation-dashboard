import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function name(request: NextRequest, { params }: Params) {
    const { id } = params
    const URL = process.env.API_ENDPOINT_RESULTS as string;

    if (!id) {
        return NextResponse.json(
          { error: "Missing or invalid ID" },
          { status: 400 } // Bad Request for invalid or missing ID
        );
      }

    try {
        const res = await fetch(`${URL}/${id}`)

        if (!res.ok) {
            // Handle non-2xx responses from the external API
            return NextResponse.json(
              { error: `Failed to fetch data for ID: ${id}`, message: res.statusText },
              { status: res.status }
            );
          }

        const data = await res.json();
        return NextResponse.json({ data })

    } catch (error: unknown) {
        // Ensure error is typed properly
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

