import React from "react";

export const BatteryIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58964)">
<path d="M17 6C17.7652 5.99996 18.5015 6.29233 19.0583 6.81728C19.615 7.34224 19.9501 8.06011 19.995 8.824L20 9V9.086L20.052 9.105C20.3087 9.20659 20.5324 9.37704 20.6984 9.59759C20.8644 9.81814 20.9664 10.0802 20.993 10.355L21 10.5V13.5C21.0001 13.8008 20.9097 14.0946 20.7406 14.3434C20.5716 14.5921 20.3317 14.7843 20.052 14.895L20 14.913V15C20 15.7652 19.7077 16.5015 19.1827 17.0583C18.6578 17.615 17.9399 17.9501 17.176 17.995L17 18H6C5.23479 18 4.49849 17.7077 3.94174 17.1827C3.38499 16.6578 3.04989 15.9399 3.005 15.176L3 15V9C2.99996 8.23479 3.29233 7.49849 3.81728 6.94174C4.34224 6.38499 5.06011 6.04989 5.824 6.005L6 6H17Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58964">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
