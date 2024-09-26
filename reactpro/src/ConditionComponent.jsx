import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionComponent() {
  const display = false;

  //   if (dispaly) {
  //     // return (
  //     //   <div>
  //     //     <h3>This is a conditional Component</h3>
  //     //   </div>
  //     // );

  //     return <Welcome />;
  //   } else {
  //     return (
  //       //   <div>
  //       //     <h3>Code Everyday</h3>
  //       //   </div>

  //       <Code />
  //     );
  //   }

  // Using the terniary operation
  return display ? <Welcome /> : <Code />;
}
