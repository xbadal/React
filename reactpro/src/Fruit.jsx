export default function Fruit({ fruit }) {
  return (
    <li key={fruit.price}>
      {fruit.name} ${fruit.price}
    </li>
  );
}
