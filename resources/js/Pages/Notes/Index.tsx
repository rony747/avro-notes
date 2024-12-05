import { PageProps } from '@inertiajs/core';
import PageLayout from '@/Layouts/PageLayout';
import NoteContent from "@/Components/theme/NoteContent";

interface Note {
    id: number;
    title: string;
    content: string;
    updated_at: string;
}

interface IndexProps extends PageProps {
    latestNotes: Note[];
}

export default function Index({ latestNotes,notes }: IndexProps) {
    return (
        <PageLayout>
            {latestNotes && <NoteContent note={latestNotes} />}
        </PageLayout>
    );
}
