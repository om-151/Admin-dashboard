import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2563.jpg?t=st=1740658190~exp=1740661790~hmac=1bdc4734f2d198c664d3fc51e2546538b3cb6018fa1ed245b9ff563c7f33e51d&w=1380')",
      }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 bg-opacity-90">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2" /> Remind me
            </label>
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </a>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>
        <p className="text-center my-2 text-sm">
          Don't have an account{" "}
          <Link to="/signup" className="text-blue-700 hover:underline">
            Sign up now 
          </Link>
        </p>
        <div className="my-6 text-gray-600 text-sm text-center">
          or continue with
        </div>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
            <FaGoogle className="mr-2" /> Login with Google
          </button>
          <button className="w-full flex items-center justify-center bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
            <FaFacebook className="mr-2" /> Login with Facebook
          </button>
          <button className="w-full flex items-center justify-center bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
            <FaGithub className="mr-2" /> Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
