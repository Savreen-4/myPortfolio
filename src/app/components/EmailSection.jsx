"use client";
import React, { useState, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Email is required.");
    } else if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);

    if (!value.trim()) {
      setMessageError("Message is required.");
    } else {
      setMessageError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const subject = form.subject.value;

    let hasError = false;

    if (!email) {
      setEmailError("Email is required.");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    }

    if (!message.trim()) {
      setMessageError("Message is required.");
      hasError = true;
    }

    if (hasError) return;

    const data = { email, subject, message };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const data1 = await response.json();

    if (response.ok) {
      toast.success("✅ Email sent successfully!");
      setEmail("");
      setMessage("");
    } else {
      toast.error(`❌ Failed to send email: ${data.message}`);
    }
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Savreen-4">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/savreen-tiwana-86b13018b/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className={`bg-[#18191E] border ${
                  emailError ? "border-red-500" : "border-[#33353F]"
                } placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
                placeholder="jacob@google.com"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            {/* Subject Field */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleMessageChange}
                className={`bg-[#18191E] border ${
                  messageError ? "border-red-500" : "border-[#33353F]"
                } placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
                placeholder="Let's talk about..."
              />
              {messageError && (
                <p className="text-red-500 text-sm mt-1">{messageError}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
