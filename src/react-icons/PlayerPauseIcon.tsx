import React from "react";

export const PlayerPauseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57644)">
<path d="M9 4H7C6.46957 4 5.96086 4.21071 5.58579 4.58579C5.21071 4.96086 5 5.46957 5 6V18C5 18.5304 5.21071 19.0391 5.58579 19.4142C5.96086 19.7893 6.46957 20 7 20H9C9.53043 20 10.0391 19.7893 10.4142 19.4142C10.7893 19.0391 11 18.5304 11 18V6C11 5.46957 10.7893 4.96086 10.4142 4.58579C10.0391 4.21071 9.53043 4 9 4Z" />
<path d="M17 4H15C14.4696 4 13.9609 4.21071 13.5858 4.58579C13.2107 4.96086 13 5.46957 13 6V18C13 18.5304 13.2107 19.0391 13.5858 19.4142C13.9609 19.7893 14.4696 20 15 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21071 17.5304 4 17 4Z" />
</g>
<defs>
<clipPath id="clip0_802_57644">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
