import { useState } from "react";
import Button from "~/components/button";

export function Stripe() {
  const [amount, setAmount] = useState(20);
  const [email, setEmail] = useState("");
  const handleCheckout = async () => {
    if (amount < 20 || amount > 5000) {
      alert("Amount must be between $50 and $5000");
      return;
    } else if (!email) {
      alert("Please enter a valid email address");
      return;
    }
    const res = await fetch("${VITE_NEST_BASE_URL}/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount), email }),
    });

    const data = await res.json();
    globalThis.location.href = data.url; // Redirect to Stripe Checkout
  };
  return (
    <main className="flex items-center justify-center pt-16 pb-4 h-full">
      <div className="flex flex-col w-2/6 h-fit p-8 items-center justify-center gap-16 min-h-0 glassmorphism-bg">
        <div className="flex items-center justify-center gap-16">
          <label className="w-6/12 block mb-4">
            <span className="text-gray-700 dark:text-gray-200">
              Amount (USD) *
            </span>
            <input
              type="number"
              min={20}
              max={5000}
              value={amount}
              placeholder="20"
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600
                     bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                     p-3 transition"
            />
          </label>

          <label className="w-6/12 block mb-6">
            <span className="text-gray-700 dark:text-gray-200">
              Your Email *
            </span>
            <input
              type="email"
              value={email}
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600
                     bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                     p-3 transition"
            />
          </label>
        </div>
        <Button content="Checkout" clickHandler={handleCheckout} />
      </div>
    </main>
  );
}
