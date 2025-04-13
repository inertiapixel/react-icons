import React from "react";

export const SquareRoundedChevronUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57317)">
<path d="M12 2C11.782 2 11.568 2.002 11.358 2.005L10.742 2.022L10.443 2.035L9.864 2.069L9.311 2.115C4.526 2.579 2.579 4.526 2.115 9.311L2.069 9.864L2.035 10.443C2.03 10.541 2.025 10.641 2.022 10.742L2.005 11.358L2.001 11.676L2 12C2 12.218 2.002 12.432 2.005 12.642L2.022 13.258L2.035 13.557L2.069 14.136L2.115 14.689C2.579 19.474 4.526 21.421 9.311 21.885L9.864 21.931L10.443 21.965C10.541 21.97 10.641 21.975 10.742 21.978L11.358 21.995L12 22L12.642 21.995L13.258 21.978L13.557 21.965L14.136 21.931L14.689 21.885C19.474 21.421 21.421 19.474 21.885 14.689L21.931 14.136L21.965 13.557C21.97 13.459 21.975 13.359 21.978 13.258L21.995 12.642L22 12L21.995 11.358L21.978 10.742L21.965 10.443L21.931 9.864L21.885 9.311C21.421 4.526 19.474 2.579 14.689 2.115L14.136 2.069L13.557 2.035C13.4574 2.03014 13.3577 2.0258 13.258 2.022L12.642 2.005L12.324 2.001L12 2ZM11.293 9.293C11.4652 9.12082 11.6943 9.01739 11.9373 9.00211C12.1803 8.98683 12.4206 9.06075 12.613 9.21L12.707 9.293L15.707 12.293C15.8863 12.473 15.9905 12.7144 15.9982 12.9684C16.006 13.2223 15.9168 13.4697 15.7488 13.6603C15.5807 13.8508 15.3464 13.9703 15.0935 13.9944C14.8406 14.0185 14.588 13.9454 14.387 13.79L14.293 13.707L12 11.415L9.707 13.707C9.53481 13.8792 9.30571 13.9826 9.06268 13.9979C8.81965 14.0132 8.5794 13.9393 8.387 13.79L8.293 13.707C8.12082 13.5348 8.01739 13.3057 8.00211 13.0627C7.98683 12.8197 8.06075 12.5794 8.21 12.387L8.293 12.293L11.293 9.293Z" />
</g>
<defs>
<clipPath id="clip0_802_57317">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
