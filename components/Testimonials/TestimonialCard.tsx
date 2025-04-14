import Image from 'next/image';

interface TestimonialCardProps {
  image: string;
  username: string;
  text: string;
}

const TestimonialCard = ({ image, username, text }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative aspect-square w-full]">
        <Image
          src={image}
          alt={username}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-md mb-2"> <span className="text-secondary font-medium">@{username}</span> {text}</p>
        <div className="flex items-center gap-1">
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;