import React from "react";

const Success = () => {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 h-full">
      <div className="flex flex-col w-2/6 h-fit p-8 items-center justify-center gap-16 min-h-0 glassmorphism-bg">
        <h1 className="text-6xl font-bold text-green-900">
          Payment Successful!
        </h1>
        <p className="text-gray-700 dark:text-gray-200 text-center">
          Thank you for your purchase. Your payment has been processed
          successfully.
        </p>
      </div>
    </main>
  );
};

export default Success;
