# Session 17: Form Handling with Formik and Yup

This session demonstrates how to manage form state and validation using Formik and Yup, comparing them to standard React state management.

## Tasks Overview

### Task 1: Basic Login Form (useState)
- **Component:** `BasicLoginForm.tsx`
- **Description:** A simple login form capturing email and password using React's built-in `useState`. This serves as a baseline to understand manual form handling and submission via `onSubmit`.

### Tasks 2 & 3: Formik + Yup Login Form
- **Component:** `FormikLoginForm.tsx`
- **Description:** 
  - Converts the basic login form to use Formik for state management (`<Formik>`, `<Form>`, `handleChange`, `values`).
  - Integrates Yup for declarative validation (valid email format, min 6 chars for password).
  - Displays dynamic error messages automatically tracked via Formik's `touched` state so errors only show after a field is interacted with.

### Task 4: Spotify Playlist Creation Form
- **Component:** `PlaylistForm.tsx`
- **Description:** A robust form containing different input types (text, textarea, select).
  - **Name:** Required string field.
  - **Description:** Optional text area.
  - **Genre:** Required select dropdown.
  - Fully validated using a Yup schema with corresponding conditional error displays.

### Task 5: Manual vs Formik Analysis
Here are 3 core reasons why Formik and Yup make form development cleaner and easier to maintain compared to plain `useState`:

1. **No More Messy State:** Instead of creating a `useState` hook for every single input and manually wiring them up, Formik encapsulates all field states into one cohesive `values` object automatically.
2. **Built-in Validation Logic:** Manually validating formats and lengths inside a `handleSubmit` function gets chaotic fast. Yup lets you declare validation rules cleanly in one readable, chainable schema object.
3. **Easy Error Tracking (`touched`):** Tracking whether a user has blurred a field manually requires a bunch of `onBlur` handlers and extra state variables to prevent yelling at the user before they even start typing. Formik provides the `touched` object out of the box to solve this seamlessly.
