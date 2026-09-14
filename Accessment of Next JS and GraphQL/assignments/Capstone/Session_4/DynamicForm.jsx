import React, { useState } from 'react';

/**
 * TASK 5: Scaffolded Generic Dynamic Form Component (GitHub Copilot Pattern)
 * @param {Array<{name: string, label: string, type: string, placeholder?: string, options?: Array<string>}>} fieldDefs - Array of field definitions
 * @param {function} onSubmit - Submit handler callback function receiving form data object
 * @param {string} submitText - Submit button label
 */
export function DynamicForm({ fieldDefs = [], onSubmit, submitText = 'Submit Form' }) {
  const [formData, setFormData] = useState(() => {
    const initial = {};
    fieldDefs.forEach((field) => {
      initial[field.name] = field.defaultValue || '';
    });
    return initial;
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      {fieldDefs.map((field) => (
        <div key={field.name} style={styles.fieldGroup}>
          <label htmlFor={field.name} style={styles.label}>
            {field.label} {field.required && <span style={{ color: '#ff3f6c' }}>*</span>}
          </label>

          {field.type === 'select' ? (
            <select
              id={field.name}
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              style={styles.input}
              required={field.required}
            >
              <option value="">-- Select {field.label} --</option>
              {field.options &&
                field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
            </select>
          ) : (
            <input
              id={field.name}
              type={field.type || 'text'}
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder || ''}
              style={styles.input}
              required={field.required}
            />
          )}
        </div>
      ))}

      <button type="submit" style={styles.submitBtn}>
        {submitText}
      </button>
    </form>
  );
}

/**
 * Task 5 Implementation: IPL Cricket Fantasy League Signup Form using DynamicForm
 */
export default function IPLSignupForm() {
  // Array of field definitions passed as props
  const iplFantasyFields = [
    { name: 'username', label: 'Team Manager Name', type: 'text', placeholder: 'e.g. Captain_Ramesh', required: true },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'ramesh@iplfantasy.com', required: true },
    { name: 'favTeam', label: 'Favorite IPL Franchise', type: 'select', options: ['Mumbai Indians (MI)', 'Chennai Super Kings (CSK)', 'Royal Challengers Bengaluru (RCB)', 'Kolkata Knight Riders (KKR)', 'Rajasthan Royals (RR)'], required: true },
    { name: 'captainPick', label: 'Preferred Captain Pick', type: 'text', placeholder: 'e.g. Rohit Sharma / MS Dhoni / Virat Kohli', required: true },
    { name: 'password', label: 'Create Password', type: 'password', placeholder: '••••••••', required: true },
  ];

  const handleFantasySignup = (data) => {
    alert(`🏏 Fantasy League Squad Created!\nManager: ${data.username}\nFranchise: ${data.favTeam}\nCaptain: ${data.captainPick}`);
  };

  return (
    <div style={styles.cardWrapper}>
      <div style={styles.cardHeader}>
        <span style={styles.iplBadge}>🏏 IPL 2026 FANTASY LEAGUE</span>
        <h2 style={styles.title}>Register Fantasy Squad</h2>
      </div>

      {/* Generic DynamicForm component customized via props */}
      <DynamicForm
        fieldDefs={iplFantasyFields}
        onSubmit={handleFantasySignup}
        submitText="🚀 Create Fantasy Team & Join Contest"
      />
    </div>
  );
}

const styles = {
  cardWrapper: {
    maxWidth: '480px',
    margin: '20px auto',
    backgroundColor: '#0d1b2a',
    color: '#ffffff',
    padding: '28px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
    border: '1px solid #1b263b',
    fontFamily: "'Roboto', sans-serif",
  },
  cardHeader: {
    marginBottom: '20px',
  },
  iplBadge: {
    fontSize: '11px',
    fontWeight: '800',
    color: '#e0a96d',
    backgroundColor: 'rgba(224, 169, 109, 0.15)',
    padding: '4px 10px',
    borderRadius: '12px',
    letterSpacing: '0.5px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '800',
    marginTop: '8px',
    color: '#ffffff',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#e0e1dd',
  },
  input: {
    padding: '12px 14px',
    backgroundColor: '#1b263b',
    border: '1px solid #415a77',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
  },
  submitBtn: {
    marginTop: '12px',
    padding: '14px',
    backgroundColor: '#e0a96d',
    color: '#0d1b2a',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '800',
    fontSize: '15px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(224, 169, 109, 0.3)',
  },
};
