import { type ThrownResponse, useLocation } from "@remix-run/react";
import Container from "./container";

export default function NotFound({ response }: { response: ThrownResponse }) {
    const { pathname } = useLocation()
    return (
        <Container>
            <h1>
                {response.status} - {response.statusText}
            </h1>
            <pre>
                <code>{JSON.stringify(pathname)}</code>
            </pre>
        </Container>
    )
}