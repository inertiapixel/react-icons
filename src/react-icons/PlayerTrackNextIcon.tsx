import React from "react";

export const PlayerTrackNextIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57623)">
<path d="M2 5.00191V19.0019C2 19.8619 3.012 20.3199 3.659 19.7549L11.659 12.7549C11.7664 12.661 11.8525 12.5453 11.9115 12.4154C11.9705 12.2855 12.001 12.1446 12.001 12.0019C12.001 11.8593 11.9705 11.7183 11.9115 11.5884C11.8525 11.4585 11.7664 11.3428 11.659 11.2489L3.659 4.24891C3.012 3.68391 2 4.14291 2 5.00191Z" />
<path d="M13 5.00191V19.0019C13 19.8619 14.012 20.3199 14.659 19.7549L22.659 12.7549C22.7664 12.661 22.8525 12.5453 22.9115 12.4154C22.9705 12.2855 23.001 12.1446 23.001 12.0019C23.001 11.8593 22.9705 11.7183 22.9115 11.5884C22.8525 11.4585 22.7664 11.3428 22.659 11.2489L14.659 4.24891C14.012 3.68391 13 4.14291 13 5.00191Z" />
</g>
<defs>
<clipPath id="clip0_802_57623">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
