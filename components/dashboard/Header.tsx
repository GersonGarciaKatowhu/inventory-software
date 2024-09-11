import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users2 } from "lucide-react";
import SearchInput from "../ui/SearchInput";
import TooltipAssembled from "../ui/tooltipAssembled";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200 shadow">
      <div className="flex gap-3">
        <button>
          <History className="h-6 w-6" />
        </button>
        <SearchInput />
      </div>
      <div className="flex gap-3">
        <TooltipAssembled tooltip="Quick create" >
          <button>
            <Plus className="h-6 w-6" />
          </button>
        </TooltipAssembled>
        <div className="pr-2 border-r border-gray-300"></div>
        <nav className="flex border-r border-gray-300 space-x-2">
          <TooltipAssembled tooltip="Users" >
            <button className="p-1 rounded-lg hover:bg-slate-200">
              <Users2 className="text-slate-900 h-4 w-4" />
            </button>
          </TooltipAssembled>
          <TooltipAssembled tooltip="Notifications" >
            <button className="p-1 rounded-lg hover:bg-slate-200">
              <Bell className="text-slate-900 h-4 w-4" />
            </button>
          </TooltipAssembled>
          <TooltipAssembled tooltip="Settings" >
            <button className="p-1 rounded-lg hover:bg-slate-200">
              <Settings className="text-slate-900 h-4 w-4" />
            </button>
          </TooltipAssembled>
        </nav>
        <nav className="flex gap-3">
          <button className="flex items-center">
            <span>Garat</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          <Image className="rounded-full border border-slate-800" src="/user.jfif" width={32} height={32} alt="User image" />
          <LayoutGrid className="h-6 w-6 text-slate-900 self-center" />
        </nav>
      </div>
    </nav>
  );
}
