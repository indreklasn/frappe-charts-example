import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

const data = {
  labels: [
    "12am-3am",
    "3am-6pm",
    "6am-9am",
    "9am-12am",
    "12pm-3pm",
    "3pm-6pm",
    "6pm-9pm",
    "9am-12am"
  ],
  datasets: [
    {
      name: "Bitcoin",
      type: "bar",
      values: [969.28, 970, 940, 1000, 949.11, 962.11, 940, 600]
    },
    {
      name: "Ethereum",
      type: "bar",
      values: [400, 250, 100, 200, 250, 325, 244, 300]
    },
    {
      name: "Litecoin",
      type: "bar",
      values: [25, 50, 100, 200, 400, 500, 300, 350]
    }
  ]
};

new Chart("#mixed", {
  // or a DOM element,
  // new Chart() in case of ES6 module with above usage
  title: "Crypto prices [example]",
  data: data,
  type: "axis-mixed", // or 'bar', 'line', 'scatter', 'pie', 'percentage'
  height: 350,
  colors: ["#7cd6fd", "#743ee2", "#000"]
});
