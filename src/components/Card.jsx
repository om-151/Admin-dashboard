const stats = [
  {
    color: "bg-blue-500",
    value: "100",
    label: "New Users",
  },
  {
    color: "bg-green-500",
    value: "53%",
    label: "Repetitive Rate",
  },
  {
    color: "bg-yellow-500",
    value: "22",
    label: "User Registrations",
  },
  {
    color: "bg-red-500",
    value: "65",
    label: "Unique Visitors",
  },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow-md text-white ${stat.color} overflow-hidden`}
        >
          <div className="text-3xl font-bold">{stat.value}</div>
          <div className="text-lg">{stat.label}</div>
          <div className="mt-4 text-sm flex items-center gap-1 cursor-pointer hover:opacity-80">
            More info <span>&#10145;</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
