export interface EmailTemplateProps {
  fullname: string;
  phone: string;
  email: string;
  referredby: string | undefined;
  details: string;
}

export default function EmailTemplate({
  fullname,
  phone,
  email,
  referredby,
  details,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>Question from hlaw website from {fullname}</h1>
      <div>Phone: {phone}</div>
      <div>Email {email}</div>
      <div>Referred by: {referredby || 'no input'}</div>
      <div>My question is:</div>
      <div>{details}</div>
    </div>
  );
}
