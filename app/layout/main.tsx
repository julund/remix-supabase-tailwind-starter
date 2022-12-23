export default function Main({ children }: { children: React.ReactNode }) {
   
    return (
        <main className="p-6 bg-base-50 rounded-sm grow">
            {children}
        </main>
    )
}