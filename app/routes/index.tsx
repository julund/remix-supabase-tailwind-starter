import { type MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Container from "~/layout/container";
import { appName } from "~/util/const";

export const meta: MetaFunction = () => ({ title: `Index - ${appName}` });

export default function Index() {
  return (
    <Container>
      <div className="flex flex-col gap-4 text-xl">
        <h1>Remix Supabase Tailwind Starter</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, magnam similique quam atque earum maxime blanditiis nam unde optio autem quas deserunt enim velit ab corrupti sed, expedita mollitia!
        </p>
        <div className="flex gap-4 text-base">
          <Link to="/" className="button button-primary">Lorem</Link>
          <Link to="/" className="button button-base">Ipsum</Link>
          <Link to="/" className="button button-ghost">Dolor</Link>
        </div>
      </div>
    </Container>
  );
}
