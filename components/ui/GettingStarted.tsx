"use client";

export default function GettingStarted({
  category,
  plan,
}: {
  category: string;
  plan: string;
}) {
  // Create a properly encoded WhatsApp message
  const message = `Hi Advona 👋, I’m interested in the ${category.replace(
    /-/g,
    " "
  )} — ${plan} plan. Could you please share more details?`;

  const whatsappURL = `https://api.whatsapp.com/send?phone=919241392799&text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="w-full py-2.5 md:py-3 px-4 rounded-full text-sm md:text-base cursor-pointer font-medium transition-all duration-200 bg-white/10 hover:bg-white/20 text-white shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/30 active:scale-95 active:shadow-sm active:shadow-black/10"
      >
        Let's Connect
      </button>
    </a>
  );
}
