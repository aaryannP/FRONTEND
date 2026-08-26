import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <h1>Contact Us - Get in Touch</h1>
      <p>Email: support@musicapp.com | Phone: +1 800 555 0199</p>
    </div>
  );
}
