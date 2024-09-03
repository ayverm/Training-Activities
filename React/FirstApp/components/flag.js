import { useState } from "react";

function Flag() {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  return (
    <div>
      {
      flag ? <h3>Valid</h3> : <h3>Not Valid</h3>
      }

      <button onClick={handleFlag}>Change</button>
    </div>
  );
}

export default Flag;
