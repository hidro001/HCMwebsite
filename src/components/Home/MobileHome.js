import React from "react";
import MobileApp from "../../assets/images/MobileApp.webp";

const HRManagementApp = () => {
  return (
    <div className="min-h-screen pb-20 px-40 select-none">
      <div className="mx-auto pb-12 select-none">
        <h1 className="text-center text-4xl font-bold">
          2.5 Million Employees
        </h1>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={MobileApp}
              alt="HR Management App"
              className="w-full max-w-xs rounded-lg object-cover"
            />
          </div>

          {/* Features List */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Simplified leave & attendance",
                description:
                  "Let employees clock in or take leave- remotely, on field or in-office. Embrace self-accountability.",
              },
              {
                title: "Tax and Expense - in 2 Clicks",
                description:
                  "Let employees manage tax declarations and proofs. File and update expenses in 2 clicks.",
              },
              {
                title: "A Culture of Recognition",
                description:
                  "Give and Receive Praises to build a culture of recognition. Take a moment to take it in.",
              },
              {
                title: "Approvals from a single window",
                description:
                  "Enable managers to approve or reject requests from a single window",
              },
              {
                title: "Adaptable to employee preferences",
                description:
                  "Each employee can find their preferred features on the main screen",
              },
              {
                title: "Faster resolution of employee issues",
                description:
                  "A reliable help-desk with super-easy process for raising and resolving issues",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRManagementApp;
