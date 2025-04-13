import React from "react";

export const ReorderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65265)">
<path d="M3 16C3 15.7348 3.10536 15.4804 3.29289 15.2929C3.48043 15.1054 3.73478 15 4 15H6C6.26522 15 6.51957 15.1054 6.70711 15.2929C6.89464 15.4804 7 15.7348 7 16V18C7 18.2652 6.89464 18.5196 6.70711 18.7071C6.51957 18.8946 6.26522 19 6 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18V16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V18C14 18.2652 13.8946 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19H11C10.7348 19 10.4804 18.8946 10.2929 18.7071C10.1054 18.5196 10 18.2652 10 18V16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 16C17 15.7348 17.1054 15.4804 17.2929 15.2929C17.4804 15.1054 17.7348 15 18 15H20C20.2652 15 20.5196 15.1054 20.7071 15.2929C20.8946 15.4804 21 15.7348 21 16V18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19H18C17.7348 19 17.4804 18.8946 17.2929 18.7071C17.1054 18.5196 17 18.2652 17 18V16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 11V8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5H16C16.7956 5 17.5587 5.31607 18.1213 5.87868C18.6839 6.44129 19 7.20435 19 8V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 8.5L19 11L21.5 8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65265">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
