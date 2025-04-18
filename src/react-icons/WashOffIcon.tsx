import React from "react";

export const WashOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60011)">
<path d="M3 6L4.721 16.329C4.79888 16.796 5.0399 17.2202 5.40118 17.5262C5.76245 17.8322 6.22056 18.0001 6.694 18H17.306C17.514 18 17.716 17.968 17.906 17.908M19.427 15.436L21 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.48438 8.96519C3.65237 8.98519 3.82437 8.99819 3.99837 9.00019C4.78837 9.00919 5.53737 8.82219 5.99837 8.50019C6.45937 8.18019 7.20837 7.99319 7.99837 8.00019M12.9184 8.91919C13.3464 8.83619 13.7234 8.69219 13.9984 8.50119C14.4594 8.17919 15.2084 7.99319 15.9984 8.00119C16.7884 7.99319 17.5374 8.17919 17.9984 8.50119C18.4594 8.82119 19.2084 9.00919 19.9984 9.00119C20.1684 9.00119 20.3374 8.98619 20.5014 8.96619"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60011">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
