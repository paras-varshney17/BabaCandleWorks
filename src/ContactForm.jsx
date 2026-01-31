import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

export default function ContactForm({contactref}) {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      email: "",
      desc: ""
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      contact: Yup.string()
        .min(10, "Enter valid number")
        .required("Contact required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email required"),
      desc: Yup.string().required("Message required")
    }),

    onSubmit: (values, { resetForm }) => {
      emailjs.send(
        "service_p37fwj6",
        "template_bqxprp1",
        values,
        "iDXHvnzta4UvU_h3J"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        resetForm();
      })
      .catch(() => {
        alert("Something went wrong ❌");
      });
    }
  });

  
  return (
    <section ref={contactref} className="px-4 sm:px-6 md:px-8 py-24" >
    <div className=" flex items-center justify-center ">

      {/* Card */}
      <div className="w-full max-w-lg bg-accent backdrop-blur rounded-3xl shadow-2xl p-8">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-text mb-2">
          Contact Us
        </h2>
        <p className="text-center text-text mb-6">
          We’d love to hear from you
        </p>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-primary bg-background rounded-lg focus:ring-2 focus:ring-goldHover outline-none text-text"
            />

            {formik.errors.name && formik.touched.name && (
              <p className="text-error text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Contact */}
          <div>
            <input
              type="text"
              name="contact"
              placeholder="Phone Number"
              value={formik.values.contact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border text-text border-primary bg-background rounded-lg focus:ring-2 focus:ring-goldHover outline-none"

            />

            {formik.errors.contact && formik.touched.contact && (
              <p className="text-error text-sm mt-1">{formik.errors.contact}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 text-text border border-primary bg-background rounded-lg focus:ring-2 focus:ring-goldHover outline-none"
            />

            {formik.errors.email && formik.touched.email && (
              <p className="text-error text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="desc"
              rows="5"
              placeholder="Write your message..."
              value={formik.values.desc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 text-text border border-primary bg-background rounded-lg resize-none focus:ring-2 focus:ring-goldHover outline-none"
            />

            {formik.errors.desc && formik.touched.desc && (
              <p className="text-error text-sm mt-1">{formik.errors.desc}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-goldHover text-background font-semibold py-3 rounded-lg transition duration-300 shadow-md cursor-pointer"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
    </section>
  );
  
}
