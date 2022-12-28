export default function Main({ children }: { children: React.ReactNode }) {
   
    return (
        <main className="p-6 bg-white grow">
            {children}
        </main>
    );
}