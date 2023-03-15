import { useState } from "react";
type Props = {
  initCount: number;
  inc: number;
  onChange?: (count: number) => void;
};

export const Counter: React.FC<Props> = ({
  initCount = 0,
  inc = 1,
  onChange,
}) => {
  const [count, setCount] = useState(initCount);

  const onClick = () => {
    setCount((count) => {
      const curCount = count + inc;
      onChange?.(curCount);
      return curCount;
    });
  };

  return <button onClick={onClick}>count is {count}</button>;
};
