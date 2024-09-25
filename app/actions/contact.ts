'use server';
import { z } from 'zod';

const phoneRegex = new RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
);

const contactSchema = z.object({
  fullname: z.string().min(2).max(200),
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
  const cleanData = {
    fullname: formData.get('fullname'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    referredby: formData.get('referredby'),
    details: formData.get('details'),
  };

  const result = contactSchema.safeParse(cleanData);

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
    body: JSON.stringify(cleanData),
  });

  const emailResult = await response.json();

  if (emailResult?.error) {
    return {
      type: 'error',
      message: emailResult?.error,
    };
  }

  return {
    type: 'success',
    message: `Thank you ${emailResult.fullname}, your question was sent. Someone will be in contanct with you shortly`,
  };
}
