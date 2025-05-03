import React from "react";

function SimpleForm() {
  return (
    <>
      <h1>Form in React </h1>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <form className="bg-white p-6 md:p-10 rounded-2xl shadow-md w-full max-w-md space-y-6">
            <h2 className="text-2xl font-bold text-gray-800"> Contact Us </h2>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full border border-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"> Send message</button>
        </form>

      </div>
    </>
  );
}

export default SimpleForm;
