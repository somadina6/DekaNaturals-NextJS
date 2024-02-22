"use client";
const axios = require("axios");
const dotenv = require("dotenv");
import { useState } from "react";
import "./styles.css";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";

dotenv.config();
const inputStyle =
  "border border-gray-400 block rounded-md p-1 hover:border-black ";

const Page = () => {
  const initFormData = {
    appointment_id: "",
    lastname: "",
  };

  const [formData, setFormData] = useState(initFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const baseUrl =
      process.env.NODE_ENV == "development"
        ? "http://localhost:4000"
        : "https://deka-naturals-express.vercel.app";
    console.log(baseUrl);
    e.preventDefault();
    try {
      const response = await axios.get(`${baseUrl}/api/appointments`, {
        params: {
          id: formData.appointment_id,
          lastname: formData.lastname,
        },
      });
      alert(response.data.message);
    } catch (err: any) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert(err.message);
      }
    }
  };
  return (
    <div className="w h-screen">
      <div id="main-container" className="mt-4 mx-auto w-3/5 block h-full">
        <h2 className="text-xl text-primary block mx-auto mt-8 text-center mb-2">
          Retrieve Your Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          method="post"
          id="form"
          className="border p-4 rounded-md items-center border-1"
        >
          <h3 className="text-center mb-2">
            Retrieve your appointment details using your Appointment ID (ex:
            2033) and Last Name:
          </h3>
          <div className="flex w-1/2 mx-auto justify-between border-1">
            <div>
              <label htmlFor="appointment_id">Appointment ID</label>
              <input
                className={inputStyle}
                id="appointment_id"
                type="text"
                name="appointment_id"
                placeholder="1011"
                required
                onChange={handleChange}
                value={formData.appointment_id}
              />
            </div>
            <div>
              <label htmlFor="name">Last Name</label>
              <input
                id="name"
                type="text"
                name="lastname"
                className={inputStyle}
                placeholder="John Doe"
                required
                onChange={handleChange}
                value={formData.lastname}
              />
            </div>
          </div>
          <ButtonPrimary>Submit</ButtonPrimary>
        </form>
      </div>
    </div>
  );
};

export default Page;
