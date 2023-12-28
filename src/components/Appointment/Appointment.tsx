import React from "react";

const inputStyle = "border border-gray-400 rounded-md p-2 hover:border-black ";

const Appointment: React.FC = () => {
  return (
    <div>
      <form className="w-3/5 space-y-4 mt-2 border-gray-200  rounded-md block mx-auto py-3 px-4">
        <h2 className="text-center text-black text-xl">
          Please fill out the information below
        </h2>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className={inputStyle}
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={inputStyle}
            placeholder="email@company.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            className={inputStyle}
            id="phone"
            placeholder="08081234567"
            pattern="[0-9]{11}"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className={inputStyle}
            placeholder="Hello, I would like to book an appointment for..."
          />
        </div>
        <button className="bg-black text-white rounded-md py-2 mx-auto block hover:bg-green-700 px-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Appointment;
