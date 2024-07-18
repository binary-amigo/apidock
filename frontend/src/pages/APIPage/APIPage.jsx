import React, { useEffect, useState } from "react";
import axios from "axios";

const APIPage = () => {
  const [apiList, setApiList] = useState([]);
  const [selectedAPI, setSelectedAPI] = useState([]);

  const handleSelect = (e) => {
    const key = e.target.attributes.listid.value;
    document.getElementById(`${key} hidden`).classList.toggle("hidden");
  };

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/apiList");
        setApiList(res.data.apis);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAPIs();
  }, []);

  return (
    <div className="h-auto w-screen bg-[#e9ddf7] justify-center items-center pt-10 ">
      {apiList.map((api, index) => (
        <div onClick={handleSelect} key={index}>
          <div
            listid={index}
            value={api.name}
            className="flex flex-row items-center justify-start p-4 border-t-2
          border-slate-500 hover:bg-purple-400 hover:cursor-pointer"
          >
            <h1 className="text-3xl font-bold text-[#4a154b] pr-4">
              {api.name}
            </h1>
            <p className="text-lg text-[#4a154b]">{api.description}</p>
          </div>
          <div
            id={`${index} hidden`}
            className="flex-row items-center justify-start  border-t-2
          border-slate-500 hover:bg-slate-200 bg-white hover:cursor-pointer hidden"
          >
            {Object.entries(api.url).map(([key, value], index) => (
              <div key={index} className="flex justify-even   border-b-2 ">
                <div className="w-1/12 bg-red-500 px-4">
                  <h1 className="">{key.toUpperCase()}</h1>
                </div>
                <div className="bg-blue-200 w-full px-4">
                  <h1>{value}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default APIPage;
