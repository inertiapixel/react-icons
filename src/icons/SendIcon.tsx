import React from "react";

export const SendIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64356)">
<path d="M10 14L21 3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.0006 3L14.5006 21C14.4567 21.0957 14.3862 21.1769 14.2976 21.2338C14.209 21.2906 14.1059 21.3209 14.0006 21.3209C13.8952 21.3209 13.7921 21.2906 13.7035 21.2338C13.6149 21.1769 13.5444 21.0957 13.5006 21L10.0006 14L3.00056 10.5C2.90482 10.4561 2.82369 10.3857 2.7668 10.2971C2.70992 10.2084 2.67969 10.1053 2.67969 10C2.67969 9.89468 2.70992 9.79158 2.7668 9.70295C2.82369 9.61431 2.90482 9.54387 3.00056 9.5L21.0006 3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64356">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
