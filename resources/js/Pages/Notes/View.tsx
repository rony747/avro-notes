'use client';

import NoteContent from "@/Components/theme/NoteContent";
import ToolBar from "@/Components/theme/ToolBar";
import Sidebar from "@/Components/theme/Sidebar";
import {useEffect, useState} from 'react';
import {usePage} from "@inertiajs/react";
import NoteList from "@/Components/theme/NoteList";
import PageLayout from "@/Layouts/PageLayout";

interface ViewProps {
    activeNote: any;
    notes: any[];
}

export default function ViewNote({ activeNote, notes }: ViewProps) {

    return (
        <PageLayout>
            {activeNote && <NoteContent note={activeNote} />}
        </PageLayout>

    );
}
