'use client';
import { useFormStatus, useFormState } from 'react-dom';
import { sendContactInfo } from '../actions/contact';

const initialState = {
  type: '',
  message: '',
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} disabled={pending}>
      Submit
    </button>
  );
}

/**
 * displays contact us page
 * @returns react jsx element
 */
export default function ContantUs() {
  const [state, formAction] = useFormState(sendContactInfo, initialState);

  return (
    <main>
      <div className="bg-[url('/banner-books.jpg')] bg-cover bg-center">
        <div className="bg-primary/70 p-10">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-form mt-10 rounded-lg bg-white p-5 text-gray-900">
        <form action={formAction}>
          <h2 className="mb-5 border-b border-primary/30 font-serif text-3xl font-bold text-primary">
            Tell Us Your Issue
          </h2>
          {state?.type && (
            <div
              className={
                state?.type === 'success' ? 'success-message' : 'error-message'
              }
              role="alert"
            >
              {state?.message}
            </div>
          )}

          <div className="m-10 border p-10 font-mono">
            state --- {state && JSON.stringify(state)}
          </div>

          <div className="mb-4">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Full Name"
            />
            {state?.errors?.fullname && (
              <ErrorText field={state?.errors?.fullname[0]} />
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="phone">
              Phone Number
              <span className="text-xs text-gray-500"> (555-555-5555)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="555-555-5555"
              required
            />
            {state?.errors?.phone && (
              <ErrorText field={state?.errors?.phone[0]} />
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            {state?.errors?.email && (
              <ErrorText field={state?.errors?.email[0]} />
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="referredby">How did you hear about us?</label>
            <input
              type="text"
              id="referredby"
              name="referredby"
              placeholder="Referred By"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="details">Tell us about your case</label>
            <textarea
              id="details"
              name="details"
              placeholder="Tell us about your case"
              required
            ></textarea>
            {state?.errors?.details && (
              <ErrorText field={state?.errors?.details[0]} />
            )}
          </div>

          <SubmitButton />
        </form>
      </div>
    </main>
  );
}

const ErrorText = ({ field }: { field: string }) => {
  return <p className="pl-2 text-sm text-red-700">{field}</p>;
};
