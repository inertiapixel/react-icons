import React from "react";

export const Hanger2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72396)">
<path d="M12 9L4.029 13.428C3.71706 13.6012 3.45714 13.8548 3.27621 14.1623C3.09527 14.4698 2.99991 14.8202 3 15.177V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 18H19C19.5304 18 20.0391 17.7893 20.4142 17.4142C20.7893 17.0391 21 16.5304 21 16V15.177C21.0001 14.8202 20.9047 14.4698 20.7238 14.1623C20.5429 13.8548 20.2829 13.6012 19.971 13.428L12 9C10.543 8.19 10.007 6.667 10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18C6 17.4696 6.21071 16.9609 6.58579 16.5858C6.96086 16.2107 7.46957 16 8 16H16C16.5304 16 17.0391 16.2107 17.4142 16.5858C17.7893 16.9609 18 17.4696 18 18V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H8C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19V18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72396">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
