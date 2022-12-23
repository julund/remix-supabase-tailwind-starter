import { type ThrownResponse, useLocation } from "@remix-run/react";
import { IconArrowBack } from "~/components/icon";
import Container from "./container";

export default function NotFound({ response }: { response: ThrownResponse }) {
    const { pathname } = useLocation()
    return (
        <Container>
            <h1 className="text-error-500">{response.status} - {response.statusText}</h1>
            <p className="py-2 text-base-700">We were unable to find the page <b>{pathname}</b>.</p>
            <p className="py-2">Officia corrupti modi earum facere reiciendis ut. Neque modi omnis dignissimos, deleniti quas deserunt, similique eius eos in odit fuga libero atque.</p>
            <button onClick={() => history.back()} className="flex gap-2 items-center px-4 py-2 bg-base-200 hover:bg-base-300 text-base-600 rounded-sm"><IconArrowBack size={16} />Go back</button>
        </Container>
    )
}