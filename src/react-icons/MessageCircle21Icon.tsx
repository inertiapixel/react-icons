import React from "react";

export const MessageCircle21Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68776)">
<path d="M3 20.0015L4.3 16.1015C3.17644 14.4398 2.76999 12.472 3.15622 10.5638C3.54244 8.65573 4.69506 6.93722 6.39977 5.72782C8.10447 4.51842 10.2453 3.90044 12.4241 3.98878C14.6029 4.07713 16.6715 4.86578 18.2453 6.2081C19.819 7.55043 20.7909 9.35509 20.9801 11.2865C21.1693 13.218 20.563 15.1448 19.2739 16.7087C17.9848 18.2726 16.1007 19.3672 13.9718 19.7889C11.8429 20.2106 9.6142 19.9308 7.7 19.0015L3 20.0015Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68776">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
