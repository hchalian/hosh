import Image from 'next/image';

const cardData = [
  {
    title: 'Personal Injury',
    imgSrc: '/caseimages/personal-injury.jpg',
    alt: 'personal injry cases',
    desc: 'A personal injury case involves a legal dispute that arises when someone suffers harm or injury due to the negligence, recklessness, or intentional actions of another person or entity. The injured party (plaintiff) seeks compensation, usually through a lawsuit, to cover medical expenses, lost wages, pain and suffering, and other related costs. ',
  },
  {
    title: 'Medical Malpractice',
    imgSrc: '/caseimages/medical-malpractice.jpg',
    alt: 'medical malpractice cases',
    desc: 'Medical malpractice occurs when a healthcare professional, such as a doctor or nurse, provides treatment that falls below the accepted standard of care, resulting in harm or injury to the patient. This can include errors in diagnosis, treatment, surgery, medication, or aftercare. The injured patient may file a lawsuit to seek compensation for damages caused by the negligence.',
  },
  {
    title: 'Motorcicle Accident',
    imgSrc: '/caseimages/motorcicle-accident.jpg',
    alt: 'medical malpractice cases',
    desc: 'Motorcycle accident cases involve legal claims made by motorcyclists injured due to another party’s negligence, such as reckless driving, failure to yield, or hazardous road conditions. The injured motorcyclist may seek compensation for medical bills, lost wages, property damage, and pain and suffering. These cases often address unique challenges due to the increased risk of severe injury for motorcyclists.',
  },
  {
    title: 'Slip and Fall',
    imgSrc: '/caseimages/slip-and-fall.jpg',
    alt: 'slip and fall case',
    desc: "Slip and fall cases involve a person being injured after slipping, tripping, or falling due to hazardous conditions on someone else's property. Common causes include wet floors, uneven surfaces, poor lighting, or debris. The injured party may file a lawsuit against the property owner, claiming negligence in maintaining a safe environment.",
  },
  {
    title: 'Premises Injury',
    imgSrc: '/caseimages/contruction-accident.jpg',
    alt: 'premises cases',
    desc: "Premises injury cases arise when someone is injured on another person's property due to unsafe or hazardous conditions. Property owners or occupiers may be held liable if they fail to maintain safe premises or warn visitors of potential dangers, leading to accidents such as slip and falls, falling objects, or poor security. The injured party may seek compensation for their injuries through a premises liability lawsuit.",
  },
  {
    title: 'Dog Bite',
    imgSrc: '/caseimages/dog-bite.jpg',
    alt: 'dog bite case',
    desc: "A dog bite case involves a legal claim made by a person who has been bitten or attacked by a dog. The victim seeks compensation for injuries, medical expenses, lost wages, and pain and suffering. In many jurisdictions, the dog owner is held liable for the attack, especially if the dog had a history of aggression or if local laws impose strict liability regardless of the dog's past behavior",
  },
];

const card = () => {};

export default function CaseTypes() {
  return (
    <div className="mt-4 p-5 text-center font-serif font-bold md:px-0">
      <h2 className="mb-6 text-5xl">What Types of Cases Do We Handle?</h2>
      <div className="gap-1 lg:flex lg:flex-wrap lg:justify-between">
        {cardData.map(({ title, imgSrc, alt, desc }) => {
          return (
            <div
              key={title}
              className="mb-4 overflow-hidden rounded lg:flex lg:max-w-[33%] lg:flex-col"
            >
              <h3 className="bg-white p-3 text-4xl text-gray-600">{title}</h3>
              <Image
                src={imgSrc}
                alt={alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
              <p className="bg-white p-4 text-left font-sans font-normal text-gray-800 lg:grow">
                {desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
