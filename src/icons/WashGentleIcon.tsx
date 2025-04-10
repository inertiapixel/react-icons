import React from "react";

export const WashGentleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60030)">
<path d="M3.48438 5.96519C3.65237 5.98519 3.82437 5.99819 3.99837 6.00019C4.78837 6.00919 5.53737 5.82219 5.99837 5.50019C6.45937 5.18019 7.20837 4.99319 7.99837 5.00019C8.78837 4.99319 9.53737 5.18019 9.99837 5.50019C10.4594 5.82219 11.2084 6.00919 11.9984 6.00019C12.7884 6.00919 13.5374 5.82219 13.9984 5.50019C14.4594 5.18019 15.2084 4.99319 15.9984 5.00019C16.7884 4.99319 17.5374 5.18019 17.9984 5.50019C18.4594 5.82219 19.2084 6.00919 19.9984 6.00019C20.1684 6.00019 20.3374 5.98619 20.5014 5.96619" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L4.721 13.329C4.79888 13.796 5.0399 14.2202 5.40118 14.5262C5.76245 14.8322 6.22056 15.0001 6.694 15H17.306C17.7794 15.0001 18.2375 14.8322 18.5988 14.5262C18.9601 14.2202 19.2011 13.796 19.279 13.329L21 3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 18H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60030">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
