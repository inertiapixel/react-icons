import React from "react";

export const ScaleOutlineOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64604)">
<path d="M7 3H17C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V17M19.827 19.83C19.456 20.2016 19.0153 20.4962 18.5302 20.697C18.0451 20.8977 17.525 21.0007 17 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V7C3 5.896 3.447 4.897 4.17 4.173"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.0638 7.062C11.3738 7.021 11.6858 7 12.0018 7C13.9578 7 15.7258 7.802 17.0018 9.095C16.329 9.72354 15.6623 10.3586 15.0018 11M11.2788 11.288C10.7876 11.41 10.3352 11.6542 9.96381 11.998L7.00781 9.095C7.354 8.74139 7.73682 8.42561 8.14981 8.153"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64604">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
