import React from "react";

const Header = () => {
  return (
    <header className="flex py-2 px-5 justify-between items-center bg-white rounded-full">
      <div>
        <img src="/testlogo.svg" alt="img" />
      </div>

      <ul className="lg:flex gap-5 hidden text-[14px]">
        <li className="flex items-center gap-1">
          {" "}
          <img src="/header/home.png" alt="img" />
          Overview
        </li>

        <li className="flex items-center gap-1 bg-[#01F0D0] rounded-full p-2">
          <img src="/header/people.png" alt="img" /> Patients
        </li>

        <li className="flex items-center gap-1">
          <img src="/header/card.png" alt="img" /> Schedule
        </li>

        <li className="flex items-center gap-1">
          <img src="/header/chat.png" alt="img" /> Messages
        </li>

        <li className="flex items-center gap-1">
          <img src="/header/card.png" alt="img" /> Transactions
        </li>
      </ul>

      <div className="lg:flex hidden items-center gap-3 text-[14px]">
        <img src="/top.png" alt="alt" />
        <div>
          <p>Dr joe simmons</p>
          <p className="text-gray-400">General Practitioner</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
