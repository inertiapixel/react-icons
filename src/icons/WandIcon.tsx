import React from "react";

export const WandIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60111)">
<path d="M6 21L21 6L18 3L3 18L6 21Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6L18 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 3C9 3.53043 9.21071 4.03914 9.58579 4.41421C9.96086 4.78929 10.4696 5 11 5C10.4696 5 9.96086 5.21071 9.58579 5.58579C9.21071 5.96086 9 6.46957 9 7C9 6.46957 8.78929 5.96086 8.41421 5.58579C8.03914 5.21071 7.53043 5 7 5C7.53043 5 8.03914 4.78929 8.41421 4.41421C8.78929 4.03914 9 3.53043 9 3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 13C19 13.5304 19.2107 14.0391 19.5858 14.4142C19.9609 14.7893 20.4696 15 21 15C20.4696 15 19.9609 15.2107 19.5858 15.5858C19.2107 15.9609 19 16.4696 19 17C19 16.4696 18.7893 15.9609 18.4142 15.5858C18.0391 15.2107 17.5304 15 17 15C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60111">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
