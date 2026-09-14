import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from './firebaseConfig';

/**
 * TASK 1: Spotify Playlists Firestore Service
 */
export async function seedSamplePlaylist() {
  try {
    const playlistsCol = collection(db, 'playlists');
    
    // Sample Spotify Playlist Document
    const samplePlaylist = {
      name: "Chill Lofi Beats 2026",
      creator: "ChilledCow",
      songs: [
        "Midnight City Breeze",
        "Coffee Shop Rain",
        "Late Night Coding",
        "Subtle Echoes"
      ],
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(playlistsCol, samplePlaylist);
    console.log("🟢 Sample Playlist added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("🔴 Error adding sample playlist to Firestore:", error);
    throw error;
  }
}

export async function fetchAllPlaylists() {
  try {
    const playlistsCol = collection(db, 'playlists');
    const snapshot = await getDocs(playlistsCol);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("🔴 Error fetching playlists:", error);
    return [];
  }
}
