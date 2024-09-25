export default function Fruits() {
  const fruits = ["Apple", "Mango", "KiWi", "Banana"];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
