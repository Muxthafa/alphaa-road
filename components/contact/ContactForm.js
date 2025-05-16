export default function ContactForm({ formAction, state, isPending }) {
  return (
    <form action={formAction} className="bg-gray-50 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#0A2647] mb-6">Send Message</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFB800]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFB800]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFB800]"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFB800]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFB800]"
        ></textarea>

        {state?.status === "success" && (
          <div className="text-green-600">Message sent successfully!</div>
        )}
        {state?.status === "error" && (
          <div className="text-red-600">
            Failed to send message. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#FFB800] text-[#0A2647] px-8 py-3 rounded-lg font-bold hover:bg-[#ffc93c] transition duration-300 disabled:opacity-50"
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
