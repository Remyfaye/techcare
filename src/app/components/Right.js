import React from "react";

const Right = () => {
  return (
    <div className="lg:w-[25%]">
      <section className="bg-white rounded-2xl p-3 lg:mt-0 mt-5 ">
        <div className="flex flex-col items-center gap-3">
          <img className="w-[10rem]" src="/jess.png" alt="img" />
          <h1 className="font-bold text-xl">Jessica Taylor</h1>
        </div>

        <div className="mt-10 mb-10 ">
          <div className="flex items-center gap-3 mb-5">
            <img src="/icons/cal.png" alt="img" />
            <div>
              <p className="text-sm">Date of Birth</p>
              <p className="font-bold text-sm">August 23, 1996</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <img src="/icons/gen.png" alt="" />
            <div>
              <p className="text-sm">Gender</p>
              <p className="font-bold text-sm">Female</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <img src="/icons/phoneicon.png" alt="" />
            <div>
              <p className="text-sm">Contact info</p>
              <p className="font-bold text-sm">(415) 555-1234</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <img src="/icons/phoneicon.png" alt="" />
            <div>
              <p className="text-sm">Emergency contact</p>
              <p className="font-bold text-sm">(415) 555-1234</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <img src="/icons/in.png" alt="" />
            <div>
              <p className="text-sm">Insurance Provider</p>
              <p className="font-bold text-sm">Sunrise Health Assurance</p>
            </div>
          </div>
        </div>

        <button className=" p-3 rounded-full flex justify-center mt-5 mx-auto bg-emerald-200">
          Show All Information
        </button>
      </section>

      <section className="bg-white rounded-2xl p-3 mt-5">
        <h1 className="font-bold mb-4 text-2xl">Lab Reaults</h1>

        <div>
          <div className="flex mb-4 items-center justify-between">
            Blood tests <img className="" src="/download.png" alt="img" />
          </div>
          <div className="flex mb-4  items-center justify-between">
            Radiography reports{" "}
            <img className="" src="/download.png" alt="img" />
          </div>
          <div className="flex mb-4  items-center justify-between">
            x-rays tests <img className="" src="/download.png" alt="img" />
          </div>
          <div className="flex items-center justify-between">
            urine tests <img className="" src="/download.png" alt="img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Right;
