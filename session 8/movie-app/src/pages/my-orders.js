export default function MyOrders({ orders, fetchedAt }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#f59e0b' }}>Zomato Food Orders (SSR)</h1>
      <p style={{ color: '#94a3b8' }}>Fetched on-demand per request at: <strong>{fetchedAt}</strong></p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        {orders.map((order) => (
          <div key={order.id} style={{ background: '#1e293b', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0', color: '#f8fafc' }}>{order.restaurant}</h3>
              <p style={{ margin: 0, color: '#94a3b8' }}>Item: {order.items}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '1.1rem' }}>₹{order.amount}</span>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Status: {order.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// getServerSideProps runs on every server request
export async function getServerSideProps() {
  // Simulating external food delivery API response
  const mockOrders = [
    { id: 'ORD-101', restaurant: 'Punjab Grill', items: 'Butter Chicken + Naan', amount: 450, status: 'Delivered' },
    { id: 'ORD-102', restaurant: 'Dominos Pizza', items: 'Farmhouse Pizza + Coke', amount: 599, status: 'On the way' },
    { id: 'ORD-103', restaurant: 'Subway', items: 'Veggie Delite Sub 15cm', amount: 280, status: 'Delivered' }
  ];

  return {
    props: {
      orders: mockOrders,
      fetchedAt: new Date().toLocaleTimeString()
    }
  };
}
