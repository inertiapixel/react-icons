import React from "react";

export const ColorPickerOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_78076)">
<path d="M11 7L17 13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9991 8.00048L15.6981 4.30148C15.885 4.11826 16.1363 4.01562 16.3981 4.01562C16.6598 4.01562 16.9112 4.11826 17.0981 4.30148L19.6981 6.90148C19.8813 7.08841 19.984 7.33973 19.984 7.60148C19.984 7.86323 19.8813 8.11455 19.6981 8.30148L15.9961 12.0035M13.9961 14.0035L7.99609 20.0035H3.99609V16.0035L9.99609 10.0035" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78076">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
