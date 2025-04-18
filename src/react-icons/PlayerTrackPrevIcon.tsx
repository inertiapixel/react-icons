import React from "react";

export const PlayerTrackPrevIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57619)">
<path d="M20.342 4.2452L12.342 11.2452C12.2346 11.3391 12.1485 11.4548 12.0895 11.5847C12.0305 11.7146 12 11.8556 12 11.9982C12 12.1408 12.0305 12.2818 12.0895 12.4117C12.1485 12.5416 12.2346 12.6573 12.342 12.7512L20.342 19.7512C20.989 20.3162 22.001 19.8572 22.001 18.9982V4.9982C22.001 4.1382 20.989 3.6802 20.342 4.2452Z" />
<path d="M9.34198 4.2452L1.34198 11.2452C1.23457 11.3391 1.14848 11.4548 1.0895 11.5847C1.03052 11.7146 1 11.8556 1 11.9982C1 12.1408 1.03052 12.2818 1.0895 12.4117C1.14848 12.5416 1.23457 12.6573 1.34198 12.7512L9.34198 19.7512C9.98898 20.3162 11.001 19.8572 11.001 18.9982V4.9982C11.001 4.1382 9.98898 3.6802 9.34198 4.2452Z" />
</g>
<defs>
<clipPath id="clip0_802_57619">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
