import { Link } from "@inertiajs/react";

interface NoteListItemProps {
  note: any;
  isActive?: boolean;
}

export function NoteListItem({ note, isActive = false }: NoteListItemProps) {
  return (
    <div 
      className={`group border-b border-zinc-800 transition-colors ${
        isActive ? 'bg-zinc-800' : 'hover:bg-zinc-900/50'
      }`}
    >
      <div className="flex items-start justify-between p-4">
        <Link 
          href={`/notes/${note.id}`}
          className="flex-1 cursor-pointer"
        >
          <h5 className={` mb-1 font-bold ${
            isActive ? 'text-zinc-50' : 'group-hover:text-zinc-50'
          }`}>
            {note.title}
          </h5>
       <div className="font-normal text-gray-400">   
        {note.content?.substring(0,100).replace(/<[^>]*>?/gm, '')}
        </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
            <span>{new Date(note.updated_at).toLocaleDateString()}</span>
            <span>•</span>
            <span className="px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
              {note.tag || 'No tag'}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
