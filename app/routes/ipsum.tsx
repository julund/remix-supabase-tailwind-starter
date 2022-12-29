import { type MetaFunction } from "@remix-run/node";
import Container from "~/layout/container";
import { appName } from "~/util/const";

export const meta: MetaFunction = () => ({ title: `Ipsum - ${appName}` });

export default function Ipsum() {
  return (
    <Container>
      <h1>Ipsum</h1>
      <p>
        Ipsum atque sit harum exercitationem ullam? Excepturi blanditiis accusantium quasi dolor eveniet eius nobis quis, nemo commodi delectus? Maxime similique ea a!
      </p>
    </Container>
  );
}
