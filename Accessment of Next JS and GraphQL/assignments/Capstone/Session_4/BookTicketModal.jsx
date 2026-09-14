import React, { useState } from 'react';

/**
 * TASK 4: Reusable Modal Component (BookMyShow Ticket Form)
 * @param {boolean} isOpen - Controls modal visibility state
 * @param {function} onClose - Prop function called when closing
 * @param {string} movieTitle - Movie title passed as prop
 */
export default function BookTicketModal({ isOpen, onClose, movieTitle = 'Kalki 2898 AD' }) {
  const [ticketCount, setTicketCount] = useState(2);
  const [selectedTime, setSelectedTime] = useState('07:15 PM');

  if (!isOpen) return null;

  // Handles clicking backdrop outside modal box
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎟️ Success! Booked ${ticketCount} tickets for "${movieTitle}" at ${selectedTime}.`);
    onClose();
  };

  return (
    <div style={styles.backdrop} onClick={handleBackdropClick}>
      <div style={styles.modalBox}>
        
        {/* Modal Header */}
        <div style={styles.header}>
          <h3 style={styles.title}>Book Tickets — {movieTitle}</h3>
          <button style={styles.closeBtn} onClick={onClose} title="Close Modal">✕</button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Select Showtime:</label>
            <div style={styles.timeRow}>
              {['04:00 PM', '07:15 PM', '10:30 PM'].map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  style={{
                    ...styles.timeBtn,
                    ...(selectedTime === time ? styles.activeTimeBtn : {}),
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Number of Seats:</label>
            <div style={styles.qtyRow}>
              <button
                type="button"
                onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                style={styles.qtyBtn}
              >
                -
              </button>
              <span style={styles.qtyText}>{ticketCount} Tickets</span>
              <button
                type="button"
                onClick={() => setTicketCount(ticketCount + 1)}
                style={styles.qtyBtn}
              >
                +
              </button>
            </div>
          </div>

          <div style={styles.totalRow}>
            <span>Total Price:</span>
            <strong>₹{ticketCount * 250}</strong>
          </div>

          <div style={styles.actions}>
            <button type="button" onClick={onClose} style={styles.cancelBtn}>
              Cancel
            </button>
            <button type="submit" style={styles.confirmBtn}>
              Confirm Booking →
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    fontFamily: "'Roboto', sans-serif",
  },
  modalBox: {
    backgroundColor: '#ffffff',
    width: '90%',
    maxWidth: '450px',
    borderRadius: '12px',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f84464', // BookMyShow Red/Pink
    color: '#ffffff',
    padding: '16px 20px',
  },
  title: {
    margin: 0,
    fontSize: '18px',
    fontWeight: '700',
  },
  closeBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  form: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#333333',
  },
  timeRow: {
    display: 'flex',
    gap: '10px',
  },
  timeBtn: {
    flex: 1,
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#fafafa',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  activeTimeBtn: {
    backgroundColor: '#f84464',
    color: '#ffffff',
    borderColor: '#f84464',
  },
  qtyRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  qtyBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
  },
  qtyText: {
    fontSize: '15px',
    fontWeight: '700',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    padding: '12px',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '8px',
  },
  cancelBtn: {
    padding: '10px 18px',
    border: 'none',
    backgroundColor: '#e0e0e0',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  confirmBtn: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#f84464',
    color: '#ffffff',
    borderRadius: '6px',
    fontWeight: '700',
    cursor: 'pointer',
  },
};
