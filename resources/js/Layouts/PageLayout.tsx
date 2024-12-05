import Sidebar from "@/Components/theme/Sidebar";
import NoteList from "@/Components/theme/NoteList";
import ToolBar from "@/Components/theme/ToolBar";
import { usePage } from "@inertiajs/react";
import { PageProps } from "@inertiajs/core";

interface Note {
    id: number;
    title: string;
    content: string;
    updated_at: string;
}

interface PageLayoutProps {
    children: React.ReactNode;
}

interface CustomPageProps extends PageProps {
    notes: Note[];
    activeNote?: Note;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    const { notes = [], activeNote } = usePage<CustomPageProps>().props;

    return (
        <div className="flex h-screen bg-zinc-950 text-zinc-50">
            <Sidebar />
            <NoteList notes={notes} activeNote={activeNote} />
            <main className="flex-1 flex flex-col">
                <ToolBar />
                <div className="flex-1 overflow-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default PageLayout;