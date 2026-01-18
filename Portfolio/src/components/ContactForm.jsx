import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_8j3rm49",
        "template_nop3mcg",
        formRef.current,
        "7peuxLtO995tw7d-1"
      )
      .then(() => {
        setStatus("Message sent. I’ll reply within 24 hours.");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <form ref={formRef} onSubmit={sendMessage} className="space-y-4">
      
      <input
        type="text"
        name="from_name"
        placeholder="Your name"
        required
        className="w-full px-4 py-3 bg-[#262b33] text-white rounded-md outline-none"
      />

      <input
        type="email"
        name="from_email"
        placeholder="Your email"
        required
        className="w-full px-4 py-3 bg-[#262b33] text-white rounded-md outline-none"
      />

      <textarea
        name="message"
        rows="5"
        required
        placeholder="Type your message here..."
        className="w-full px-4 py-3 bg-[#262b33] text-white rounded-md outline-none resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-primary text-white bg-[#C778DD] font-medium rounded-md disabled:opacity-50 hover:cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && <p className="text-sm text-primary mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;
