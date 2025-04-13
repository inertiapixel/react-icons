import React from "react";

export const CrossIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58256)">
<path d="M10 2L9.883 2.007C9.63975 2.03566 9.41547 2.15259 9.25272 2.33563C9.08996 2.51866 9.00003 2.75507 9 3V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V12L4.007 12.117C4.03566 12.3603 4.15259 12.5845 4.33563 12.7473C4.51866 12.91 4.75507 13 5 13H9V21C9 21.2652 9.10536 21.5196 9.29289 21.7071C9.48043 21.8946 9.73478 22 10 22H14L14.117 21.993C14.3603 21.9643 14.5845 21.8474 14.7473 21.6644C14.91 21.4813 15 21.2449 15 21V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12V8L19.993 7.883C19.9643 7.63975 19.8474 7.41547 19.6644 7.25272C19.4813 7.08996 19.2449 7.00003 19 7H15V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2H10Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58256">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
