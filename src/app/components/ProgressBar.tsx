import clsx from "clsx";
type Props = {
  color: string;
  text: string;
  value: number;
};

export function ProgressBar({ color, text, value }: Props) {
  return (
    <div className="flex sm:flex-col lg:flex-row w-full pb-2">
      <div className=" w-[70%] h-full rounded-full bg-blue-300/15 relative flex flex-row">
        <div
          className={clsx(
            `to-${color}`,
            "absolute top-0 left-0 h-full bg-gradient-to-r from-gray-700 rounded-fullflex items-center justify-end"
          )}
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <div className="text-sm self-center ml-2">
        {" "}
        {text}: <span className="font-semibold">{value}%</span>
      </div>
    </div>
  );
}
