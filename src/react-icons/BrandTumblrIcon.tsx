import React from "react";

export const BrandTumblrIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81325)">
<path d="M14 21H18V17H14V11H18V7H14V3H10V4C10 4.79565 9.68393 5.55871 9.12132 6.12132C8.55871 6.68393 7.79565 7 7 7H6V11H10V17C10 18.0609 10.4214 19.0783 11.1716 19.8284C11.9217 20.5786 12.9391 21 14 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81325">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
