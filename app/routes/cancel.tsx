const Cancel = () => {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 h-full">
      <div className="flex flex-col w-5/6 lg:w-2/6 h-fit p-8 items-center justify-center gap-16 min-h-0 glassmorphism-bg">
        <h1 className="text-xl lg:text-6xl font-bold text-red-900">
          Payment Cancelled
        </h1>
        <p className="text-gray-700 dark:text-gray-200 text-center">
          Your payment has not been processed.
        </p>
      </div>
    </main>
  );
};

export default Cancel;
