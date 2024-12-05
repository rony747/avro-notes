import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import { useState } from 'react';
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Strikethrough,
    Heading1,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    Code,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Link as LinkIcon,
} from 'lucide-react';

interface MenuButtonProps {
    onClick: () => void;
    isActive?: boolean;
    children: React.ReactNode;
}

const MenuButton = ({ onClick, isActive, children }: MenuButtonProps) => (
    <button
        onClick={onClick}
        className={`p-2 rounded hover:bg-zinc-700/50 ${
            isActive ? 'bg-zinc-700/50 text-zinc-50' : 'text-zinc-400'
        }`}
    >
        {children}
    </button>
);

interface TextAreaProps {
    content?: string;
    onChange?: (content: string) => void;
    editable?: boolean;
}

export default function TextArea({ content = '', onChange, editable = true }: TextAreaProps) {
    const [linkUrl, setLinkUrl] = useState('');
    const [showLinkInput, setShowLinkInput] = useState(false);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Underline,
            Link.configure({
                openOnClick: true,
                HTMLAttributes: {
                    class: 'text-blue-500 hover:text-blue-600 underline',
                },
            }),
        ],
        content,
        editable,
        onUpdate: ({ editor }) => {
            onChange?.(editor.getHTML());
        },
    });

    if (!editor) {
        return null;
    }

    const addLink = () => {
        if (linkUrl) {
            editor.chain().focus().setLink({ href: linkUrl }).run();
            setLinkUrl('');
            setShowLinkInput(false);
        }
    };

    return (
        <div className="w-full">
            {editable && (
                <div className="p-2 flex flex-wrap gap-1 bg-zinc-900">
                    <MenuButton
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        isActive={editor.isActive('bold')}
                    >
                        <Bold size={18} />
                    </MenuButton>
                    <MenuButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        isActive={editor.isActive('italic')}
                    >
                        <Italic size={18} />
                    </MenuButton>
                    <MenuButton
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        isActive={editor.isActive('underline')}
                    >
                        <UnderlineIcon size={18} />
                    </MenuButton>
                    <MenuButton
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        isActive={editor.isActive('strike')}
                    >
                        <Strikethrough size={18} />
                    </MenuButton>
                    <div className="w-px h-6 bg-zinc-700 mx-1" />
                    <MenuButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        isActive={editor.isActive('heading', { level: 1 })}
                    >
                        <Heading1 size={18} />
                    </MenuButton>
                    <MenuButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        isActive={editor.isActive('heading', { level: 2 })}
                    >
                        <Heading2 size={18} />
                    </MenuButton>
                    <MenuButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        isActive={editor.isActive('heading', { level: 3 })}
                    >
                        <Heading3 size={18} />
                    </MenuButton>
                    <div className="w-px h-6 bg-zinc-700 mx-1" />
                    <MenuButton
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        isActive={editor.isActive('bulletList')}
                    >
                        <List size={18} />
                    </MenuButton>
                    <MenuButton
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        isActive={editor.isActive('orderedList')}
                    >
                        <ListOrdered size={18} />
                    </MenuButton>
                    <MenuButton
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        isActive={editor.isActive('codeBlock')}
                    >
                        <Code size={18} />
                    </MenuButton>
                    <div className="w-px h-6 bg-zinc-700 mx-1" />
                    <MenuButton
                        onClick={() => editor.chain().focus().setTextAlign('left').run()}
                        isActive={editor.isActive({ textAlign: 'left' })}
                    >
                        <AlignLeft size={18} />
                    </MenuButton>
                    <MenuButton
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        isActive={editor.isActive({ textAlign: 'center' })}
                    >
                        <AlignCenter size={18} />
                    </MenuButton>
                    <MenuButton
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        isActive={editor.isActive({ textAlign: 'right' })}
                    >
                        <AlignRight size={18} />
                    </MenuButton>
                    <div className="w-px h-6 bg-zinc-700 mx-1" />
                    <MenuButton
                        onClick={() => setShowLinkInput(!showLinkInput)}
                        isActive={editor.isActive('link')}
                    >
                        <LinkIcon size={18} />
                    </MenuButton>
                    {showLinkInput && (
                        <div className="flex items-center gap-2">
                            <input
                                type="url"
                                value={linkUrl}
                                onChange={(e) => setLinkUrl(e.target.value)}
                                placeholder="Enter URL"
                                className="bg-zinc-800 text-zinc-100 px-2 py-1 rounded"
                            />
                            <button
                                onClick={addLink}
                                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                            >
                                Add
                            </button>
                        </div>
                    )}
                </div>
            )}
            <EditorContent 
                editor={editor} 
                className="prose prose-invert prose-zinc max-w-none p-4 min-h-[200px] focus:outline-none focus:ring-0
                    prose-headings:font-semibold
                    prose-p:text-zinc-100
                    prose-a:text-blue-500 prose-a:no-underline hover:prose-a:text-blue-600
                    prose-code:bg-zinc-800 prose-code:text-zinc-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-zinc-900 prose-pre:text-zinc-50
                    prose-strong:text-zinc-50
                    prose-blockquote:border-l-zinc-700 prose-blockquote:text-zinc-400
                    prose-ul:text-zinc-100
                    prose-ol:text-zinc-100
                    prose-li:marker:text-zinc-500
                    [&_*]:focus:outline-none [&_*]:focus:ring-0
                    [&_.ProseMirror]:focus:outline-none [&_.ProseMirror]:focus:ring-0 [&_.ProseMirror]:focus:border-0
                    [&_.ProseMirror]:outline-none [&_.ProseMirror]:ring-0 [&_.ProseMirror]:border-0"
            />
            {editor && editor.isActive('heading', { level: 3 }) && (
                <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <div className="flex bg-zinc-800 rounded-lg shadow-lg">
                        <MenuButton
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            isActive={editor.isActive('bold')}
                        >
                            <Bold size={18} />
                        </MenuButton>
                        <MenuButton
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            isActive={editor.isActive('italic')}
                        >
                            <Italic size={18} />
                        </MenuButton>
                        <MenuButton
                            onClick={() => editor.chain().focus().toggleUnderline().run()}
                            isActive={editor.isActive('underline')}
                        >
                            <UnderlineIcon size={18} />
                        </MenuButton>
                        <MenuButton
                            onClick={() => editor.chain().focus().toggleLink({ href: linkUrl } ).run()}
                            isActive={editor.isActive('link')}
                        >
                            <LinkIcon size={18} />
                        </MenuButton>
                    </div>
                </BubbleMenu>
            )}
        </div>
    );
}