import React from "react";
import {Card, Skeleton, Button} from "@nexus-ds/react";


const GrpahBox = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    const toggleLoad = () => {
        setIsLoaded(!isLoaded);
    };
    
    return (
        <div className="flex flex-col gap-3">
      <Card className="w-full space-y-5 p-4" radius="lg">
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <div className="h-96 rounded-lg bg-secondary"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary"></div>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
          </Skeleton>
        </div>
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <div className="h-48 rounded-lg bg-secondary"></div>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <div className="h-40 rounded-lg bg-secondary"></div>
        </Skeleton>
      </Card>
      <Button size="sm" variant="flat" color="secondary" onPress={toggleLoad} className="w-[20%]">
        {isLoaded ? "Show" : "Hide"} Skeleton
      </Button>
    </div>
  );
}

export default GrpahBox