import React from "react";

export const DeviceIpadIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76186)">
<path d="M18 2C18.7652 1.99996 19.5015 2.29233 20.0583 2.81728C20.615 3.34224 20.9501 4.06011 20.995 4.824L21 5V19C21 19.7652 20.7077 20.5015 20.1827 21.0583C19.6578 21.615 18.9399 21.9501 18.176 21.995L18 22H6C5.23479 22 4.49849 21.7077 3.94174 21.1827C3.38499 20.6578 3.04989 19.9399 3.005 19.176L3 19V5C2.99996 4.23479 3.29233 3.49849 3.81728 2.94174C4.34224 2.38499 5.06011 2.04989 5.824 2.005L6 2H18ZM15 17H9L8.883 17.007C8.63995 17.0359 8.41594 17.153 8.25341 17.336C8.09088 17.519 8.00111 17.7552 8.00111 18C8.00111 18.2448 8.09088 18.481 8.25341 18.664C8.41594 18.847 8.63995 18.9641 8.883 18.993L9 19H15L15.117 18.993C15.36 18.9641 15.5841 18.847 15.7466 18.664C15.9091 18.481 15.9989 18.2448 15.9989 18C15.9989 17.7552 15.9091 17.519 15.7466 17.336C15.5841 17.153 15.36 17.0359 15.117 17.007L15 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76186">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
