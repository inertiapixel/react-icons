import React from "react";

export const OctahedronPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67253)">
<path d="M21.498 12.9115L21.704 12.7035C21.7977 12.6118 21.8722 12.5024 21.923 12.3816C21.9738 12.2608 22 12.131 22 12C22 11.8689 21.9738 11.7392 21.923 11.6183C21.8722 11.4975 21.7977 11.3881 21.704 11.2965L12.859 2.34846C12.6289 2.125 12.3208 2 12 2C11.6792 2 11.3711 2.125 11.141 2.34846L2.296 11.2975C2.2023 11.3891 2.12784 11.4985 2.07701 11.6193C2.02618 11.7402 2 11.8699 2 12.001C2 12.132 2.02618 12.2618 2.07701 12.3826C2.12784 12.5034 2.2023 12.6128 2.296 12.7045L11.141 21.6535C11.3714 21.8766 11.6795 22.0012 12.0002 22.001C12.3209 22.0008 12.6289 21.8758 12.859 21.6525L12.939 21.5715"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12C2.004 12.086 2.103 12.178 2.296 12.246L11.141 14.878C11.6 15.041 12.4 15.041 12.859 14.878L15.493 14.094M20.903 12.484L21.704 12.246C21.899 12.176 21.998 12.09 22 12.003"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2.12109V21.8811"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67253">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
