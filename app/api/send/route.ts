import EmailTemplate, { EmailTemplateProps } from '@/components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const customerInfo = (await req.json()) as EmailTemplateProps;

    const email = customerInfo.email || 'noemail@nodomain.com';

    // data returns id from Resend system
    // { id: 'b26d385a-f369-4b10-961a-8fb19a50b086' }
    const { data, error } = await resend.emails.send({
      from: 'HlawSite <onboarding@resend.dev>',
      to: ['haikchalian@gmail.com'],
      subject: `Question from ${customerInfo.fullname}`,
      react: EmailTemplate(customerInfo),
    });

    if (error) {
      return NextResponse.json(
        {
          error: 'Sorry the contact us system is down, please try again later.',
        },
        { status: 500 },
      );
    }

    // -- save for testing error state
    // return NextResponse.json(
    //   {
    //     error: 'Sorry the contact system is down now, please try again later.',
    //   },
    //   { status: 500 },
    // );

    return new NextResponse(JSON.stringify(customerInfo), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
