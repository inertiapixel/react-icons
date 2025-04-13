import React from "react";

export const SquareLetterRIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57392)">
<path d="M19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19ZM12 7H10C9.73478 7 9.48043 7.10536 9.29289 7.29289C9.10536 7.48043 9 7.73478 9 8V16C9 16.2652 9.10536 16.5196 9.29289 16.7071C9.48043 16.8946 9.73478 17 10 17L10.117 16.993C10.3603 16.9643 10.5845 16.8474 10.7473 16.6644C10.91 16.4813 11 16.2449 11 16V13.668L13.2 16.6C13.3591 16.8122 13.596 16.9524 13.8586 16.99C14.1211 17.0275 14.3878 16.9591 14.6 16.8L14.696 16.719C14.871 16.5495 14.9782 16.322 14.9973 16.0792C15.0165 15.8363 14.9463 15.5948 14.8 15.4L12.897 12.862L13.012 12.825C13.6766 12.586 14.2356 12.1203 14.5907 11.5098C14.9458 10.8993 15.0742 10.1832 14.9533 9.48732C14.8324 8.79148 14.47 8.16058 13.9298 7.70562C13.3896 7.25066 12.7063 7.0008 12 7ZM12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10C13 10.2652 12.8946 10.5196 12.7071 10.7071C12.5196 10.8946 12.2652 11 12 11H11V9H12Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57392">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
