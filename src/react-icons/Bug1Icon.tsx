import React from "react";

export const Bug1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80873)">
<path d="M9 9V8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 9H16C16.5956 9.89259 16.9409 10.9286 17 12V15C17 16.3261 16.4732 17.5979 15.5355 18.5355C14.5979 19.4732 13.3261 20 12 20C10.6739 20 9.40215 19.4732 8.46447 18.5355C7.52678 17.5979 7 16.3261 7 15V12C7.05907 10.9286 7.4044 9.89259 8 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 19L7.35 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.9984 19L16.6484 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7L7.75 9.4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 7L16.25 9.4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80873">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
