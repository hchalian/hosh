import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialsData = [
  {
    id: '001',
    name: 'Mark Brandt',
    title: 'Criminal Defense Attorney & former LA Dep. Dist. Atty.',
    testimonial:
      'I am more than happy to comment about attorney Peter Hosharian. I had the pleasure of trying a jury trial with him in Compton in June of 2011. We were able to achieve a not guilty result for our client who was facing 15 years to life. Mr. Hosharian is extremely prepared with a keen eye for relevant details of a case. His ability to work hard while being a tenacious defender was instrumental in achieving the acquittal for our client. I noticed the great care that Mr. Hosharian demonstrated time and time again for the well-being of out client. He is a very special attorney and I would not hesitate to recommend him to anyone in need',
  },
  {
    id: '002',
    name: 'Brendan P. Brady, Esq.',
    title: 'The Law Offices of Brady & Ford',
    testimonial:
      'Peter Hosharian is a skilled attorney and a man of great personal integrity and warmth. I have met few individuals who combine legal skills with an enjoyable personality in the way Peter does. As a fellow attorney, I have worked on matters with Peter and have been pleased to refer clients to him. I have been impressed with his preparation and diligence and have received nothing but positive feedback from those I have referred to him. I am very pleased to recommend Peter Hosharian both professionally and personally.',
  },
  {
    id: '003',
    name: 'Paren Ghazarian',
    title: null,
    testimonial:
      'I hired another attorney to assist me in bringing my fiance from Armenia to the United States. After two years of waiting and being misled, I fired that attorney and hired Peter Hosharian. Mr. Hosharian was able to bring my fiancé to the U.S.A. in less than five months.',
  },
  {
    id: '004',
    name: 'Eric C. Bonholtzer, Esq.',
    title: 'Ball & Roberts',
    testimonial:
      "I had the pleasure of trying a civil case with Peter Hosharian. As lead counsel it's always difficult to find someone you can rely on and trust to be by your side in the courtroom for complex cases. Thankfully, Peter is just that kind of lawyer. Smart, reliable, and clever, Peter has all the tools of a true trial lawyer. In the fast-paced world of trial law, it's imperative for an attorney to be able to think on his or her feet, and I found myself impressed with what Peter brought to the table. I would be happy to work with him again in the future.",
  },
] as const;

export default function Testimonials() {
  return (
    <div className="p-5">
      <h2 className="mb-6 text-center font-serif text-5xl">Testimonials</h2>
      <div className="lg:flex lg:flex-wrap lg:justify-between">
        {TestimonialsData.map(({ id, name, title, testimonial }) => {
          return (
            <div
              key={id}
              className="mb-5 rounded bg-white p-5 text-gray-600 lg:max-w-[49.7%]"
            >
              <div className="mb-3 border-b border-b-gray-300 pb-3 text-center">
                <div className="font-serif text-3xl font-bold">{name}</div>
                <div className="text-sm">{title}</div>
              </div>
              <Stars />
              <p>{testimonial}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Stars = () => {
  return (
    <div className="mb-3 flex justify-center gap-2">
      <StarIcon className="size-[28px] text-gold md:size-[28px]" />
      <StarIcon className="size-[28px] text-gold md:size-[28px]" />
      <StarIcon className="size-[28px] text-gold md:size-[28px]" />
      <StarIcon className="size-[28px] text-gold md:size-[28px]" />
      <StarIcon className="size-[28px] text-gold md:size-[28px]" />
    </div>
  );
};
