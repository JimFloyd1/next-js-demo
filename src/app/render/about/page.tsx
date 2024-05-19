// "use client"
import {cookies} from 'next/headers';
// import { useState } from "react";

export default function AboutPage() {
    const cookieStore = cookies ();
    const theme = cookieStore.get('theme');
        console.log('About server component');
        console.log(theme)
    return <h1>About Page... {new Date().toLocaleTimeString()}</h1>;
}

// We see the message in the terminal, so its clear this is a server component bringing together all the server components such as zero bundle size access to server side reasources, enhaced secuirty, better SEO
// Server componets cannot interact with browers apis, or handle user interacitivity - if we try to incorpoarte some State into our about page using Use state, Use state expects a client compent enviroment but the about page is a server componet. Server component can not use STate becasue ethere rendered on the server where the concept as it exisits in the browser. This confirmes every compnet in next js is a server componet unless specified otherwise.
// 'use client' allows use to cross to the client side and define client components, it signals to nextjs this componet dashboard page is intended for client side execution. The component gains then gains fill access to brower apis and ability to handle interactivity
