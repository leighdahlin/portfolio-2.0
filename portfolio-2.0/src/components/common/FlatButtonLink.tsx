import React from 'react';
import Link from 'next/link';
import { ButtonProps } from './ThreeDButtonLink';

interface FlatButtonProps extends ButtonProps {
  bgColor: string;
  hoverBgColor: string;
  textColor: string;
  hoverTextColor: string;
  border: boolean;
}

export default function FlatButtonLink({
  text,
  link,
  bgColor,
  hoverBgColor,
  textColor,
  hoverTextColor,
  border,
}: FlatButtonProps) {
  return (
    <Link
      href={link}
      className={`w-fit py-[8px] bg-${bgColor} hover:bg-${hoverBgColor} rounded-md text-${textColor} hover:text-${hoverTextColor} ${border ? `border border-${textColor}` : ''} min-w-[175px] flex items-center justify-center`}
    >
      {text}
    </Link>
  );
}
