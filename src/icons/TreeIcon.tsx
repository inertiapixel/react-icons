import React from "react";

export const TreeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60983)">
<path d="M12 13L10 11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12L14 10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.82322 15.9985C9.38569 15.9729 8.95909 15.8517 8.57342 15.6435C8.18775 15.4353 7.85239 15.1451 7.59092 14.7934C7.32945 14.4416 7.14823 14.0369 7.05999 13.6076C6.97176 13.1783 6.97866 12.7348 7.08022 12.3085C6.71769 12.0066 6.43147 11.6234 6.24481 11.1902C6.05815 10.7569 5.9763 10.2857 6.00592 9.81485C6.03553 9.344 6.17578 8.88678 6.41526 8.48031C6.65475 8.07384 6.98672 7.72958 7.38422 7.47548C7.03559 6.85614 6.91817 6.13313 7.05288 5.43529C7.18759 4.73745 7.56568 4.1101 8.11978 3.66501C8.67388 3.21993 9.36801 2.98602 10.0785 3.00497C10.789 3.02392 11.4696 3.29449 11.9992 3.76848C12.5289 3.29524 13.2094 3.02531 13.9194 3.00673C14.6295 2.98815 15.3232 3.22213 15.8769 3.66701C16.4306 4.1119 16.8085 4.73883 16.9434 5.43623C17.0782 6.13363 16.9612 6.85625 16.6132 7.47548C17.0108 7.72949 17.3428 8.07369 17.5824 8.48012C17.822 8.88654 17.9623 9.34375 17.992 9.81459C18.0218 10.2854 17.94 10.7567 17.7534 11.19C17.5668 11.6233 17.2807 12.0065 16.9182 12.3085C17.0232 12.7493 17.0269 13.2081 16.9292 13.6506C16.8315 14.093 16.6348 14.5076 16.3539 14.8632C16.073 15.2187 15.7152 15.506 15.3074 15.7035C14.8996 15.901 14.4523 16.0036 13.9992 16.0035H9.99922L9.82322 15.9985Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60983">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
