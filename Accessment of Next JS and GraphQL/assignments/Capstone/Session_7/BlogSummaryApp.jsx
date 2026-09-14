import React, { useState } from 'react';
import { fetchBlogSummary } from './fetchBlogSummary';

/**
 * TASK 4: React Component Testing fetchBlogSummary(prompt)
 * Tests at least two different prompts ("Future of AI in Web Development" & "Top 5 Front-End Frameworks 2026").
 */
export default function BlogSummaryApp() {
  const [selectedPrompt, setSelectedPrompt] = useState('Future of AI in Web Development');
  const [customPrompt, setCustomPrompt] = useState('');
  const [blogSummary, setBlogSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const predefinedPrompts = [
    'Future of AI in Web Development',
    'Top 5 Front-End Frameworks 2026',
  ];

  const handleFetchSummary = async (promptToUse) => {
    setLoading(true);
    setBlogSummary('');
    try {
      const summaryResult = await fetchBlogSummary(promptToUse);
      setBlogSummary(summaryResult);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.badge}>📰 BLOG AI SUMMARIZER</span>
        <h2 style={styles.title}>Task 4: OpenAI Blog Summarizer</h2>
      </div>

      <div style={styles.promptSelectorGroup}>
        <label style={styles.label}>Test Predefined Prompts (Select One):</label>
        <div style={styles.btnRow}>
          {predefinedPrompts.map((p) => (
            <button
              key={p}
              onClick={() => {
                setSelectedPrompt(p);
                handleFetchSummary(p);
              }}
              style={{
                ...styles.promptBtn,
                ...(selectedPrompt === p ? styles.activePromptBtn : {}),
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.customPromptGroup}>
        <label style={styles.label}>Or Enter Custom Blog Topic:</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="e.g. Next.js 14 vs Vite Performance"
            style={styles.input}
          />
          <button
            onClick={() => customPrompt && handleFetchSummary(customPrompt)}
            disabled={loading}
            style={styles.actionBtn}
          >
            Summarize
          </button>
        </div>
      </div>

      {loading && <p style={{ color: '#0984e3', fontStyle: 'italic' }}>⏳ Fetching AI Blog Summary...</p>}

      {blogSummary && (
        <div style={styles.summaryResultBox}>
          <h4 style={{ margin: '0 0 6px 0', color: '#0984e3' }}>📌 Executive AI Blog Summary:</h4>
          <p style={styles.summaryText}>{blogSummary}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    padding: '28px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    border: '1px solid #e0e0e0',
    maxWidth: '560px',
    margin: '20px auto',
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    marginBottom: '20px',
  },
  badge: {
    fontSize: '11px',
    fontWeight: '800',
    color: '#0984e3',
    backgroundColor: 'rgba(9, 132, 227, 0.1)',
    padding: '4px 10px',
    borderRadius: '12px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '800',
    marginTop: '8px',
    color: '#2d3436',
  },
  promptSelectorGroup: {
    marginBottom: '16px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#636e72',
    display: 'block',
    marginBottom: '8px',
  },
  btnRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  promptBtn: {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #dfe6e9',
    backgroundColor: '#f8f9fa',
    fontSize: '13px',
    cursor: 'pointer',
  },
  activePromptBtn: {
    backgroundColor: '#0984e3',
    color: '#ffffff',
    borderColor: '#0984e3',
    fontWeight: '700',
  },
  customPromptGroup: {
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid #dfe6e9',
    fontSize: '14px',
  },
  actionBtn: {
    padding: '10px 16px',
    backgroundColor: '#0984e3',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  summaryResultBox: {
    backgroundColor: '#e3f2fd',
    padding: '16px',
    borderRadius: '10px',
    borderLeft: '4px solid #0984e3',
  },
  summaryText: {
    margin: 0,
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#2d3436',
  },
};
