import React from "react";
import {Progress} from "@nexus-ds/react";


const MovingBar = () => {
  const [value, setValue] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      aria-label="Downloading..."
      size="md"
      value={value}
      color="success"
      showValueLabel={true}
      className="max-w-ful px-5 mb-10"
      />
      );
    }
    
export default MovingBar