import appointmentType from "@/types/appointmentTypes";
import React from "react";

const AppointmentOrder: React.FC<{ appointmentData: appointmentType }> = ({
  appointmentData,
}) => {
  const { firstname, lastname, phone, email, message } = appointmentData;

  return (
    <>
      <h2 className="text-primary sm:text-md md:text-xl block text-center">
        Appointment Confirmation Page
      </h2>
      <div className="mt-8 w-4/5 mx-auto">
        <p>Hello {firstname},</p>
        <p>Your Message:</p>
        {message}
      </div>
    </>
  );
};

export default AppointmentOrder;
