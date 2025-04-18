import React from "react";

export const HomeHeartIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71713)">
<path d="M21 12L12 3L3 12H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.39 13 13.754 13.112 14.061 13.304"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.9996 21.5003L21.5176 18.9203C21.8296 18.5962 22.0039 18.1637 22.0039 17.7138C22.0039 17.2639 21.8296 16.8315 21.5176 16.5073C21.3658 16.3494 21.1837 16.2237 20.9821 16.1379C20.7805 16.0521 20.5637 16.0078 20.3446 16.0078C20.1256 16.0078 19.9087 16.0521 19.7072 16.1379C19.5056 16.2237 19.3235 16.3494 19.1716 16.5073L19.0036 16.6793L18.8356 16.5073C18.6838 16.3494 18.5017 16.2237 18.3001 16.1379C18.0985 16.0521 17.8817 16.0078 17.6626 16.0078C17.4436 16.0078 17.2267 16.0521 17.0252 16.1379C16.8236 16.2237 16.6415 16.3494 16.4896 16.5073C16.178 16.8315 16.0039 17.2637 16.0039 17.7133C16.0039 18.163 16.178 18.5952 16.4896 18.9193L18.9996 21.5093V21.5003Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71713">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
