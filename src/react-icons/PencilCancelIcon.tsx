import React from "react";

export const PencilCancelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66955)">
<path d="M4 20.0003H8L18.5 9.5003C18.7626 9.23766 18.971 8.92585 19.1131 8.58269C19.2553 8.23953 19.3284 7.87174 19.3284 7.5003C19.3284 7.12887 19.2553 6.76107 19.1131 6.41791C18.971 6.07475 18.7626 5.76295 18.5 5.5003C18.2374 5.23766 17.9256 5.02932 17.5824 4.88718C17.2392 4.74503 16.8714 4.67187 16.5 4.67188C16.1286 4.67188 15.7608 4.74503 15.4176 4.88718C15.0744 5.02932 14.7626 5.23766 14.5 5.5003L4 16.0003V20.0003Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 6.5L17.5 10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 19.7956 16.3161 20.5587 16.8787 21.1213C17.4413 21.6839 18.2044 22 19 22C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19C22 18.2044 21.6839 17.4413 21.1213 16.8787C20.5587 16.3161 19.7956 16 19 16C18.2044 16 17.4413 16.3161 16.8787 16.8787C16.3161 17.4413 16 18.2044 16 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66955">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
