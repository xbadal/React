import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "KiWi", "Banana"];

  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "",
    },
    {
      name: "Mango",
      price: 10,
      emoji: "",
    },
    {
      name: "Banana",
      price: 10,
      emoji: "",
    },
    {
      name: "Orange",
      price: 10,
      emoji: "",
    },
    {
      name: "Pineaple",
      price: 10,
      emoji: "",
    },
    {
      name: "Gauva",
      price: 10,
      emoji: "",
    },
    {
      name: "Kiwi",
      price: 10,
      emoji: "",
    },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}
