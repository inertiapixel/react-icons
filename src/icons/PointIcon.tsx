import React from "react";

export const PointIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57616)">
<path d="M12 7C12.9797 6.99994 13.9378 7.28769 14.7553 7.8275C15.5729 8.36731 16.2138 9.1354 16.5986 10.0364C16.9833 10.9373 17.0949 11.9315 16.9195 12.8953C16.7441 13.8592 16.2893 14.7502 15.6118 15.4579C14.9343 16.1655 14.0638 16.6585 13.1085 16.8756C12.1532 17.0928 11.1552 17.0245 10.2383 16.6793C9.3215 16.334 8.52629 15.7271 7.95146 14.9338C7.37663 14.1405 7.04752 13.1958 7.005 12.217L7 12L7.005 11.783C7.06092 10.4958 7.61161 9.27978 8.54222 8.38866C9.47284 7.49754 10.7115 7.00007 12 7Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57616">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
