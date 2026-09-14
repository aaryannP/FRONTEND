import React from 'react';
import AiQuoteGenerator from './AiQuoteGenerator';
import ResumeSummaryForm from './ResumeSummaryForm';
import BlogSummaryApp from './BlogSummaryApp';

/**
 * CAPSTONE SESSION 7 MASTER DEMO PLAYGROUND
 * Renders all AI API Integration components together.
 */
export default function AppDemo() {
  return (
    <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ color: '#2d3436', fontSize: '2.4rem' }}>Capstone Session 7 — AI API Integration</h1>
        <p style={{ color: '#636e72' }}>Hugging Face Inference API & OpenAI GPT API Integration with Prompt Tuning & Error Handling</p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {/* TASK 1 & 3: Hugging Face AI Quote Generator with Tone Prompt Tuning */}
        <AiQuoteGenerator />

        {/* TASK 2 & 5: OpenAI Resume Summary Form with Spinner & Error Handling */}
        <ResumeSummaryForm />

        {/* TASK 4: fetchBlogSummary Helper Function Testing */}
        <BlogSummaryApp />
      </main>
    </div>
  );
}
