import { CChart } from "@coreui/react-chartjs";
import CardAnalytic from "../../components/CardAnalytic";
import * as S from "./Analytic.styled";
const Analytic = () => {
  return (
    <div>
      <CardAnalytic />
      <S.Container>
        <CChart
          type="line"
          data={{
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(220, 220, 220, 0.2)",
                borderColor: "rgba(220, 220, 220, 1)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#fff",
                //@ts-ignore
                pointHighlightFill: "#ffffff",
                pointHighlightStroke: "rgba(220, 220, 220, 1)",
                data: [65, 59, 90, 81, 56, 55, 40],
              },
              {
                label: "My Second dataset",
                backgroundColor: "rgba(151, 187, 205, 0.2)",
                borderColor: "rgba(151, 187, 205, 1)",
                pointBackgroundColor: "rgba(151, 187, 205, 1)",
                pointBorderColor: "#fff",
                //@ts-ignore
                pointHighlightFill: "#ffffff",
                pointHighlightStroke: "rgba(151, 187, 205, 1)",
                data: [28, 48, 40, 19, 96, 27, 100],
              },
            ],
          }}
        />
        <S.Container1>
          <CChart
            type="polarArea"
            data={{
              labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
              datasets: [
                {
                  backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                  data: [40, 20, 80, 10],
                },
              ],
            }}
          />
        </S.Container1>
      </S.Container>
    </div>
  );
};

export default Analytic;
