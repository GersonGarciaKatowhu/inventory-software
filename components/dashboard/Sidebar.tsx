import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-56 min-h-screen bg-slate-800 text-slate-50">
       <ul className="flex flex-col">
        <Link href="#" className="flex space-x-2 items-center py-3 px-2  bg-slate-950">
          <ShoppingCart className="h-6 w-6" />
          <span className="font-semibold text-2xl">Inventory</span>
        </Link>
        <nav className="flex flex-col gap-8 px-3 py-6">
          <Link href="/dashboard/home/" className="flex space-x-2 items-center">
            <Home className="h-4 w-4" />
            <span className="text-xl font-semibold">Home</span>
          </Link>
          <button className="flex space-x-2 items-center">
            <BaggageClaim className="h-4 w-4" />
            <span className="text-xl font-semibold">Inventory</span>
          </button>
          <button className="flex space-x-2 items-center">
            <ShoppingBag className="h-4 w-4" />
            <span className="text-xl font-semibold">Sales</span>
          </button>
          <button className="flex space-x-2 items-center">
            <ShoppingBasket className="h-4 w-4" />
            <span className="text-xl font-semibold">Purchases</span>
          </button>
          <Link href="#" className="flex space-x-2 items-center">
            <Cable className="h-4 w-4" />
            <span className="text-xl font-semibold">Integrations</span>
          </Link>
          <Link href="#" className="flex space-x-2 items-center">
            <BarChart4 className="h-4 w-4" />
            <span className="text-xl font-semibold">Reports</span>
          </Link>
          <Link href="#" className="flex space-x-2 items-center">
            <Files className="h-4 w-4" />
            <span className="text-xl font-semibold">Documents</span>
          </Link>
        </nav>
       </ul>
       <ul className="flex flex-col justify-end">
          <li className="bg-slate-950 flex space-x-2 py-3 px-2 justify-center">
            <ChevronLeft className="h-6 w-6" />
          </li>
       </ul>
    </aside>
  )
}
