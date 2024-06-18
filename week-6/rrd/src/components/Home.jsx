import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Main section */}
      <section className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:flex sm:items-center sm:py-16">
        {/* Left side - Image */}
        <div className="sm:w-1/2">
          <img
            className="w-full h-auto"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="Background image"
          />
        </div>

        {/* Right side - Content */}
        <div className="sm:w-1/2 px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 ">
          <div className="max-w-xl space-y-8 text-center sm:text-left ">
            <h2 className="text-4xl font-bold sm:text-5xl">Download Now</h2>

            {/* Download button */}
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              <span className="ml-2">Download now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Centered grid */}
      <div className="grid place-items-center mt-12 sm:mt-20">
        <img
          className="w-48 sm:w-96"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="Centered image"
        />
      </div>

      {/* Title */}
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
