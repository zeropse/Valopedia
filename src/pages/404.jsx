import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate("/");

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-5xl font-bold text-[#e0aa3e]">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-[#e0aa3e] sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-sm sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10">
          <button
            onClick={handleGoHome}
            className="rounded-md bg-[#e0aa3e] px-4 py-2"
          >
            Go back home
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
