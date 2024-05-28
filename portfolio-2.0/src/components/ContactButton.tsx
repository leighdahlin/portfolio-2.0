import React from 'react';
import { useRouter } from 'next/navigation';

type ContactButtonProps = {
  color: 'white' | 'gradient' | 'gold';
  className?: string;
  additionalFunction?: () => void;
};

const ContactButton: React.FC<ContactButtonProps> = ({
  color,
  className,
  additionalFunction,
}: ContactButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (additionalFunction) {
      additionalFunction();
    }
    router.push('/contact');
  };

  return (
    <button
      onClick={handleClick}
      className={`block p-[0.75rem] min-w-[175px] ${className} ${
        color === 'white' ? 'bg-off-white text-black' : ''
      } ${
        color === 'gradient'
          ? 'bg-gradient-to-r from-teal to-dark-blue text-off-white'
          : ''
      } ${
        color === 'gold' ? 'bg-golden text-off-white' : ''
      } text-center text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-hover-golden ${className}`}
    >
      Contact
    </button>
  );
};

export default ContactButton;
