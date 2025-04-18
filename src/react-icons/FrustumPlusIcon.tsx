import React from "react";

export const FrustumPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73087)">
<path d="M12.8413 21.3084C12.5788 21.4343 12.2914 21.4996 12.0003 21.4996C11.7092 21.4996 11.4218 21.4343 11.1593 21.3084L4.1243 17.9434C3.71188 17.7442 3.38082 17.4087 3.18698 16.9937C2.99314 16.5787 2.9484 16.1096 3.0603 15.6654L5.5983 5.50742C5.6707 5.21647 5.80823 4.94575 6.00051 4.71571C6.19279 4.48566 6.43481 4.30229 6.7083 4.17942L11.2043 2.16942C11.4545 2.05773 11.7253 2 11.9993 2C12.2733 2 12.5441 2.05773 12.7943 2.16942L17.2903 4.17942C17.8443 4.42542 18.2533 4.91542 18.4023 5.50742L20.0723 12.1904"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 4.82131L12.802 7.14531C12.55 7.25795 12.277 7.31617 12.001 7.31617C11.725 7.31617 11.452 7.25795 11.2 7.14531L6 4.82031"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7.32031V21.5003"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73087">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
