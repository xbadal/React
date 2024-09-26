import Fruits from "./Fruits";
import Hello from "./Hello";
import ConditionComponent from "./ConditionComponent";

function App() {
  // const seatNumber = [1, 2, 3];

  const person = {
    name: "Badal",
    message: "Hi There!",
    emoji: "",
    seatNumber: [1, 2, 3],
  };

  return (
    <div className="App">
      {/* <Hello
        name="Badal"
        message="Hi There!"
        emoji=""
        seatNumber={seatNumber}
      /> */}

      {/* <Hello person={person} /> */}

      {/* <Fruits /> */}

      <ConditionComponent />
    </div>
  );
}

export default App;
