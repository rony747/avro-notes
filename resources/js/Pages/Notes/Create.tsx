import PageLayout from "@/Layouts/PageLayout";
import TextArea from "@/Components/TextArea";
import { useCallback, useState } from "react";
import { router } from "@inertiajs/react";
import { debounce } from "lodash";

const CreateNote = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    const debouncedSave = useCallback(
        debounce((title: string, content: string) => {
            if (!title.trim()) return;
            router.post('/notes', {
                title,
                content,
            });
        }, 1000),
        []
    );

    const handleTitleChange = (title: string) => {
        setNoteTitle(title);
        debouncedSave(title, noteContent);
    };

    const handleContentChange = (content: string) => {
        setNoteContent(content);
        debouncedSave(noteTitle, content);
    };

    return (
        <PageLayout>
            <div>
                <input
                    type="text"
                    placeholder="Note Title"
                    className="w-full border-0 bg-transparent text-3xl font-bold mb-4 focus:outline-none placeholder:text-zinc-600"
                    value={noteTitle}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    autoFocus
                />
                <div className="">
                    <TextArea
                        content={noteContent}
                        onChange={handleContentChange}
                    />
                </div>
            </div>
        </PageLayout>
    );
};

export default CreateNote;