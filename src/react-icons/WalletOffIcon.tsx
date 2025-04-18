import React from "react";

export const WalletOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60139)">
<path d="M17.0006 8V5C17.0006 4.73478 16.8952 4.48043 16.7077 4.29289C16.5201 4.10536 16.2658 4 16.0006 4H8.00058M4.58758 4.584C4.30733 4.86354 4.11634 5.21995 4.03877 5.6081C3.96121 5.99625 4.00057 6.39869 4.15187 6.76446C4.30317 7.13024 4.5596 7.44289 4.88869 7.66283C5.21779 7.88277 5.60475 8.00011 6.00058 8H8.00058M12.0006 8H18.0006C18.2658 8 18.5201 8.10536 18.7077 8.29289C18.8952 8.48043 19.0006 8.73478 19.0006 9V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H20V16M16 16C15.4696 16 14.9609 15.7893 14.5858 15.4142C14.2107 15.0391 14 14.5304 14 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60139">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
