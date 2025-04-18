import React from "react";

export const ClockShieldIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78434)">
<path d="M21 12C21 10.2191 20.4717 8.47825 19.4818 6.99778C18.492 5.5173 17.0852 4.36377 15.4395 3.68317C13.7938 3.00257 11.9832 2.82551 10.2368 3.17441C8.49045 3.5233 6.88684 4.38245 5.62897 5.64313C4.3711 6.9038 3.51551 8.50932 3.1705 10.2565C2.8255 12.0036 3.00659 13.8138 3.69084 15.458C4.3751 17.1022 5.53176 18.5064 7.01443 19.4929C8.49711 20.4795 10.2391 21.0039 12.02 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L13 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 16C22 20 19.5 22 18.5 22C17.5 22 15 20 15 16C16 16 17.5 15.5 18.5 14.5C19.5 15.5 21 16 22 16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78434">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
