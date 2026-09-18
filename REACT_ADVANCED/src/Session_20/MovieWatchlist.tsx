import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

interface Movie {
  id: string;
  title: string;
  genre: string;
  watched: boolean;
}

export default function MovieWatchlist() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const snapshot = await getDocs(collection(db, "watchlist_movies"));
      setMovies(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Movie)));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title.trim() || !genre.trim()) return;

    try {
      if (editingId) {
        await updateDoc(doc(db, "watchlist_movies", editingId), { title, genre });
        setEditingId(null);
      } else {
        await addDoc(collection(db, "watchlist_movies"), { title, genre, watched: false });
      }
      setTitle("");
      setGenre("");
      fetchMovies();
    } catch (error) {
      console.error("Error saving movie:", error);
    }
  };

  const handleEdit = (m: Movie) => {
    setTitle(m.title);
    setGenre(m.genre);
    setEditingId(m.id);
  };

  const handleToggleWatched = async (id: string, watched: boolean) => {
    try {
      await updateDoc(doc(db, "watchlist_movies", id), { watched: !watched });
      setMovies((prev) => prev.map((m) => (m.id === id ? { ...m, watched: !watched } : m)));
    } catch (error) {
      console.error("Error toggling watched:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "watchlist_movies", id));
      setMovies((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 space-y-4">
        <h2 className="font-bold text-slate-800 text-base">{editingId ? "Edit Movie" : "Add New Movie"}</h2>
        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
          <input
            type="text"
            placeholder="Movie Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-slate-300 p-2 rounded flex-1 text-sm outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Genre (e.g. Action)"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border border-slate-300 p-2 rounded w-full sm:w-36 text-sm outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition">
            {editingId ? "Update Movie" : "Add Movie"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => { setEditingId(null); setTitle(""); setGenre(""); }}
              className="bg-slate-200 text-slate-700 px-4 py-2 rounded text-sm hover:bg-slate-300 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="space-y-3">
        {movies.length === 0 ? (
          <p className="text-center text-slate-400 text-sm py-6">No movies in your watchlist yet. Add one above!</p>
        ) : (
          movies.map((m) => (
            <div
              key={m.id}
              className={`flex items-center justify-between p-4 rounded-lg border bg-white shadow-sm transition ${
                m.watched ? "opacity-60 bg-slate-50 border-slate-200" : "border-slate-200"
              }`}
            >
              <div>
                <h3 className={`font-semibold text-sm ${m.watched ? "line-through text-slate-500" : "text-slate-800"}`}>
                  {m.title}
                </h3>
                <span className="inline-block mt-1 text-xs bg-blue-50 text-blue-600 font-medium px-2 py-0.5 rounded">
                  {m.genre}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={m.watched}
                    onChange={() => handleToggleWatched(m.id, m.watched)}
                    className="rounded text-blue-600 focus:ring-0 cursor-pointer"
                  />
                  <span>{m.watched ? "Watched" : "To Watch"}</span>
                </label>
                <button
                  onClick={() => handleEdit(m)}
                  className="text-amber-600 hover:text-amber-700 text-xs font-medium underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(m.id)}
                  className="text-red-600 hover:text-red-700 text-xs font-medium underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
