import React from "react";

export const OvalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57691)">
<path d="M12 2C15.972 2 19 6.542 19 12C19 17.458 15.972 22 12 22C8.1 22 5.11 17.621 5.003 12.297L5 12L5.003 11.703C5.11 6.38 8.1 2 12 2Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57691">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
