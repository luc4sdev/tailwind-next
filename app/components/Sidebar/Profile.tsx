import { LogOut } from "lucide-react";
import Image from "next/image";

export function Profile() {
    return (
        <div className="grid grid-cols-profile items-center gap-3">
            <Image src="https://github.com/luc4sdev.png" width={10} height={10} className="w-10 h-10 rounded-full" alt="User Image" />
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700 truncate">Lucas Pereira</span>
                <span className="text-sm text-zinc-500">lucas.pfranca01@gmail.com</span>
            </div>
            <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
                <LogOut className="w-5 h-5 text-zinc-500" />
            </button>
        </div>
    )
}