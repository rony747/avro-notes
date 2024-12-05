import {Search} from "lucide-react";

export default function SearchInput() {
    return (
        <>
            <div className="h-14 border-b border-zinc-800 p-4">
                <div className="relative">
                    <Search className="absolute left-2 top-1.5 h-4 w-4 text-zinc-400"/>
                    <input
                        type="text"
                        placeholder="Search all notes"
                        className="w-full bg-zinc-900 pl-8 pr-4 py-1.5 rounded-md text-sm border border-zinc-800 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                    />
                </div>
            </div>
        </>
    )
}

