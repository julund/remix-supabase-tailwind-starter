import { type MetaFunction } from "@remix-run/node";
import Container from "~/layout/container";
import { appName } from "~/util/const";

export const meta: MetaFunction = () => ({ title: `Lorem - ${appName}` });

export default function Lorem() {
  return (
    <Container>
      <h1>Lorem</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, voluptas. Molestias est accusamus deserunt totam quasi hic fugit, blanditiis nesciunt, incidunt consequatur officiis. Beatae, dignissimos. Esse reiciendis sint laborum repellendus.
      </p>
      <h2>Dignissimos Magnam</h2>
      <p>
        Dignissimos enim magnam consequuntur velit recusandae sint? Nemo expedita autem tempora, unde quisquam pariatur repellendus quaerat debitis dolores ipsa similique deleniti laudantium.
      </p>
      <h2>Explicabo Omnis Perspiciatis</h2>
      <p>
        Sequi, ab perspiciatis facilis facere consequatur laudantium. Deserunt voluptas, omnis eum sed perferendis illum alias beatae, quasi hic, explicabo fugit sapiente aut.
      </p>
      <h2>Ex Nihil Nesciunt</h2>
      <p>
        Eos, mollitia excepturi omnis consequatur ex nihil nesciunt dolorem dolorum ipsa, quod ea tempora asperiores praesentium ad? Accusantium iste quae laudantium repudiandae?
      </p>
    </Container>
  );
}
