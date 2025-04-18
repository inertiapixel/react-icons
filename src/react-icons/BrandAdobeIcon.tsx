import React from "react";

export const BrandAdobeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82874)">
<path d="M12.893 4.51546L20.87 18.5155C20.9353 18.6306 20.977 18.7576 20.9925 18.8891C21.008 19.0205 20.9971 19.1537 20.9604 19.2809C20.9237 19.4081 20.8619 19.5267 20.7788 19.6296C20.6956 19.7326 20.5926 19.8179 20.476 19.8805C20.3226 19.9641 20.1507 20.0078 19.976 20.0075H16.5L12 12.0075L9.5 16.0075H11L13 20.0075H4.023C3.458 20.0075 3 19.5575 3 19.0075C3 18.8365 3.045 18.6675 3.13 18.5175L11.107 4.52446C11.1981 4.36843 11.3285 4.23898 11.4851 4.14902C11.6418 4.05906 11.8193 4.01172 12 4.01172C12.1807 4.01172 12.3582 4.05906 12.5149 4.14902C12.6715 4.23898 12.8019 4.36843 12.893 4.52446V4.51546Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82874">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
