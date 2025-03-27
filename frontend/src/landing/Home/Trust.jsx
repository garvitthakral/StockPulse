import React from "react";

const Trust = () => {
  return (
    <div className="px-50">
      <h2 className="text-5xl font-semiboldbold text-logo-p">
        Trust with confidence
      </h2>
      <div className="flex">
        {/* left */}
        <div className="w-6/12">
          <h3 className="text-2xl text-logo-s py-4 font-semibold">
            Customer-first always
          </h3>
          <p className="text-xl font-light">
            That's why 1.5+ crore customers trust StockPulse with ₹4.5+ lakh
            crores of equity investments and contribute to 15% of daily retail
            exchange volumes in India.
          </p>
          <br />
          <br />
          <h3 className="text-2xl text-logo-s py-4 font-semibold">
            No spam or gimmicks
          </h3>
          <p className="text-xl font-light">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <br />
          <br />
          <h3 className="text-2xl text-logo-s py-4 font-semibold">
            The StockPulse universe
          </h3>
          <p className="text-xl font-light">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <br />
          <br />
          <h3 className="text-2xl text-logo-s py-4 font-semibold">
            Do better with money
          </h3>
          <p className="text-xl font-light">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money
          </p>
          <br />
          <br />
        </div>

        {/* right */}
        <div className="w-6/12">
          <img src="https://drive.google.com/file/d/1PMW71k7C2uLXeWE_elPhGOa6q1EbPFbZ/view?usp=sharing" alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center px-0">
        <img
          src="https://drive.google.com/file/d/1MD5VvxJsnAQ0XUDKxwQc4KChocCcLBVZ/view?usp=sharing"
          alt="companies"
          className="py-5"
        />
      </div>
    </div>
  );
};

export default Trust;
