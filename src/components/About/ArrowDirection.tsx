import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";

type ArrowDirectionProps = {
  state: number;
  id: number;
};

const svgStyle = "h-6 w-6 mr-4";

export const ArrowDirection: React.FunctionComponent<ArrowDirectionProps> = ({
  state,
  id,
}) =>
  state === id ? (
    <ArrowUpCircleIcon className={svgStyle} stroke="#ffffff" />
  ) : (
    <ArrowDownCircleIcon className={svgStyle} stroke="#000000" />
  );
