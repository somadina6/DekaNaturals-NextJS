"use client";
import axios from "../../../../src/config/axios.config";
const dotenv = require("dotenv");
import { useState } from "react";
import "./styles.css";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import appointmentType from "@/types/appointmentTypes";
import AppointmentOrder from "@/components/Appointment/AppointmentOrder";
import { InfinitySpin } from "react-loader-spinner";

dotenv.config();
const inputStyle =
  "border border-gray-400 block rounded-md p-1 hover:border-black ";

const Page = () => {
  const initFormData = {
    appointment_id: "",
    lastname: "",
  };

  const [errorStatus, setErrorStatus] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<String>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [successStatus, setSuccessStatus] = useState<Boolean>(false);
  const [formData, setFormData] = useState(initFormData);
  const [appointmentDataRetrieved, setAppointmentData] =
    useState<appointmentType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const config = {
      url: "/api/appointments",
      params: {
        id: formData.appointment_id,
        lastname: formData.lastname,
      },
    };
    setLoading(true);
    setErrorStatus(false);
    setSuccessStatus(false);

    try {
      const response = await axios(config);
      setLoading(false);
      setSuccessStatus(response.data.success);
      setAppointmentData(response.data.appointmentDocument);
      console.log(successStatus);
      console.log(appointmentDataRetrieved);
    } catch (err: any) {
      setErrorStatus(true);
      setLoading(false);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage(`Error fetching appointment data: ${err.message}`);
      }
    }
  };

  return (
    <div id="maindiv" className="">
      <div id="main-container" className="mt-4 mx-auto w-3/5 block h-full">
        <h2 className="text-xl text-primary block mx-auto mt-8 text-center mb-2">
          Retrieve Your Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          method="post"
          id="form"
          className="border p-4 rounded-md items-center "
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
        {loading && (
          <div className="flex items-center justify-center mx-auto ">
            <InfinitySpin width="200" color="#4fa94d" />
          </div>
        )}

        {errorStatus && (
          <p className="text-red-700 mt-3 text-center mx-auto text-lg sm:text-md">
            {errorMessage}
          </p>
        )}

        {successStatus && appointmentDataRetrieved && (
          <div className="mt-3">
            <AppointmentOrder appointmentData={appointmentDataRetrieved} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
