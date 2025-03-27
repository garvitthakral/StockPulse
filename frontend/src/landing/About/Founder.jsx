import React from "react";

const Founder = () => {
  return (
    <div className="px-64">
      <div className="flex justify-center items-center pt-8 pb-18">
        <h1 className="text-4xl font-semibold">Founder</h1>
      </div>
      <div className="flex">
        <div>
          <img
            src="https://drive.google.com/file/d/1mgGus9mGr9xgp2Qs2FTV5XWWZ6KeylwR/view?usp=sharing"
            alt="founder"
            className=" max-w-[75%] rounded-full mx-10"
          />
          <div className="flex flex-col items-center justify-center mt-5 mr-14">
            <h3 className=" text-xl font-semibold">Garvit Thakral</h3>
            <h4 className="text-lg font-light">Founder, CEO</h4>
          </div>
        </div>

        <div className="w-6/12 text-xl font-light m-12">
          <p>
            Garvit bootstrapped and founded Stock Pulse in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Stock Pulse has changed the landscape of the Indian broking
            industry.
          </p>
          <br />
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <br />
          <p>Playing basketball is his zen.</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Founder;
