import React from "react";

export const ColorSwatchOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78065)">
<path d="M13 13V17C13 17.7916 13.2348 18.5653 13.6748 19.2234C14.1147 19.8814 14.74 20.3941 15.4715 20.6966C16.203 20.9991 17.0078 21.0777 17.784 20.9226C18.5603 20.7674 19.273 20.3854 19.832 19.825M21 17V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.9994 7.35152L10.9994 5.35152C10.7287 5.08079 10.386 4.89343 10.012 4.81172C9.63794 4.73 9.24832 4.75735 8.88939 4.89052M6.75939 6.76452L5.34339 8.17952C4.96844 8.55457 4.75781 9.06319 4.75781 9.59352C4.75781 10.1238 4.96844 10.6325 5.34339 11.0075L14.3434 20.0075"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.3 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V17.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78065">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
