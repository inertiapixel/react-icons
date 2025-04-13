import React from "react";

export const XboxBIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57041)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM13 7H10C9.73478 7 9.48043 7.10536 9.29289 7.29289C9.10536 7.48043 9 7.73478 9 8V16C9 16.2652 9.10536 16.5196 9.29289 16.7071C9.48043 16.8946 9.73478 17 10 17H13C13.579 16.9998 14.1456 16.832 14.6314 16.5169C15.1172 16.2018 15.5015 15.7529 15.7378 15.2243C15.9741 14.6956 16.0523 14.1099 15.9631 13.5378C15.8739 12.9657 15.621 12.4316 15.235 12C15.621 11.5684 15.8739 11.0343 15.9631 10.4622C16.0523 9.89009 15.9741 9.30437 15.7378 8.77574C15.5015 8.24711 15.1172 7.79817 14.6314 7.48307C14.1456 7.16798 13.579 7.00021 13 7ZM13 13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14L13.993 14.117C13.9643 14.3603 13.8474 14.5845 13.6644 14.7473C13.4813 14.91 13.2449 15 13 15H11V13H13ZM13 9C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10C14 10.2652 13.8946 10.5196 13.7071 10.7071C13.5196 10.8946 13.2652 11 13 11H11V9H13Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57041">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
