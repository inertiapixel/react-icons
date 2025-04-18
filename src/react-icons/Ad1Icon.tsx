import React from "react";

export const Ad1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86489)">
<path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15V11C7 10.4696 7.21071 9.96086 7.58579 9.58579C7.96086 9.21071 8.46957 9 9 9C9.53043 9 10.0391 9.21071 10.4142 9.58579C10.7893 9.96086 11 10.4696 11 11V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9V15H15.5C15.2033 15 14.9133 14.912 14.6666 14.7472C14.42 14.5824 14.2277 14.3481 14.1142 14.074C14.0006 13.7999 13.9709 13.4983 14.0288 13.2074C14.0867 12.9164 14.2296 12.6491 14.4393 12.4393C14.6491 12.2296 14.9164 12.0867 15.2074 12.0288C15.4983 11.9709 15.7999 12.0006 16.074 12.1142C16.3481 12.2277 16.5824 12.42 16.7472 12.6666C16.912 12.9133 17 13.2033 17 13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86489">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
