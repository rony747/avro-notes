import { Head } from '@inertiajs/react';
import { PageProps } from '@inertiajs/core';
import { NoteListItem } from '@/Components/theme/NoteListItem';
import NoteContent from "@/Components/theme/NoteContent";
import ToolBar from "@/Components/theme/ToolBar";
import SearchInput from "@/Components/theme/SearchInput";
import Sidebar from "@/Components/theme/Sidebar";
import {useEffect, useState} from 'react';

interface Note {
    id: number;
    title: string;
    content: string;
    updated_at: string;
}

interface WelcomeProps extends PageProps {
    allNote: Note[];
}

export default function Welcome({ allNote }: WelcomeProps) {
    const [notes, setNotes] = useState<Note[]>([]);
    const [currentNote, setCurrentNote] = useState<Note | undefined>();

    const handleNoteSelect = (note: Note) => {
        setCurrentNote(note);
    };

    const handleMoreOptions = (note: Note) => {
        console.log('More options:', note.id);
    };

    useEffect(() => {
        setNotes(allNote);
    }, [allNote]);

    return (<div className="flex h-screen bg-zinc-950 text-zinc-50">
            {/* Sidebar */}
            <Sidebar />
            {/* Notes List */}
            <div className="w-80 border-r border-zinc-800 flex flex-col">
                {/* Search Header */}
                <SearchInput />

                {/* Notes List */}
                <div className="flex-1 overflow-auto">
                    {notes.map((note) => (
                        <NoteListItem
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            content={note.content?.substring(0, 100) || ''}
                            tag={''}
                            date={note.updated_at}
                            onSelect={() => handleNoteSelect(note)}
                            onMoreOptions={() => handleMoreOptions(note)}
                        />
                    ))}
                </div>
            </div>

            {/* Note Detail */}
            <main className="flex-1 flex flex-col">
                {/* Toolbar */}
                <ToolBar />

                {/* Note Content */}
                <div className="flex-1 overflow-auto p-8">
                    {currentNote && <NoteContent note={currentNote} />}
                </div>
            </main>
        </div>
    );
}
