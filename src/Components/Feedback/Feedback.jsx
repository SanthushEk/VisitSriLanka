import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import image1 from "../../assets/Districts/Colombo/Gallface.jpg"; // Replace with actual images
import image2 from "../../assets/Districts/Kandy/PeraGarden.jpg"; // Replace with actual images
import image3 from "../../assets/Districts/Matara/MIRISSA.jpg"; // Replace with actual images

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailPattern.test(value) ? "" : "Please enter a valid email address.");
    }
  };

  const isFormValid = formData.name && formData.email && formData.message && !emailError;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);
    emailjs
      .send("service_s3uezqv", "template_0b6g3wq", formData, "-SER1osolr9461ojz")
      .then(
        () => {
          setSuccessMessage("Thank you for reaching out! We will get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          setErrorMessage("Failed to send your message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="flex min-h-[70vh] bg-gray-50">
      {/* Left Side: Image Gallery */}
      <div className="flex-1 p-6 sm:p-8 grid grid-cols-3 gap-4 hidden sm:grid">
        <img src={image1} alt="Image 1" className="w-full h-full object-cover rounded-md" />
        <img src={image2} alt="Image 2" className="w-full h-full object-cover rounded-md" />
        <img src={image3} alt="Image 3" className="w-full h-full object-cover rounded-md" />
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex-1 p-10 sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="title-font mb-4 font-ScopeOne text-3xl font-semibold sm:text-4xl">
            Give Us A Feedback
            <hr className="w-20 mx-auto border-t-4 border-yellow-500" />
          </h1>

          <p className="mx-auto text-base font-ScopeOne leading-relaxed text-gray-500 font-extrabold">
            Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div className="mb-10">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-6 bg-transparent text-sm leading-7 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
              >
                Name
              </label>
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-10">
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-6 bg-transparent text-sm leading-7 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
              >
                Email
              </label>
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-10">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                className="peer h-28 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 -top-6 bg-transparent text-sm leading-7 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
              >
                Your Feedback/Message
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full p-2">
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>

        {successMessage && <p className="text-green-500 mt-4 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

        {/* Social Media Section */}
        <div className="mt-6 p-4 rounded-md flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:bg-black hover:text-yellow-500 p-2 rounded-full transition-all"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:bg-black hover:text-yellow-500 p-2 rounded-full transition-all"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:bg-black hover:text-yellow-500 p-2 rounded-full transition-all"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:bg-black hover:text-yellow-500 p-2 rounded-full transition-all"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
