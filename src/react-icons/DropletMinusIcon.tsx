import React from "react";

export const DropletMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75049)">
<path d="M18.9462 15.0847C19.1345 13.6234 18.8237 12.1413 18.0642 10.8787L13.1742 3.61873C12.7542 2.99373 11.8872 2.81573 11.2382 3.22173C11.0753 3.32396 10.9356 3.4592 10.8282 3.61873L5.9352 10.8787C4.2402 13.7167 4.9002 17.3197 7.5022 19.4247C8.93593 20.5773 10.7581 21.1341 12.5912 20.9797"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75049">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
