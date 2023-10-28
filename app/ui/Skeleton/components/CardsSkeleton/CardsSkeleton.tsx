import { memo } from "react";
import CardSkeleton from "./components/CardSkeleton";

const CardsSkeleton: React.FC = () => {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
};

export default memo(CardsSkeleton);
