"use client";
import { useState } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { LuAsterisk } from "react-icons/lu";
const axios = require("axios");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/appointments",
        formData
      );
      alert(`${response.data.customerName}, ${response.data.message}`);
      console.log(response);
    } catch (error: any) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <div className="w-3/5 mx-auto">
      <h1 className="text-center w-3/5 block mx-auto border-b border-gray-500 text-primary font-bold md:text-md lg:text-2xl mb-2 pb-2">
        Schedule An Appointment
      </h1>
      <div id="">
        <p className="px-4">
          Welcome to our appointment booking page! Please fill out the form
          below to schedule an appointment with us. We strive to provide
          excellent service and accommodate your scheduling needs as best as we
          can. Please provide accurate information to ensure that we can assist
          you effectively. Once you submit the form, our team will review your
          appointment request and reach out to confirm the details.
        </p>
        <br />
        <p className="px-4">
          Already have an appointment? Get it{" "}
          <a style={{ color: "red" }} href="/appointment/info">
            <strong>here</strong>
          </a>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        method="post"
        id="form"
        className="w-full space-y-4 mt-2 border-gray-200  rounded-md block mx-auto py-3 px-4 max-w-[900px]"
      >
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
            pattern="[0-9]{10,11}"
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
