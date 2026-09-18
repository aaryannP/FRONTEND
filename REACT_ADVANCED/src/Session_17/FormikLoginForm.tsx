import { Formik, Form } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});

export default function FormikLoginForm() {
  return (
    <div className="p-5 border border-gray-300 mb-5">
      <h2 className="text-xl font-bold mb-4">Task 2 & 3: Formik + Yup Login</h2>
      
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log("Formik Submitted:", values);
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form className="flex flex-col gap-3 max-w-75">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
            {touched.email && errors.email ? (
              <div className="text-red-500 text-sm">{errors.email}</div>
            ) : null}

            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
            {touched.password && errors.password ? (
              <div className="text-red-500 text-sm">{errors.password}</div>
            ) : null}

            <button type="submit" className="bg-blue-500 text-white py-2 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
