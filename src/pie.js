import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

new Chart("#pie", {
  data: {
    labels: ["android", "iOS", "KaiOS", "windows", "Samsung", "unknown"],
    datasets: [
      {
        values: [76.03, 22.04, 0.79, 0.21, 0.21, 0.32]
      }
    ]
  },
  title: "Mobile Operating System Market Share Worldwide",
  type: "pie",
  colors: ["#2947ff", "#f44336", "#aeff62", "#e91e63", "#9c27b0", "#141021"],
  height: 300,
  maxSlices: 10
});
