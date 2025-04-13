import React from "react";

export const SquareRoundedChevronDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57314)">
<path d="M12 2C11.782 2 11.568 2.002 11.358 2.005L10.742 2.022L10.443 2.035L9.864 2.069L9.311 2.115C4.526 2.579 2.579 4.526 2.115 9.311L2.069 9.864L2.035 10.443C2.03 10.541 2.025 10.641 2.022 10.742L2.005 11.358L2.001 11.676L2 12C2 12.218 2.002 12.432 2.005 12.642L2.022 13.258L2.035 13.557L2.069 14.136L2.115 14.689C2.579 19.474 4.526 21.421 9.311 21.885L9.864 21.931L10.443 21.965C10.541 21.97 10.641 21.975 10.742 21.978L11.358 21.995L12 22L12.642 21.995L13.258 21.978L13.557 21.965L14.136 21.931L14.689 21.885C19.474 21.421 21.421 19.474 21.885 14.689L21.931 14.136L21.965 13.557C21.97 13.459 21.975 13.359 21.978 13.258L21.995 12.642L22 12L21.995 11.358L21.978 10.742L21.965 10.443L21.931 9.864L21.885 9.311C21.421 4.526 19.474 2.579 14.689 2.115L14.136 2.069L13.557 2.035C13.4574 2.03014 13.3577 2.0258 13.258 2.022L12.642 2.005L12.324 2.001L12 2ZM8.293 10.293C8.46519 10.1208 8.69429 10.0174 8.93732 10.0021C9.18035 9.98683 9.4206 10.0607 9.613 10.21L9.707 10.293L12 12.585L14.293 10.293C14.4652 10.1208 14.6943 10.0174 14.9373 10.0021C15.1803 9.98683 15.4206 10.0607 15.613 10.21L15.707 10.293C15.8792 10.4652 15.9826 10.6943 15.9979 10.9373C16.0132 11.1803 15.9393 11.4206 15.79 11.613L15.707 11.707L12.707 14.707C12.5348 14.8792 12.3057 14.9826 12.0627 14.9979C11.8197 15.0132 11.5794 14.9393 11.387 14.79L11.293 14.707L8.293 11.707C8.10553 11.5195 8.00021 11.2652 8.00021 11C8.00021 10.7348 8.10553 10.4805 8.293 10.293Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57314">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
