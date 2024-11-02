import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import { usePage } from "@inertiajs/react";

export function StatisticsChart({ color, chart, title, description, footer }) {
  const monthenum = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (title == "Money View") {
    const money_array = [];
    const name_array = [];
    const chartinfos = usePage().props.everymoneytotal;
    chartinfos.map((item) => {
      money_array.push(item['everymoneytotal']);
      name_array.push(item['username'].slice(0,3));
    });
    chart.series[0].data = money_array;
    chart.options.xaxis.categories = name_array;
  } else if (title == "Month Perfermence") {
    const month_money_total = [];
    const month_array = [];
    const chartinfos = usePage().props.everymonthdata;
    chartinfos.map((item) => {
      month_money_total.push(item['monthmoneytotal']);
      month_array.push(monthenum[parseInt(item['everymonth'].slice(5))-1]);
    });
    chart.series[0].data = month_money_total;
    chart.options.xaxis.categories = month_array;
  } else if (title == "Month Bids") {
    const month_bid_total = [];
    const month_array = [];
    const chartinfos = usePage().props.everymonthdata;
    chartinfos.map((item) => {
      month_bid_total.push(item['monthbidtotal']);
      month_array.push(monthenum[parseInt(item['everymonth'].slice(5))-1]);
    });
    chart.series[0].data = month_bid_total;
    chart.options.xaxis.categories = month_array;
  }
  
  return (
    <Card className="border border-blue-gray-100 shadow-sm">
      <CardHeader variant="gradient" color={color} floated={false} shadow={false}>
        <Chart {...chart} />
      </CardHeader>
      <CardBody className="px-6 pt-0">
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 px-6 py-5">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsChart.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  chart: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
