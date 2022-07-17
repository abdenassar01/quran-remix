import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { GlobalStyle } from "./utils/Globals";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Quran",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {
          typeof document === "undefined" ? "__STYLES__" : null
        }
        <link rel="icon" href="https://i.imgur.com/8ps4plI.png" type="image/gif" sizes="20x20" />
      </head>
      <body>
      <GlobalStyle />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload /> 
      </body>
    </html>
  );
}
