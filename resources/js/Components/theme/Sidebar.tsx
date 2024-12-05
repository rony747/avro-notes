import {ChevronDown, Edit3, FolderOpen, Hash, Home, Menu, PlusCircle, Settings, Star, Trash2} from "lucide-react";
import {Link} from "@inertiajs/react";

export default function Sidebar() {
    return (
        <>
            <aside className="w-72 border-r border-zinc-800 flex flex-col">
                {/* Header */}
                <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Menu className="h-5 w-5 text-zinc-400"/>
                        <h1 className="text-lg font-semibold">Super Notes</h1>
                    </Link>
                    <Link href="/notes/create" className="p-2 hover:bg-zinc-800 rounded-md">
                        <PlusCircle className="h-5 w-5 text-zinc-400"/>
                    </Link>
                </div>

                {/* Sidebar Content */}
                <div className="flex-1 overflow-auto p-4">
                    {/* Main Navigation */}
                    <nav className="space-y-1">
                        <Link href="/"
                            className="w-full text-left px-3 py-2 rounded-md bg-zinc-800/50 flex items-center gap-2 text-zinc-50 cursor-pointer">
                            <Home className="h-4 w-4"/>
                            All Notes
                        </Link>
                        <div
                            className="w-full text-left px-3 py-2 rounded-md hover:bg-zinc-800/50 flex items-center gap-2 text-zinc-400 hover:text-zinc-50 cursor-pointer">
                            <FolderOpen className="h-4 w-4"/>
                            Folders
                        </div>
                        <div
                            className="w-full text-left px-3 py-2 rounded-md hover:bg-zinc-800/50 flex items-center gap-2 text-zinc-400 hover:text-zinc-50 cursor-pointer">
                            <Star className="h-4 w-4"/>
                            Favorites
                        </div>
                        <div
                            className="w-full text-left px-3 py-2 rounded-md hover:bg-zinc-800/50 flex items-center gap-2 text-zinc-400 hover:text-zinc-50 cursor-pointer">
                            <Trash2 className="h-4 w-4"/>
                            Trash
                        </div>
                    </nav>

                    {/* Tags Section */}
                    <div className="mt-8">
                        <div className="flex items-center justify-between mb-2 px-3">
                            <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                                <Hash className="h-4 w-4"/>
                                TAGS
                                <ChevronDown className="h-3 w-3"/>
                            </div>
                            <div className="text-xs text-zinc-400 hover:text-zinc-300 cursor-pointer">
                                <Edit3 className="h-3 w-3"/>
                            </div>
                        </div>
                        <div className="space-y-1">
                            {['Work', 'Personal', 'Ideas', 'Projects', 'Archive'].map((tag) => (
                                <div
                                    key={tag}
                                    className="w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-50 flex items-center gap-2 cursor-pointer"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Footer */}
                <div className="h-14 border-t border-zinc-800 flex items-center px-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 cursor-pointer">
                        <Settings className="h-4 w-4"/>
                        Settings
                    </div>
                </div>
            </aside>

        </>
    )
}

