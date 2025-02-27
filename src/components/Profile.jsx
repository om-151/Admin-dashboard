import React from "react";

const ProfileSection = () => {
  const profileImage = null;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg p-6 gap-6">
        <div className="flex flex-col items-center">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300"
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-gray-300 bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
                className="w-16 h-16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm-7 16c0-3.86 3.14-7 7-7s7 3.14 7 7c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          <h2 className="text-xl font-bold mt-3">Om Sonani</h2>
          <p className="text-gray-500">NIN - 16429</p>
        </div>

        <div className="flex-1 w-full">
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add Task
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              WR Slot
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Internship Extension
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mt-6 border-b pb-2 text-gray-600">
            <span className="cursor-pointer font-semibold">Ongoing Tasks</span>
            <span className="cursor-pointer">Completed Tasks</span>
            <span className="cursor-pointer">Paused Tasks</span>
            <span className="cursor-pointer">Purged Tasks</span>
            <span className="cursor-pointer">All Tasks</span>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse border text-left min-w-[600px]">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Task ID</th>
                  <th className="p-2 border">Assigned Date</th>
                  <th className="p-2 border">Task Name</th>
                  <th className="p-2 border">Actions</th>
                  <th className="p-2 border">Assigned By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">TSK-74127</td>
                  <td className="p-2 border">2025/02/25 10:05:05pm</td>
                  <td className="p-2 border">
                    Task Name - Admin Portal <br />
                    <span className="text-red-500 font-semibold">Purged</span>
                  </td>
                  <td className="p-2 border">
                    <button className="bg-green-500 text-white px-2 py-1 rounded">
                      Edit
                    </button>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                      View
                    </button>
                  </td>
                  <td className="p-2 border">Self</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <h3 className="font-semibold">Tasks Data</h3>
          <p>Ongoing: 0</p>
          <p>Completed: 0</p>
          <p>Total: 1</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <h3 className="font-semibold">Leave</h3>
          <p>Total Leave: 0</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <h3 className="font-semibold">Weekly Review</h3>
          <p>Total Reviews: 0</p>
          <p>Reviews Approved: 0</p>
          <p>Reviews Disapproved: 0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
