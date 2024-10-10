"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const month = data.get("month");
    const interactionDate = data.get("interaction-date");
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const leadResponse = data.get("lead-response");
    const status = data.get("status");
    const success = data.get("success");
    const followUp = data.get("follow-up");
    const comments = data.get("comments");
    const team = data.get("team");
    const country = data.get("country");
    const estimateFrom = data.get("estimate-from");
    const estimateTo = data.get("estimate-to");

    setLoading(true);
    setButtonText("Submitting..."); // Change button text to "Submitting..."

    try {
      const response = await axios.post("http://localhost:3000/api/sheets/insert", {
        data: [
          month,
          interactionDate,
          name,
          email,
          phone,
          leadResponse,
          status,
          success,
          followUp,
          comments,
          team,
          country,
          estimateFrom,
          estimateTo,
        ],
      });

      if (response.status === 200) {
        toast.success(response.data.message); // Show success toast
      } else {
        toast.error("Error inserting data!"); // Show error toast
        console.error("Error inserting data:", response.statusText);
      }
    } catch (error) {
      toast.error("Network error!"); // Show network error toast
      console.error("Network error:", error);
    } finally {
      setLoading(false);
      setButtonText("Submit"); // Reset button text
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-7xl p-4 bg-gray-800 rounded-lg shadow-lg">
        <form
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1">
            <label
              htmlFor="month"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Month
            </label>
            <input
              type="month"
              id="month"
              name="month"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="January"
              required
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="interaction-date"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Interaction Date
            </label>
            <input
              type="date"
              id="interaction-date"
              name="interaction-date"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="+1 234 567 890"
              required
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="lead-response"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Lead Response
            </label>
            <select
              id="lead-response"
              name="lead-response"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Lead Response</option>
              <option value="positive">Positive</option>
              <option value="neutral">Neutral</option>
              <option value="negative">Negative</option>
            </select>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Status</option>
              <option value="positive">Positive</option>
              <option value="neutral">Neutral</option>
              <option value="negative">Negative</option>
            </select>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="success"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Success
            </label>
            <select
              id="success"
              name="success"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Success Level</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="follow-up"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Follow Up
            </label>
            <select
              id="follow-up"
              name="follow-up"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Follow Up</option>
              <option value="done">Done</option>
              <option value="pending">Pending</option>
              <option value="not_needed">Not Needed</option>
            </select>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <label
              htmlFor="comments"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="3"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your comments"
            ></textarea>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="team"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Team
            </label>
            <select
              id="team"
              name="team"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Team</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Egypt">Egypt</option>
            </select>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Country"
              required
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="estimate-from"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Estimate From
            </label>
            <input
              type="text"
              id="estimate-from"
              name="estimate-from"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Estimate From"
              required
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="estimate-to"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Estimate To
            </label>
            <input
              type="text"
              id="estimate-to"
              name="estimate-to"
              className="w-full p-2.5 bg-gray-700 border border-gray-600 text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Estimate To"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="col-span-1 sm:col-span-2 lg:col-span-3 p-2.5 bg-blue-600 text-white rounded-lg focus:ring-blue-500 focus:ring-offset-blue-700"
          >
            {buttonText}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition: Bounce,
      />
    </div>
  );
};

export default Form;
