import React from "react";

export const BrandFramerMotionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_82271)">
<path d="M12 12L4 4V20L20 4V20L16 16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12L12 20L8 16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82271">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
