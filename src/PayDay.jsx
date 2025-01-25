import React from 'react';

const PayDay = () => {
  return (
    <section className="bg-yellow-300 h-full md:h-[70vh] w-screen py-4 flex sm:flex-row flex-col my-9">
      <div
        className='sm:w-1/2 bg-[url("/payday.png")] bg-no-repeat bg-top bg-cover  md:bg-contain w-full h-[50vh] md:h-full'
        role="img"
        aria-label="Payday Sale Banner"
      ></div>
      <div className="flex flex-col justify-center gap-6 items-start sm:w-1/2 p-4">
        <h1 className="md:text-5xl flex flex-col self-center sm:self-start">
          <span className="clip bg-white block w-fit">PAYDAY</span> SALE NOW
        </h1>
        <p>Spend minimal $100 to get a 30% off voucher code for your next purchase</p>
        <div>
          <b>1 June - 10 June 2021</b>
          <p>*Terms & Conditions apply</p>
        </div>
        <button
          className="bg-black text-white p-3 hover:bg-white hover:text-black"
          aria-label="Shop Now"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default PayDay;
