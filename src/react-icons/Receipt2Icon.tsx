import React from "react";

export const Receipt2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65473)">
<path d="M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21L16 19L14 21L12 19L10 21L8 19L5 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8H11.5C11.1022 8 10.7206 8.15804 10.4393 8.43934C10.158 8.72064 10 9.10218 10 9.5C10 9.89782 10.158 10.2794 10.4393 10.5607C10.7206 10.842 11.1022 11 11.5 11H12.5C12.8978 11 13.2794 11.158 13.5607 11.4393C13.842 11.7206 14 12.1022 14 12.5C14 12.8978 13.842 13.2794 13.5607 13.5607C13.2794 13.842 12.8978 14 12.5 14H10M12 14V15.5M12 6.5V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65473">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
