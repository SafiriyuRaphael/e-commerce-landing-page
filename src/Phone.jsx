import React from "react";

const Phone = () => {
  return (
    <div className="relative w-1/2">
      <div className="border-8 rounded-3xl border-gray-300 flex flex-col px-4 pt-4 pb-1 gap-3 justify-self-center relative bg-white z-50">
        <div className="flex justify-between">
          <img src="/Phone/Apps.png" alt="menu" className="size-8" />
          <img src="/Phone/profile.png" alt="profile" />
        </div>
        <h4 className="">Match your style</h4>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-300 placeholder:text-black rounded-2xl"
        />
        <div className="flex justify-between">
          <p className="rounded-xl px-1 md:px-3 bg-yellow-400">Trending Now</p>
          <p className="rounded-xl px-1 md:px-3 bg-gray-300">All</p>
          <p className="rounded-xl px-1 md:px-3 bg-gray-300">New</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <figure>
            <img src="/Phone/phone.png" alt="pic" className="size-32" />
            <figcaption>
              <h6>Polkadot Red Dress</h6>
              <p>Rs. 1,499.00</p>
            </figcaption>
          </figure>
          <figure>
            <img src="/Phone/phone1.png" alt="pic" className="size-32" />
            <figcaption>
              <h6>Striped Pink Dress</h6>
              <p>Rs. 1,299.00</p>
            </figcaption>
          </figure>
          <figure>
            <img src="/Phone/phone2.png" alt="pic" className="size-32" />
          </figure>
          <figure>
            <img src="/Phone/phone3.png" alt="pic" className="size-32" />
          </figure>
        </div>
        <div className="flex justify-between px-2 py-3">
          <img src="/Phone/tab.png" alt="" className="size-8" />
          <img src="/Phone/tab1.png" alt="" className="size-8" />
          <img src="/Phone/tab2.png" alt="" className="size-8" />
          <img src="/Phone/tab3.png" alt="" className="size-8" />
        </div>
      </div>
      <div className="absolute border-2 border-black/50 h-[38rem] w-[38rem] rounded-full top-1 -left-1 -z-50 hidden xl:block"></div>
      <div className="absolute border-2 border-black/50 h-[34rem] w-[34rem] rounded-full top-10 left-8 -z-20 hidden xl:block"></div>

      <div className="absolute border-2 border-black/50 h-[30rem] w-[30rem] rounded-full top-16 left-16 -z-20 hidden xl:block"></div>
    </div>
  );
};

export default Phone;
