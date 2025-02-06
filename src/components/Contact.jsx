function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 border-b-2 border-white"
    >
      <div className="container mx-auto text-center max-w-screen-md p-6">
        <h2 className="text-4xl mb-8 text-white font-mono font-semibold">Contact Us</h2>
        <p className="text-xl text-white mb-6 font-mono">
          We'd love to hear from you! Feel free to reach out with any questions
          or inquiries.
        </p>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
