export default function Layout({ children }) {
    return (
        <main className="min-h-screen bg-black text-white px-4 py-10 flex justify-center">
            <div className="w-full max-w-4xl space-y-20">{children}</div>
        </main>
    );
}
