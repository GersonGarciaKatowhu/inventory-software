import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
        <Sidebar />
      <main className="w-full bg-slate-100 min-h-screen">
      <Header />
      {children}
      </main>
    </div>
  )
}
