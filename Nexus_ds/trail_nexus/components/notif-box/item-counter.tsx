import React from "react";
import { ChevronRightIcon} from"@nexus-ds/shared-icons";

interface ItemCounterProps {
  number: number;
}

const ItemCounter: React.FC<ItemCounterProps> = ({ number }) => (
  <div className="flex items-center gap-1 text-default-400">
    <span className="text-small">{number}</span>
    <ChevronRightIcon className="text-xl" />
  </div>
);

export default ItemCounter;
