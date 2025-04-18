import React from "react";

export const CalendarRepeatIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80392)">
<path d="M12.5 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 3V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 14L22 16H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 18L22 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0001 16C18.5138 16 18.0348 16.1182 17.6043 16.3444C17.1738 16.5707 16.8048 16.8982 16.529 17.2987C16.2533 17.6992 16.079 18.1608 16.0212 18.6437C15.9635 19.1265 16.024 19.6162 16.1975 20.0705C16.371 20.5248 16.6524 20.9301 17.0173 21.2514C17.3823 21.5728 17.8199 21.8007 18.2925 21.9154C18.7651 22.0301 19.2584 22.0281 19.7301 21.9098C20.2018 21.7914 20.6376 21.5602 21.0001 21.236"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80392">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
