import React from "react";

export const CircleLetterMIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58474)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM16 8C16 6.986 14.664 6.616 14.143 7.486L12 11.056L9.857 7.486C9.336 6.616 8 6.986 8 8V16C8 16.2652 8.10536 16.5196 8.29289 16.7071C8.48043 16.8946 8.73478 17 9 17L9.117 16.993C9.36025 16.9643 9.58453 16.8474 9.74728 16.6644C9.91004 16.4813 9.99997 16.2449 10 16V11.61L11.143 13.514L11.217 13.622C11.3176 13.7484 11.4473 13.8486 11.595 13.9139C11.7427 13.9793 11.9041 14.0079 12.0653 13.9973C12.2265 13.9866 12.3827 13.9371 12.5206 13.853C12.6584 13.7688 12.7739 13.6525 12.857 13.514L14 11.61V16C14 16.2652 14.1054 16.5196 14.2929 16.7071C14.4804 16.8946 14.7348 17 15 17C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V8Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58474">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
