"use client";
import { useState } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { LuAsterisk } from "react-icons/lu";

const inputStyle = "border border-gray-400 rounded-md p-2 hover:border-black ";

const initFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}`);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        id="form"
        className="w-full md:w-3/5 space-y-4 mt-2 border-gray-200  rounded-md block mx-auto py-3 px-4 max-w-[900px]"
      >
        <h1 className="text-center w w-full w border-b border-gray-500 text-primary font-bold  text-md md:text-2xl  lg:text-4xl mb-2 pb-2">
          Schedule An Appointment
        </h1>
        <div className="flex flex-col">
          <label htmlFor="name">
            <span className="flex items-center">
              <LuAsterisk style={{ color: "red" }} />
              Name
            </span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={inputStyle}
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
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
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">
            <span className="flex items-center">
              <LuAsterisk style={{ color: "red" }} /> Phone
            </span>
          </label>
          <input
            type="tel"
            name="phone"
            className={inputStyle}
            id="phone"
            placeholder="08081234567"
            pattern="[0-9]{11}"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">
            <span className="flex items-center">
              <LuAsterisk style={{ color: "red" }} /> Message
            </span>
          </label>
          <textarea
            name="message"
            id="message"
            className={inputStyle}
            placeholder="Hello, I would like to book an appointment for..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <ButtonPrimary>Submit</ButtonPrimary>
      </form>
    </div>
  );
};

export default Appointment;
