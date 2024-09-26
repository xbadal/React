import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionComponent() {
  const dispaly = false;

  if (dispaly) {
    // return (
    //   <div>
    //     <h3>This is a conditional Component</h3>
    //   </div>
    // );

    return <Welcome />;
  } else {
    return (
      //   <div>
      //     <h3>Code Everyday</h3>
      //   </div>

      <Code />
    );
  }
}
