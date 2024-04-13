import { Logo } from "./Logo";
import { BarChart, CheckSquare, Flag, Home, Search, SquareStack, Users } from 'lucide-react'
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { InputControl, InputPrefix, InputRoot } from "../Form/Input";
export function Sidebar() {
    return (
        <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
            <Logo />

            <InputRoot>
                <InputPrefix>
                    <Search className="w-5 h-5 text-zinc-500" />
                </InputPrefix>
                <InputControl placeholder="Search" />
            </InputRoot>

            <nav className="space-y-0.5">
                <NavItem title="Home" icon={Home} />
                <NavItem title="Dashboard" icon={BarChart} />
                <NavItem title="Projects" icon={SquareStack} />
                <NavItem title="Tasks" icon={CheckSquare} />
                <NavItem title="Reporting" icon={Flag} />
                <NavItem title="Users" icon={Users} />
            </nav>

            <UsedSpaceWidget />

            <div className="h-px bg-zinc-200" />

            <Profile />
        </aside>
    )
}