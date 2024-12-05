<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
  public function index()
  {
    $notes       = Note ::with('user') -> orderBy('created_at', 'desc')-> get();
    $latestNotes = Note ::with('user') -> orderBy('created_at', 'desc') -> first();
    return inertia('Notes/Index', compact('notes', 'latestNotes'));
  }

  public function view(Request $request)
  {
    $notes      = Note ::with('user') -> orderBy('created_at', 'desc')-> get();
    $activeNote = Note ::with('user') -> findOrFail($request -> noteId);
    return inertia('Notes/View', compact('notes', 'activeNote'));
  }

  public function update(Request $request, $noteId)
  {
    $note = Note ::findOrFail($noteId);
    $note -> update(['title' => $request -> title, 'content' => $request -> content]);
    return redirect() -> back();
  }

  public function create()
  {
    return inertia('Notes/Create');
  }

  public function store(Request $request)
  {
    $request->validate([
      'title' => 'required',
    ]);

    $note = Note::create([
      'title' => $request->title,
      'content' => $request->content,
      'user_id' => auth()->user()->id ?? 1
    ]);

    return redirect("/notes/{$note->id}");
  }
}
