import React from "react";

export const CircleLetterWIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58444)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM14.008 7.876L13.488 12.029L12.928 10.629C12.609 9.83 11.518 9.792 11.125 10.515L11.072 10.629L10.511 12.029L9.992 7.876C9.96162 7.63281 9.84299 7.40925 9.65864 7.24777C9.4743 7.08628 9.23707 6.99811 8.992 7L8.876 7.008C8.61294 7.04096 8.37373 7.17703 8.21096 7.3863C8.04819 7.59558 7.97519 7.86092 8.008 8.124L9.008 16.124C9.136 17.149 10.545 17.331 10.928 16.371L12 13.693L13.072 16.371C13.455 17.331 14.864 17.149 14.992 16.124L15.992 8.124C16.0182 7.8642 15.9418 7.60445 15.7791 7.40024C15.6164 7.19604 15.3802 7.06359 15.1211 7.0312C14.862 6.99882 14.6005 7.06906 14.3925 7.22692C14.1845 7.38478 14.0465 7.61774 14.008 7.876Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58444">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
