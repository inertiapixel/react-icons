import React from "react";

export const OctagonPlus2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67274)">
<path d="M13.0226 21.7396L12.8016 21.8346C12.2896 22.0546 11.7096 22.0546 11.1976 21.8346L5.62261 19.4456C5.14173 19.2397 4.75857 18.8565 4.55261 18.3756L2.16461 12.8016C2.056 12.5482 2 12.2753 2 11.9996C2 11.7239 2.056 11.451 2.16461 11.1976L4.55361 5.62261C4.75961 5.14261 5.14261 4.75961 5.62361 4.55261L11.1976 2.16461C11.451 2.056 11.7239 2 11.9996 2C12.2753 2 12.5482 2.056 12.8016 2.16461L18.3766 4.55361C18.8566 4.75961 19.2396 5.14261 19.4466 5.62361L21.8346 11.1976C22.0546 11.7096 22.0546 12.2896 21.8346 12.8016L21.7536 12.9916"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67274">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
