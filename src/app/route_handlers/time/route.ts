// how to stop caching in route handlers, this is how you opt out of caching
export const dynamic = "force-dynamic";

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString(),
    });
}
