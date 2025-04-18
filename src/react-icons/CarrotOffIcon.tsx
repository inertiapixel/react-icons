import React from "react";

export const CarrotOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79951)">
<path d="M8.868 8.84618C6.112 12.2282 3 21.0002 3 21.0002C3 21.0002 11.75 17.8962 15.134 15.1502M16.801 12.8082C17.041 12.0302 17.0647 11.2016 16.8696 10.4112C16.6745 9.62075 16.2681 8.89831 15.6937 8.32129C15.1194 7.74427 14.3988 7.33443 13.6093 7.1357C12.8198 6.93697 11.9911 6.95684 11.212 7.19318"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13L7.5 11.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8C22 8 20.86 6 19 6C17.594 6 16 8 16 8C16 8 17.14 10 19 10C20.86 10 22 8 22 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 2C16 2 14 3.14 14 5C14 6.86 16 8 16 8C16 8 18 6.423 18 5C18 3.14 16 2 16 2Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79951">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
