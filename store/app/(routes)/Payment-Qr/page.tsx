import React from "react";

const Payment = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">
        {" "}
        We apologize for any inconvenience caused, but kindly note that our
        cashless payment services are currently undergoing scheduled
        maintenance.
      </h1>
      <h2 className="text-lg font-semibold pt-6 pb-10">
        To ensure a seamless payment experience during this time, we
        respectfully request that you utilize the following QR-Code
      </h2>
      <h1>QR-Code</h1>
      <img src="" alt="" />
      <h1 className="text-lg font-semibold pt-8">
        To expedite the confirmation process and ensure timely delivery of your
        product, we kindly request
      </h1>
      <h1 className="text-lg font-semibold">
        that you take a screenshot of the transaction ID upon successful
        completion of your payment.
      </h1>
      <h1 className="text-lg font-semibold pb-5">
        Please forward this screenshot via WhatsApp to the following number:
      </h1>
      <h1>1234567890</h1>
      <h1 className="text-lg font-semibold pt-8">
        We will promptly verify your payment and provide you with confirmation
        of your product.
      </h1>

      <h1 className="text-lg font-semibold pt-6">
        We sincerely appreciate your understanding and cooperation in this
        matter. Should you
      </h1>
      <h1 className="text-lg font-semibold">
        have any questions or require further assistance, please do not hesitate
        to contact us. .
      </h1>
      <h1 className="text-lg font-semibold pt-10 pb-5">
        Thank you for your continued patronage
      </h1>
    </div>
  );
};

export default Payment;
