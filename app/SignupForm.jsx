'use client';

import { useState } from 'react';

// Placeholder signup: shows the success message but stores nothing yet.
// TODO: send the email to the chosen list tool (MailerLite, Kit or Buttondown)
// before the site goes public.
export default function SignupForm({ id, tone = 'light' }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={`signup-done tone-${tone}`} role="status">
        <p className="signup-done-title">Check your inbox!</p>
        <p className="signup-done-text">Your checklist is on its way. Welcome to the party.</p>
      </div>
    );
  }

  return (
    <>
      <form
        className={`signup tone-${tone}`}
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <label htmlFor={id} className="signup-label">
          Your email address
        </label>
        <div className="signup-field">
          <input
            id={id}
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="signup-input"
          />
          <button type="submit" className="signup-button">
            Send me the checklist
          </button>
        </div>
      </form>
      <p className="signup-note">Email only. No spam, no ad trackers, unsubscribe anytime.</p>
    </>
  );
}
