import { useState } from "react";
import { Helmet } from "react-helmet-async";

const CustomerService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-base-200 min-h-screen">
        <Helmet>
        <title>Customer Care</title>
        </Helmet>
      <div className="text-center text-white bg-purple-500 py-16">
        <h1 className="text-4xl font-extrabold">Customer Service</h1>
        <p className="text-sm mt-2">
          We are here to help! Find answers to common questions or reach out to
          us for support.
        </p>
      </div>

      <div className="w-3/4 mx-auto px-4 py-8">
        {/* FAQ Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-lg font-bold">
              How do I track my order?
            </div>
            <div className="collapse-content">
              <p>
                You will receive a tracking number via email once your order
                ships.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-lg font-bold">
              How can I return an item?
            </div>
            <div className="collapse-content">
              <p>
                You can initiate a return through your order history page or by
                contacting support.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-lg font-bold">
              Do you offer international shipping?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we ship to several countries. Please check our shipping
                policy for details.
              </p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="email"
                placeholder="Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="about"
                id="about"
                rows="5"
                style={{ resize: 'none' }}
                className=" block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
