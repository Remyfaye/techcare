import React from "react";

const Middle = () => {
  return (
    <div>
      <section className="bg-white lg:h-screen rounded-2xl p-3 lg:mt-0 mt-5 ">
        <h1 className="font-bold">Diagnosis History</h1>

        <div className="mt-5 gap-7 bg-black/5 inset-0 p-3 rounded-2xl lg:flex">
          <div>
            <div className="flex justify-between mb-5">
              <h1 className="font-bold">Blood Pressure</h1>
              <p className="text-sm">Last 6 months</p>
            </div>
            <img className="w-[23rem]" src="/chart4.png" alt="" />
          </div>
          <div className="text-sm">
            <div className="border-b-2 pb-5 mb-5">
              <p className="rounded-full w-[20px] h-[20px] bg-pink-900"></p>
              <p>160</p>
              <p>Higher Than Average</p>
            </div>

            <div>
              <p className="rounded-full w-[20px] h-[20px] bg-blue-900"></p>
              <p>160</p>
              <p>Higher Than Average</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-3 p-2 rounded-xl mt-3">
          <div className="bg-[#E0F3FA] gap-2 p-2 rounded-xl flex flex-col justify-center items-center">
            <img src="/organs/lungs.png" alt="img" />
            <p className="">Lung Rate</p>
            <h1>30 bpm</h1>
          </div>

          <div className="bg-[#FFE6E9] p-2 rounded-xl flex flex-col justify-center items-center gap-2">
            <img src="/organs/temp.png" alt="img" />
            <p>Temperature</p>
            <h1>98.6 of</h1>
          </div>

          <div className="bg-[#FFE6F1] p-2 rounded-xl flex flex-col justify-center items-center gap-2">
            <img src="/organs/heart.png" alt="img" />
            <p>Heart Rate</p>
            <h1>78 bpm</h1>
          </div>
        </div>
      </section>

      <section className="bg-white text-sm  lg:h-screen rounded-2xl p-3 mt-5 ">
        <h1 className="font-bold mb-5 text-xl">Diagnostic list</h1>
        <div className="bg-black/10 inset-p px-3 py-2 rounded-full">
          <div className="flex justify-between">
            <p>problem diagnostics</p>
            <p>Description</p>
            <p>Status</p>
          </div>
        </div>

        <div className="border-b inset-p px-3 py-2 mt-10 flex justify-between">
          <p>Hypertension</p>
          <p>Chronic high blood pressure</p>
          <p>cured</p>
        </div>

        <div className="border-b inset-p px-3 py-2 mt-10 flex justify-between">
          <p>Type 2 Diabetes</p>
          <p>Insulin resistance </p>
          <p>inactive</p>
        </div>

        <div className="border-b inset-p px-3 py-2 mt-10 flex justify-between">
          <p>Asthma</p>
          <p>Recurrent episodes of constriction</p>
          <p>cured</p>
        </div>
      </section>
    </div>
  );
};

export default Middle;
