import { CircleArrowDown, CircleArrowUp, Rocket } from "lucide-react";
import { LineChartComponent } from "../LineChartComponent";
import { ProgressBar } from "../ProgressBar";
import { ColorfullProgressBar } from "../ColorfullProgressBar";
import { Button } from "../ui/button";

const MainPage = () => {
  return (
    <div className="w-full p-2">
      <h2 className="title-highlight font-semibold">Winnability</h2>
      <div className="lg:grid grid-cols-6 sm:flex sm:flex-col gap-1.5">
        <div className="col-span-2 inner-container">
          <p className="title-sm">Overal score</p>
          <div className="flex flex-row gap-4 align-top">
            <div className="title-highlight">82%</div>
            <div className="border-blue-500 border-solid border-1 rounded-4xl py-2 px-4 text-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="inline-block w-2 h-2 rounded-full bg-blue-700 mr-0.5"
                ></span>
              ))}
              Very Strong
            </div>
          </div>
        </div>
        <div className="col-span-2 inner-container">
          <div className="title-sm">
            <h4>Historical trend</h4>
          </div>
          <LineChartComponent />
        </div>
        <div className="col-span-2 inner-container max-w-md">
          <p className="title-sm">Exposute Distribution</p>
          <ProgressBar color="blue-500" text="Your Score" value={82} />
          <ProgressBar color="blue-500" text="Market Avg" value={68} />
          <ProgressBar color="blue-500" text="Top competitor" value={88} />
        </div>
        <div className="col-span-3 inner-container">
          <p className="title-sm">
            <span className="text-green-500">
              <CircleArrowUp />
            </span>{" "}
            Increasing Winnability
          </p>
          <div className="flex flex-col gap-2">
            <ColorfullProgressBar
              color="green"
              text="Brokers relationship"
              value={28}
              number={1}
            />
            <ColorfullProgressBar
              color="green"
              text="Loss history"
              value={22}
              number={2}
            />
            <ColorfullProgressBar
              color="green"
              text="Insudtry growth"
              value={16}
              number={3}
            />
            <ColorfullProgressBar
              color="green"
              text="Multiline opportunity"
              value={11}
              number={4}
            />
          </div>
        </div>
        <div className="col-span-3 inner-container">
          <p className="title-sm">
            <span className="text-yellow-500">
              <CircleArrowDown />
            </span>{" "}
            Decreasing Winnability
          </p>
          <div className="flex flex-col gap-2">
            <ColorfullProgressBar
              color="yellow"
              text="Brokers relationship"
              value={28}
              number={1}
            />
            <ColorfullProgressBar
              color="yellow"
              text="Loss history"
              value={22}
              number={2}
            />
            <ColorfullProgressBar
              color="yellow"
              text="Insudtry growth"
              value={16}
              number={3}
            />
            <ColorfullProgressBar
              color="yellow"
              text="Multiline opportunity"
              value={11}
              number={4}
            />
          </div>
        </div>
        <div className="col-span-full inner-container">
          <h3 className="title text-green-500">
            <span>
              <Rocket className="text-green-500" />
            </span>{" "}
            AI-Powered Recomendations
          </h3>
          <div className="flex lg:flex-row sm:flex-col justify-center">
            <div>
              <h5 className="title-sm">
                Offer 5% premium discount in exchange for 3-year commitment
              </h5>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quidem dolore veritatis minima quos eos veniam itaque dolorem
                hic, fuga velit ipsa ab quasi facere eligendi suscipit harum
                ipsam numquam!
              </p>
            </div>
            <Button variant="green">Apply</Button>
          </div>
          <div className="flex lg:flex-row sm:flex-col justify-center">
            <div>
              <h5 className="title-sm">
                Offer 5% premium discount in exchange for 3-year commitment
              </h5>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quidem dolore veritatis minima quos eos veniam itaque dolorem
                hic, fuga velit ipsa ab quasi facere eligendi suscipit harum
                ipsam numquam!
              </p>
            </div>
            <Button variant="green">Apply</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
