import Image from "next/image";
import Link from "next/link"; //import this

export const Hero = () => {
  /* hidden lg:block */
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 pt-20 ">
      <div className="  inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden  h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          className="object-cover   h-0.5 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full -z-10"
          src="/hero-img.jpeg"
          alt=""
          width={1100}
          height={750}
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            We love looking
            <br className="hidden md:block" />
            after your{" "}
            <span className="inline-block text-deep-purple-accent-400">
              eyes
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            They say your eyes are the window to your soul. They certainly
            reveal much about your health, so you need to make regular check ups
            part of your routine, throughout your life.
          </p>
          <div className="flex items-center">
            <Link href="#products">
              <a className="inline-flex items-center bg-black justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                Shop
              </a>
            </Link>
            <Link href="/about-us">
              <a
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
