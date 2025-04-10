import React from "react";

export const MetronomeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68489)">
<path d="M14.1518 8.18759L13.4318 4.95159C13.3087 4.39801 13.0005 3.90297 12.558 3.54816C12.1156 3.19336 11.5655 3 10.9983 3C10.4312 3 9.88106 3.19336 9.43865 3.54816C8.99623 3.90297 8.68801 4.39801 8.56484 4.95159L5.53984 18.5656C5.47486 18.8579 5.47635 19.1611 5.54422 19.4528C5.61208 19.7445 5.74459 20.0172 5.93195 20.2509C6.11931 20.4845 6.35675 20.673 6.62674 20.8026C6.89672 20.9322 7.19237 20.9995 7.49184 20.9996H14.5058C14.8053 20.9995 15.101 20.9322 15.3709 20.8026C15.6409 20.673 15.8784 20.4845 16.0657 20.2509C16.2531 20.0172 16.3856 19.7445 16.4535 19.4528C16.5213 19.1611 16.5228 18.8579 16.4578 18.5656L15.9338 16.2086M10.9988 17.9996L19.9988 4.99959" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 5C19 5.26522 19.1054 5.51957 19.2929 5.70711C19.4804 5.89464 19.7348 6 20 6C20.2652 6 20.5196 5.89464 20.7071 5.70711C20.8946 5.51957 21 5.26522 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4C19.7348 4 19.4804 4.10536 19.2929 4.29289C19.1054 4.48043 19 4.73478 19 5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68489">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
