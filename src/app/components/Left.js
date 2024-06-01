"use client";
import React, { useEffect, useState } from "react";

const Left = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let username = "coalition";
      let password = "skills-test";
      let auth = btoa(`${username}:${password}`);

      // Authenticate (dummy API)
      fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      })
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then(function (data) {
          console.log(data);
          setUserData(data);
        })
        .catch(function (error) {
          console.warn(error);
        });
    };
    fetchData();
  }, [userData]);
  return (
    <section className="bg-white rounded-2xl p-3  lg:w-[25%]">
      <div>
        <h1 className="font-bold mb-4 text-2xl">Patients</h1>
        <img src="" alt="" />
      </div>

      <div>
        {userData?.map((item) => (
          <div className="flex items-center gap-5 mb-7">
            <img className="w-[4rem]" src={item.profile_picture} alt="" />
            <div>
              <h3 className="font-bold text-sm">{item.name}</h3>
              <span>{item.gender}</span>
              <span className="ml-1">{item.age}</span>
            </div>
          </div>
        ))}

        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Left;
