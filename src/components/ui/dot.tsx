const Dot = () => {
  return (
    <div className="relative m-6 inline-flex w-fit">
      <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-2.5 text-xs"></div>
      <div className="flex items-center justify-center rounded-lg bg-primary-500 px-8 py-6 text-center text-white shadow-lg dark:text-gray-200">
        <span className="[&>svg]:h-10 [&>svg]:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Dot;
