'use server';
import { z } from 'zod';

const phoneRegex = new RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
);

const contactSchema = z.object({
  fullname: z.string().min(1).max(200),
  phone: z.string().regex(phoneRegex, 'area code plus number please'),
  email: z.string().email().max(200),
  details: z.string().min(10).max(5000),
});

type FormState = {
  type?: string;
  message: string;
  errors?: object;
};

export async function sendContactInfo(
  prevState: FormState,
  formData: FormData,
) {
  const result = contactSchema.safeParse({
    fullname: formData.get('fullname'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    details: formData.get('details'),
  });

  if (result.success === false) {
    return {
      type: 'error',
      message: 'Sorry there was an error, please fix',
      errors: result.error.formErrors.fieldErrors,
    };
  }

  const response = await fetch(process.env.RESEND_EMAIL_PATH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key: 'value', // Replace with your data
    }),
  });

  const res = await response.json();
  console.log(res);

  // Call postData when needed, for example in an event handler

  // const myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({ type: 'success', message: 'Your email was sent' });
  //   }, 3000);
  // });

  // return myPromise;

  return { type: 'success', message: 'Your email was sent' };
}
