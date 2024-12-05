import {Link, Pin, Share2, Trash} from "lucide-react";

export default function ToolBar() {
    return (
        <>
            <div className="h-14 border-b border-zinc-800 px-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 px-2 py-1 rounded-md hover:bg-zinc-800 cursor-pointer">
                        <Pin className="h-4 w-4"/>
                        Pin
                    </div>
                    <div
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 px-2 py-1 rounded-md hover:bg-zinc-800 cursor-pointer">
                        <Link className="h-4 w-4"/>
                        Copy Link
                    </div>
                    <div
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 px-2 py-1 rounded-md hover:bg-zinc-800 cursor-pointer">
                        <Share2 className="h-4 w-4"/>
                        Share
                    </div>
                    <div
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 px-2 py-1 rounded-md hover:bg-zinc-800 cursor-pointer">
                        <Trash className="h-4 w-4"/>
                        Delete
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div
                        className="px-3 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-md flex items-center gap-2 cursor-pointer">
                        Publish
                    </div>
                </div>
            </div>
        </>
    )
}

