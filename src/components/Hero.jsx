import React, { useState } from "react";
import Card from "./Card";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alicej@example.com",
      phone: "456-789-0123",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bobb@example.com",
      phone: "321-654-0987",
    },
    {
      id: 5,
      name: "Charlie White",
      email: "charliew@example.com",
      phone: "654-321-5678",
    },
    {
      id: 6,
      name: "David Black",
      email: "davidb@example.com",
      phone: "789-012-3456",
    },
    {
      id: 7,
      name: "Ella Green",
      email: "ellag@example.com",
      phone: "234-567-8901",
    },
    {
      id: 8,
      name: "Frank Blue",
      email: "frankb@example.com",
      phone: "876-543-2109",
    },
    {
      id: 9,
      name: "Grace Yellow",
      email: "gracey@example.com",
      phone: "543-210-9876",
    },
    {
      id: 10,
      name: "Henry Orange",
      email: "henryo@example.com",
      phone: "210-987-6543",
    },
    {
      id: 11,
      name: "Ivy Purple",
      email: "ivyp@example.com",
      phone: "123-321-1234",
    },
    {
      id: 12,
      name: "Jack Red",
      email: "jackr@example.com",
      phone: "432-234-4321",
    },
    {
      id: 13,
      name: "Karen Pink",
      email: "karenp@example.com",
      phone: "567-567-5678",
    },
    {
      id: 14,
      name: "Leo Cyan",
      email: "leoc@example.com",
      phone: "678-678-6789",
    },
    {
      id: 15,
      name: "Mia Brown",
      email: "miab@example.com",
      phone: "789-789-7890",
    },
    {
      id: 16,
      name: "Zeel Sonani",
      email: "zeel@example.com",
      phone: "789-789-7590",
    },
    {
      id: 17,
      name: "Om Sonani",
      email: "sonani@example.com",
      phone: "789-789-7850",
    },
    {
      id: 18,
      name: "Dev Savani",
      email: "devsavani@example.com",
      phone: "789-719-7890",
    },
    {
      id: 19,
      name: "Meet Patel",
      email: "meet@example.com",
      phone: "789-459-7890",
    },
    {
      id: 20,
      name: "Anjali maheta",
      email: "anjali@example.com",
      phone: "789-709-7890",
    },
    {
      id: 21,
      name: "Daya Parekh",
      email: "daya@example.com",
      phone: "789-745-7890",
    },
    {
      id: 22,
      name: "Priya Kakadiya",
      email: "priya@example.com",
      phone: "989-745-7890",
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Admin Dashboard
          </h2>
          <Card />
          <hr className="my-3" />
          <input
            type="text"
            placeholder="Search by name..."
            className="mb-4 p-2 border rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">No</th>
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Email</th>
                  <th className="border border-gray-300 p-2">Phone</th>
                  <th className="border border-gray-300 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="text-center border border-gray-300"
                  >
                    <td className="border border-gray-300 p-2">{user.id}</td>
                    <td className="border border-gray-300 p-2">{user.name}</td>
                    <td className="border border-gray-300 p-2">{user.email}</td>
                    <td className="border border-gray-300 p-2">{user.phone}</td>
                    <td className="border border-gray-300 p-2 flex justify-center space-x-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500">
                        Update
                      </button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 mx-1 border rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
