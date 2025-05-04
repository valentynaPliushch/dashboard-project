import clsx from "clsx";
type Props = {
  color: string;
  text: string;
  value: number;
  number: number;
};

export function ColorfullProgressBar({ color, text, value, number }: Props) {
  const colorMap = {
    green: "green-500",
    yellow: "yellow-500",
    blue: "blue-500",
  };
  return (
    <div className="flex flex-row">
      <div
        className={clsx(
          color === "green"
            ? `border-green-500 text-green-500`
            : `border-yellow-500 text-yellow-500`,
          "flex items-center justify-center rounded-full border-1 mr-2 flex-shrink-0"
        )}
        style={{
          width: "30px",
          height: "30px",
        }}
      >
        {number}
      </div>
      <div className="flex flex-col">
        <p className="title-xs">{text}</p>
      </div>
      <div className="flex lg:flex-row  w-full pb-2 justify-center">
        <div className=" w-[70%] rounded-full bg-transparent relative flex flex-row">
          <div
            className={clsx(
              color === "green" ? `to-green-500` : `to-yellow-500`,
              "absolute top-0 left-0 h-full bg-gradient-to-r from-transparent rounded-r-full flex items-center justify-end"
            )}
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <div className="subtitle self-center ml-3">+{value}%</div>
      </div>
    </div>
  );
}
