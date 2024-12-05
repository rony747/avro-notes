import { useEffect, useState, useCallback } from "react";
import TextArea from "@/Components/TextArea";
import { router } from "@inertiajs/react";
import { debounce } from "lodash";

interface Note {
    id: number;
    title: string;
    content: string;
}

interface NoteContentProps {
    note: Note;
}

export default function NoteContent({ note }: NoteContentProps) {
    const [noteTitle, setNoteTitle] = useState(note.title);
    const [noteContent, setNoteContent] = useState(note.content);

    useEffect(() => {
        setNoteTitle(note.title);
        setNoteContent(note.content);
    }, [note.title, note.content]);

    // Debounced update function to prevent too many requests
    const debouncedUpdate = useCallback(
        debounce((title: string, content: string) => {
            router.put(`/notes/${note.id}/update`, {
                title,
                content,
            }, {
                preserveState: true,
                preserveScroll: true,
            });
        }, 500),
        [note.id]
    );

    const handleTitleChange = (title: string) => {
        setNoteTitle(title);
        debouncedUpdate(title, noteContent);
    };

    const handleContentChange = (content: string) => {
        setNoteContent(content);
        debouncedUpdate(noteTitle, content);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Note Title"
                className="w-full border-0 bg-transparent text-3xl font-bold mb-4 focus:outline-none placeholder:text-zinc-600"
                value={noteTitle}
                onChange={(e) => handleTitleChange(e.target.value)}
            />
            <div className="">
                <TextArea 
                    content={noteContent} 
                    onChange={handleContentChange}
                />
            </div>
        </>
    );
}
