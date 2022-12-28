import Footer from "./footer";
import Header from "./header";
import Main from "./main";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-full">
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    );
}