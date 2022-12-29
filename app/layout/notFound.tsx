import { type ThrownResponse, useLocation, Link } from "@remix-run/react";
import { IconArrowBack } from "~/components/icon";

export default function NotFound({ response }: { response: ThrownResponse }) {
    const { pathname } = useLocation();
    return (
        <div className="py-6 max-w-2xl mx-auto rounded-sm grow animate-fadeInShake">
            <h1 className="text-error-600">{response.statusText}</h1>
            <p>We were unable to find the page <b>{pathname}</b>.</p>
            <p>
                You can go back to the previous page or try again later. If you think this is a bug, please report it on our <Link to="/">issue tracker</Link>.
                Create a new file named <code>{pathname.replace("/","")}.tsx</code> in the <code>app/routes</code> directory to add a new page here.
            </p>
            <button onClick={() => history.back()} className="button button-ghost"><IconArrowBack size={16} />Go back</button>
        </div>
    );
}