import { type ThrownResponse, useLocation } from "@remix-run/react";
import { IconArrowBack } from "~/components/icon";

export default function NotFound({ response }: { response: ThrownResponse }) {
    const { pathname } = useLocation();
    return (
        <div className="p-6  bg-error-50 text-error-800 max-w-2xl mx-auto rounded-sm grow animate-fadeInShake">
            <h1 className="text-error-600">{response.statusText}</h1>
            <p className="text-error-700">We were unable to find the page <b>{pathname}</b>.</p>
            { response.data && <pre>{response.data}</pre>}
            <p>Officia corrupti modi earum facere reiciendis ut. Neque modi omnis dignissimos, deleniti quas deserunt, similique eius eos in odit fuga libero atque.</p>
            <button onClick={() => history.back()} className="button button-error"><IconArrowBack size={16} />Go back</button>
        </div>
    );
}