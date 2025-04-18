import React from "react";

export const NavigationIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57700)">
<path d="M11.0922 2.58206C11.1674 2.41853 11.2854 2.27833 11.4337 2.17627C11.582 2.0742 11.7551 2.01406 11.9347 2.00218C12.1143 1.9903 12.2938 2.02713 12.4542 2.10877C12.6147 2.19042 12.7501 2.31386 12.8462 2.46606L12.9082 2.58206L20.9132 19.9471C21.1112 20.5131 20.9632 21.1431 20.5352 21.5621C20.3468 21.7483 20.1133 21.8823 19.8576 21.9512C19.6018 22.0201 19.3326 22.0214 19.0762 21.9551L11.9992 19.5571L5.10019 21.8951C4.84889 21.9936 4.57605 22.0241 4.30918 21.9836C4.04232 21.943 3.79087 21.8328 3.58019 21.6641L3.46819 21.5641C3.07019 21.1781 2.91219 20.6101 3.07519 20.0081L3.12219 19.8581L11.0922 2.58206Z" />
</g>
<defs>
<clipPath id="clip0_802_57700">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
