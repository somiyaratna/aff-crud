import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const products = useSelector((state) => state.products);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const totalRevenue = products.reduce(
    (acc, product) => acc + Number(product.price),
    0
  );
  const totalReviews = products.reduce((acc, product) => {
    return acc + (product.reviews?.length || 0);
  }, 0);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [5, 6, 7, 3, 8],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className=" p-4 rounded-lg shadow border bg-blue-200 border-blue-600">
          <h4 className="text-blue-700 text-sm">Total Products</h4>
          <p className="text-2xl font-semibold text-blue-600">
            {products.length}
          </p>
        </div>
        <div className=" p-4 bg-green-200 rounded-lg shadow border border-green-600">
          <h4 className="text-green-700 text-sm">Total Revenue</h4>
          <p className="text-2xl font-semibold text-green-600">
            ${totalRevenue.toFixed(2)}
          </p>
        </div>
        <div className=" p-4 rounded-lg border-purple-600 bg-purple-200  shadow border">
          <h4 className="text-purple-700 text-sm">Total Reviews</h4>
          <p className="text-2xl font-semibold text-purple-600">
            {totalReviews}
          </p>
        </div>
        <div className="bg-red-200 border-red-600 p-4 rounded-lg shadow border">
          <h4 className="text-red-700 text-sm">Refunds</h4>
          <p className="text-2xl font-semibold text-red-500">3</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
