import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useCatch } from "@remix-run/react";
import Layout from "./layout";
import NotFound from "./layout/notFound";
import style from "./root.css";
import { appName } from "./util/const";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: style },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  description: "Remix, Supabase, Tailwind Starter Project",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html lang="en">
      <head>
        <title>{`Not Found - ${appName}`}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <NotFound response={caught}/>
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}