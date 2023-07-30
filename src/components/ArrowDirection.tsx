import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";

type ArrowDirectionProps = {
  state: number;
  id: number;
};

export const ArrowDirection: React.FunctionComponent<ArrowDirectionProps> = ({
  state,
  id,
}) => {
  if (state === id) {
    return <ArrowUpCircleIcon className={`h-6 w-6 mr-4`} stroke="#ffffff" />;
  }

  return <ArrowDownCircleIcon className={`h-6 w-6 mr-4`} stroke="#000000" />;
};
