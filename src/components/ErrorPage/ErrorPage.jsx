import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4 text-gray-700">Page Not Found</p>
      <p className="text-lg mt-2 text-gray-600">
        The page you're looking for doesn't exist or an error occurred.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
