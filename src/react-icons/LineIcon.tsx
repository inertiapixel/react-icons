import React from "react";

export const LineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70409)">
<path d="M4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20C6.53043 20 7.03914 19.7893 7.41421 19.4142C7.78929 19.0391 8 18.5304 8 18C8 17.4696 7.78929 16.9609 7.41421 16.5858C7.03914 16.2107 6.53043 16 6 16C5.46957 16 4.96086 16.2107 4.58579 16.5858C4.21071 16.9609 4 17.4696 4 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 6C16 6.53043 16.2107 7.03914 16.5858 7.41421C16.9609 7.78929 17.4696 8 18 8C18.5304 8 19.0391 7.78929 19.4142 7.41421C19.7893 7.03914 20 6.53043 20 6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4C17.4696 4 16.9609 4.21071 16.5858 4.58579C16.2107 4.96086 16 5.46957 16 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 16.5L16.5 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70409">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
