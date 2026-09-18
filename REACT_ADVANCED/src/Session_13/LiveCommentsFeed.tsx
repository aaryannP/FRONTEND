import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

export default function LiveCommentsFeed() {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    const commentsRef = collection(db, 'comments');
    
    const unsubscribe = onSnapshot(commentsRef, (snapshot) => {
      const commentsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h3>Live Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.text || 'No text'}</li>
        ))}
      </ul>
    </div>
  );
}
