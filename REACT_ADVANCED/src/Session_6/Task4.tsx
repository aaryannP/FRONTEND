import { memo, useCallback, useMemo, useState } from 'react';

// Generates 1000 dummy items
const generateItems = () => {
  const data = [];
  for (let i = 0; i < 1000; i++) {
    data.push({ id: i, name: `Item ${i}` });
  }
  return data;
};

const dummyData = generateItems();

// The Child Component
const ListItem = memo(function ListItem({ 
  item, 
  onClick 
}: { 
  item: { id: number, name: string }, 
  onClick: (id: number) => void 
}) {
  // Artificial slowdown to simulate a heavy component
  const startTime = performance.now();
  while (performance.now() - startTime < 1) { }

  return (
    <li onClick={() => onClick(item.id)} style={{ cursor: "pointer" }}>
      {item.name}
    </li>
  );
});

// The Parent Component
export default function Task4() {
  const [count, setCount] = useState(0);
  const [filterText, setFilterText] = useState("");

  // BAD: This filtering happens on EVERY render
  const filteredItems = useMemo(() => dummyData.filter(
    item => item.name.toLowerCase().includes(filterText.toLowerCase())
  ), [filterText]);

  // BAD: This function is recreated on EVERY render
  const handleItemClick = useCallback((id) => {
    console.log("Clicked item", id);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Clicking this button will feel incredibly laggy! */}
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>

      <br /><br />

      <input
        placeholder="Filter..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul>
        {filteredItems.map(item => (
          <ListItem key={item.id} item={item} onClick={handleItemClick} />
        ))}
      </ul>
    </div>
  );
}
