import { Navbar } from "@/components";

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center p-24">
                FernandoGutz Test Next14
                {children}
            </main>
        </>
    );
}