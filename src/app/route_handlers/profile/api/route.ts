import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers"


export async function GET (request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headerList = headers();

    // Set cookies for session management, like logins and shopping carts, personalization like user preferences and themes, and tracking behavior
    const theme = request.cookies.get("theme");
    // or
cookies().set("resultsPerPage", "20")

    console.log(requestHeaders.get("Authorization"))
    console.log(headerList.get("Authorization"));
// headers in route handlers

    console.log(theme);
    console.log(cookies().get("resultsPerPage"));

    return new Response("<h1>Profile API data<h1>",{
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        },
});
}
