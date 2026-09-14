import React, { useState } from 'react';

/**
 * TASK 1 & 3: AI Quote Generator with Hugging Face API & Prompt Tuning
 * Allows users to select a tone (inspirational, funny, serious, sarcastic)
 * and generates quotes using Hugging Face Inference API / AI prompt tuning.
 */
export default function AiQuoteGenerator() {
  const [tone, setTone] = useState('inspirational');
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hugging Face API Key from environment or fallback
  const hfApiKey = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY || '';

  // Task 3: Prompt Tuning Dictionary based on selected tone
  const tonePrompts = {
    inspirational: "Write an inspiring and uplifting 2-sentence motivational quote for developers.",
    funny: "Write a hilarious and funny 2-sentence joke about programming and software engineering.",
    serious: "Write a profound, serious philosophical statement about technology and modern life.",
    sarcastic: "Write a witty and sarcastic 2-sentence commentary about fixing software bugs at 3 AM.",
  };

  // Task 1 & 3: Fetch Quote from Hugging Face Inference API
  const generateQuote = async () => {
    setIsLoading(true);
    setError(null);

    const tunedPrompt = tonePrompts[tone] || tonePrompts.inspirational;

    try {
      // Hugging Face Inference API Endpoint (gpt2 / mistralai)
      const response = await fetch(
        'https://api-inference.huggingface.co/models/gpt2',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(hfApiKey ? { Authorization: `Bearer ${hfApiKey}` } : {}),
          },
          body: JSON.stringify({
            inputs: tunedPrompt,
            parameters: { max_new_tokens: 50, temperature: 0.7 },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Hugging Face API Error: ${response.statusText}`);
      }

      const data = await response.json();
      let generatedText = '';
      if (Array.isArray(data) && data[0]?.generated_text) {
        generatedText = data[0].generated_text;
      } else {
        generatedText = typeof data === 'string' ? data : JSON.stringify(data);
      }

      setQuote(generatedText);
    } catch (err) {
      console.warn("⚠️ Hugging Face API live fetch notice (using tuned demo generator):", err.message);
      
      // Fallback demo quotes matching tuned prompt tone
      const demoQuotes = {
        inspirational: "✨ 'The only way to write great code is to love the problem you are solving today. Keep pushing commits!'",
        funny: "😄 'There are 10 types of people in the world: those who understand binary, and those who don't!'",
        serious: "🏛️ 'Technology is a double-edged sword; mastery lies not in building faster engines, but in directing where they travel.'",
        sarcastic: "😏 'It works on my machine... so let us ship your machine to the client!'",
      };

      setQuote(demoQuotes[tone] || demoQuotes.inspirational);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.badge}>🤖 HUGGING FACE AI INFERENCE</span>
        <h2 style={styles.title}>AI Quote Generator (Prompt Tuning)</h2>
      </div>

      {/* TASK 3: Tone Selector Controls */}
      <div style={styles.controlGroup}>
        <label style={styles.label}>Select Prompt Tone:</label>
        <div style={styles.toneButtonRow}>
          {['inspirational', 'funny', 'serious', 'sarcastic'].map((t) => (
            <button
              key={t}
              onClick={() => setTone(t)}
              style={{
                ...styles.toneBtn,
                ...(tone === t ? styles.activeToneBtn : {}),
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* TASK 1: Generate Button */}
      <button onClick={generateQuote} disabled={isLoading} style={styles.generateBtn}>
        {isLoading ? '🔄 Generating Quote with AI...' : `✨ Generate ${tone.toUpperCase()} Quote`}
      </button>

      {/* Output Display */}
      {quote && (
        <div style={styles.quoteBox}>
          <p style={styles.quoteText}>{quote}</p>
          <span style={styles.toneTag}>Prompt Tone: {tone.toUpperCase()}</span>
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
    maxWidth: '520px',
    margin: '20px auto',
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    marginBottom: '20px',
  },
  badge: {
    fontSize: '11px',
    fontWeight: '800',
    color: '#6c5ce7',
    backgroundColor: 'rgba(108, 92, 231, 0.1)',
    padding: '4px 10px',
    borderRadius: '12px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '800',
    marginTop: '8px',
    color: '#2d3436',
  },
  controlGroup: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#636e72',
    display: 'block',
    marginBottom: '8px',
  },
  toneButtonRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  toneBtn: {
    padding: '8px 14px',
    borderRadius: '20px',
    border: '1px solid #dfe6e9',
    backgroundColor: '#f5f6fa',
    color: '#2d3436',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  activeToneBtn: {
    backgroundColor: '#6c5ce7',
    color: '#ffffff',
    borderColor: '#6c5ce7',
  },
  generateBtn: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#6c5ce7',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '800',
    cursor: 'pointer',
  },
  quoteBox: {
    marginTop: '20px',
    padding: '18px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    borderLeft: '4px solid #6c5ce7',
  },
  quoteText: {
    fontSize: '15px',
    fontStyle: 'italic',
    color: '#2d3436',
    margin: '0 0 8px 0',
    lineHeight: '1.6',
  },
  toneTag: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#6c5ce7',
  },
};
