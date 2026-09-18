import { Formik, Form } from "formik";
import * as Yup from "yup";

const PlaylistSchema = Yup.object().shape({
  name: Yup
    .string()
    .required("Playlist name is required"),
  description: Yup
    .string(),
  genre: Yup
    .string()
    .required("Please select a genre")
});

export default function PlaylistForm() {
  return (
    <div className="p-5 border border-gray-300 mb-5">
      <h2 className="text-xl font-bold mb-4">Task 4: Spotify Playlist Form</h2>
      
      <Formik
        initialValues={{ name: "", description: "", genre: "" }}
        validationSchema={PlaylistSchema}
        onSubmit={(values) => {
          console.log("Playlist Created:", values);
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form className="flex flex-col gap-3 max-w-75">
            
            <label>Playlist Name:</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
            {touched.name && errors.name ? (
              <div className="text-red-500 text-sm">{errors.name}</div>
            ) : null}

            <label>Description (Optional):</label>
            <textarea
              name="description"
              value={values.description}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />

            <label>Genre:</label>
            <select
              name="genre"
              value={values.genre}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            >
              <option value="">Select a genre</option>
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="hiphop">Hip Hop</option>
            </select>
            
            {touched.genre && errors.genre ? (
              <div className="text-red-500 text-sm">{errors.genre}</div>
            ) : null}


            <button type="submit" className="bg-green-500 text-white py-2 rounded font-bold mt-2">
              Create Playlist
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
