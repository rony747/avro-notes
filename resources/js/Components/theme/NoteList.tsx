import SearchInput from "@/Components/theme/SearchInput";
import { NoteListItem } from "@/Components/theme/NoteListItem";
import { usePage } from "@inertiajs/react";

interface Note {
    id: number;
    title: string;
    content: string;
    updated_at: string;
}

interface NoteListProps {
    notes: Note[];
    activeNote?: Note;
}

export default function NoteList({ notes, activeNote }: NoteListProps) {
    const currentNote = activeNote || notes[0];

    return (
        <div className="h-full overflow-y-auto 
            scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            hover:scrollbar-thumb-zinc-600
            w-80 border-r border-zinc-800 flex flex-col">
            {/* Search Header */}
            <SearchInput />

            {/* Notes List */}
            <div className="flex-1 overflow-y-auto">
                {notes.map((note) => (
                    <NoteListItem
                        key={note.id}
                        note={note}
                        isActive={currentNote?.id === note.id}
                    />
                ))}
            </div>
        </div>
    );
}