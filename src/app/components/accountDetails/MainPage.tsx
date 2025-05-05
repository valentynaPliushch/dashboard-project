import { CircleArrowDown, CircleArrowUp, Rocket } from "lucide-react";
import { LineChartComponent } from "../LineChartComponent";
import { ColorfullProgressBar } from "../ColorfullProgressBar";
import { Button } from "../ui/button";
import { ProgressBar } from "../ProgressBar";

const MainPage = () => {
  return (
    <div className="w-full p-2">
      <h2 className="title-highlight font-semibold">Winnability</h2>
      <div className="flex flex-col gap-1.5 lg:grid lg:grid-cols-6">
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
        <div className="col-span-2 inner-container w-full">
          <p className="title-sm">Exposute Distribution</p>

          <div className="flex sm:flex-col lg:flex-row gap-3 mb-1.5">
            <ProgressBar value={82} display={false} />
            <div className="text-sm mt-1 flex-shrink-0 self-center">
              {" "}
              Your Score: <span className="font-semibold">82%</span>
            </div>
          </div>
          <div className="flex sm:flex-col lg:flex-row gap-3 mb-1.5">
            <ProgressBar value={68} display={false} />
            <div className="text-sm mt-1 flex-shrink-0 self-center">
              {" "}
              Market Avg: <span className="font-semibold">68%</span>
            </div>
          </div>
          <div className="flex sm:flex-col lg:flex-row gap-3 mb-1.5">
            <ProgressBar value={88} display={false} />
            <div className="text-sm mt-1 flex-shrink-0 self-center">
              {" "}
              Top competitor: <span className="font-semibold">88%</span>
            </div>
          </div>
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
          <div className="flex flex-col gap-1.5 lg:flex-row justify-center mb-4">
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
          <div className="flex flex-col gap-1.5 lg:flex-row justify-center">
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
