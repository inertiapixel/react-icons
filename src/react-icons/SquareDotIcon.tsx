import React from "react";

export const SquareDotIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57476)">
<path d="M19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19ZM12 10C11.4954 9.99984 11.0094 10.1904 10.6395 10.5335C10.2695 10.8766 10.0428 11.3468 10.005 11.85L10 12L10.005 12.15C10.0342 12.538 10.1759 12.9092 10.4129 13.2178C10.6499 13.5265 10.9717 13.7594 11.339 13.8878C11.7064 14.0163 12.1032 14.0349 12.4809 13.9412C12.8586 13.8475 13.2007 13.6456 13.4654 13.3604C13.7301 13.0751 13.9059 12.7188 13.9711 12.3352C14.0363 11.9516 13.9882 11.5572 13.8326 11.2005C13.6771 10.8438 13.4208 10.5403 13.0953 10.327C12.7698 10.1138 12.3891 10.0001 12 10Z" />
</g>
<defs>
<clipPath id="clip0_802_57476">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
