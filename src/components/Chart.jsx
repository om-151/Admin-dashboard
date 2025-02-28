import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const enrollmentData = [
  { name: "Jan", paid: 10000, free: 30000 },
  { name: "Feb", paid: 15000, free: 50000 },
  { name: "Mar", paid: 20000, free: 40000 },
  { name: "Apr", paid: 25000, free: 45000 },
  { name: "May", paid: 30000, free: 35000 },
  { name: "Jun", paid: 60000, free: 30000 },
  { name: "Jul", paid: 50000, free: 40000 },
  { name: "Aug", paid: 45000, free: 50000 },
  { name: "Sep", paid: 20000, free: 55000 },
];

const trafficData = [
  { name: "Organic Search", value: 875, color: "#FFA500" },
  { name: "Referrals", value: 450, color: "#28A745" },
  { name: "Social Media", value: 4305, color: "#007BFF" },
];

const Charts = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow-lg rounded-xl p-4">
        <h2 className="text-lg font-semibold">Average Enrollment Rate</h2>
        <div className="text-sm text-gray-500 flex items-center gap-4 my-2">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span> Paid
            Course: 350
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span> Free
            Course: 70
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={enrollmentData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="paid"
              stroke="#007BFF"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="free"
              stroke="#28A745"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-4">
        <h2 className="text-lg font-semibold">Traffic Sources</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={trafficData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
            >
              {trafficData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 text-sm mt-2">
          {trafficData.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.name}: {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Charts;
