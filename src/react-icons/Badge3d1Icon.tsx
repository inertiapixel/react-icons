import React from "react";

export const Badge3d1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84534)">
<path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9H8.5C8.89782 9 9.27936 9.15804 9.56066 9.43934C9.84196 9.72064 10 10.1022 10 10.5C10 10.8978 9.84196 11.2794 9.56066 11.5607C9.27936 11.842 8.89782 12 8.5 12M8.5 12H8M8.5 12C8.89782 12 9.27936 12.158 9.56066 12.4393C9.84196 12.7206 10 13.1022 10 13.5C10 13.8978 9.84196 14.2794 9.56066 14.5607C9.27936 14.842 8.89782 15 8.5 15H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 9V15H15C15.5304 15 16.0391 14.7893 16.4142 14.4142C16.7893 14.0391 17 13.5304 17 13V11C17 10.4696 16.7893 9.96086 16.4142 9.58579C16.0391 9.21071 15.5304 9 15 9H14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84534">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
