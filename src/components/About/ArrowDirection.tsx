import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";

type ArrowDirectionProps = {
  state: number | null;
  id: number;
};

export const ArrowDirection: React.FunctionComponent<ArrowDirectionProps> = ({
  state,
  id,
}) =>
  state === id ? (
    <ArrowUpCircleIcon className={`h-6 w-6 mr-4`} stroke="#ffffff" />
  ) : (
    <ArrowDownCircleIcon className={`h-6 w-6 mr-4`} stroke="#000000" />
  );
