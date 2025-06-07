"use client";
import BlurText from "../home/BlurText";

export default function ArticleHeader() {
  return (
    <div className="flex justify-center pt-8 pb-12 md:pb-22 xl:pt-30 xl:pb-30    font-twk bg-gradient-to-b from-[#faf9fa] to-[#fbf9f9] px-4 py-6">
      <div className="max-w-7xl w-full  mt-10">
        <h2 className="text-4xl font-semibold font-twt text-neutral-800 tracking-tight mb-6">
          <BlurText
            text="Simple, Straightforward Pricing"
            delay={50}
            animateBy="words"
            direction="top"
            className=" text-5xl lg:text-4xl md:text-5xl text-neutral-900 mb-6 font-medium font-twk "
          />
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 lg:gap-8">
          {/* Left section */}
          <div className="space-y-8 max-w-md">
            <p className="text-neutral-500 text-base leading-relaxed">
              The administrative solutions your business needs are available in
              one convenient platform. The perfect time to make the switch is
              now.
            </p>
            <div className="flex gap-3">
              <a className="bg-[--primaryColor] cursor-pointer text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg ">
                Upgrade
              </a>
              <a className="bg-white cursor-pointer text-black border px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-gray-200">
                View plans
              </a>
            </div>
          </div>

          {/* Right section */}
          <div className="space-y-4 max-w-md">
            <div className="inline-flex items-center gap-2 px-2 py-1 bg-yellow-100 rounded-full">
              <span className="text-xs font-medium text-yellow-700">
                Member-only story
              </span>
            </div>
            <h1 className="text-xl font-bold text-neutral-900">
              Don't Just Set Goals. Build Systems
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      src="profile.jpg"
                      alt={`Avatar ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-neutral-900">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
