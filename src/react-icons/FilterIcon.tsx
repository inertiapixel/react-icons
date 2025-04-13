import React from "react";

export const FilterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58182)">
<path d="M20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V6.227L3.008 6.45C3.05781 7.11772 3.32956 7.74958 3.78 8.245L8 12.886V21C7.99996 21.1585 8.03758 21.3146 8.10975 21.4557C8.18192 21.5968 8.28657 21.7187 8.41509 21.8113C8.54361 21.904 8.69232 21.9648 8.84895 21.9888C9.00559 22.0127 9.16567 21.9991 9.316 21.949L15.316 19.949L15.424 19.906C15.5962 19.8254 15.7419 19.6973 15.8439 19.5369C15.9459 19.3764 16.0001 19.1902 16 19V12.414L20.121 8.294C20.3998 8.01525 20.621 7.68427 20.7718 7.31999C20.9226 6.95571 21.0002 6.56527 21 6.171V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3Z" />
</g>
<defs>
<clipPath id="clip0_802_58182">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
