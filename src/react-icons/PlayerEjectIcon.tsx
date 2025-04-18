import React from "react";

export const PlayerEjectIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57648)">
<path d="M11.2489 3.34198L4.24891 11.342C3.68391 11.989 4.14291 13.001 5.00191 13.001H19.0019C19.8619 13.001 20.3199 11.989 19.7549 11.342L12.7549 3.34198C12.661 3.23457 12.5453 3.14848 12.4154 3.0895C12.2855 3.03052 12.1446 3 12.0019 3C11.8593 3 11.7183 3.03052 11.5884 3.0895C11.4585 3.14848 11.3428 3.23457 11.2489 3.34198Z" />
<path d="M18 15H6C5.46957 15 4.96086 15.2107 4.58579 15.5858C4.21071 15.9609 4 16.4696 4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17C20 16.4696 19.7893 15.9609 19.4142 15.5858C19.0391 15.2107 18.5304 15 18 15Z" />
</g>
<defs>
<clipPath id="clip0_802_57648">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
