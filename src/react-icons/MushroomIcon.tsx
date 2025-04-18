import React from "react";

export const MushroomIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57703)">
<path d="M15 15V19C15.0008 19.7809 14.697 20.5313 14.1532 21.0918C13.6095 21.6523 12.8686 21.9787 12.088 22.0016C11.3075 22.0245 10.5487 21.7422 9.97303 21.2145C9.39733 20.6869 9.05006 19.9556 9.005 19.176L9 19V15H15ZM4.9 13C4.42175 12.9999 3.96111 12.8195 3.61003 12.4948C3.25895 12.17 3.04325 11.7248 3.006 11.248L3 11.1C3 6.077 7.027 2 12 2C16.973 2 21 6.077 21 11.1C20.9999 11.5783 20.8195 12.0389 20.4948 12.39C20.17 12.7411 19.7248 12.9567 19.248 12.994L19.1 13H4.9Z" />
</g>
<defs>
<clipPath id="clip0_802_57703">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
