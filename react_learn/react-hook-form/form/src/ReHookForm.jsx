import React from "react";
import { useForm } from "react-hook-form";

function ReHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
        fullname:'rj the leagend',
        email:  "rj@exmaple.com",
        phone: '123-123-12',
        
    }
  });

  const onsubmit = (data) => {
    console.log("✅ From data Submittied:", data);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Job Application Form
        </h2>
        {/* Name */}
        <div>
          <label className="block font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            {...register("fullname", { required: "Name is required" })}
            className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm"> {errors.fullname.message}</p>
          )}
        </div>

        {/*Email*/}
        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required don't you know that",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invaild email address",
              },
            })}
            className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/*Phone Numebr */}
        <div>
          <label className="block font-medium text-gray-700">
            {" "}
            Phone Number
          </label>

          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              minLength: { value: 10, message: "Must be at least 10 digits" },
            })}
            className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        {/* Gender */}
        <div>
          <label className="block font-medium text-gray-700">Gender</label>
          <select
            {...register("gender", { required: "Please select a gender" })}
            className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}

          {/* Bio */}
          <div>
            <label className="block font-medium text-gray-700">Short Bio</label>
            <textarea
              {...register("bio")}
              rows="4"
              className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Tell us a bit about yourself"
            ></textarea>
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("terms", { required: "You must accept the terms" })}
              className="w-4 h-4"
            />
            <label className="text-sm text-gray-700">
              I accept the terms and conditions
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReHookForm;
