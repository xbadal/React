function Hello({ person }) {
  // Props are immuatable
  // props.name = "Badal"  will throw error

  return (
    <h1>
      {/* {props.message} {props.name} {props.emoji} {props.seatNumber} */}
      {/* {props.person.message} {props.person.name} {props.person.emoji}{" "}
      {props.person.seatNumber} */}
      {person.message} {person.name} {person.emoji} {person.seatNumber}
    </h1>
  );
}

export default Hello;
