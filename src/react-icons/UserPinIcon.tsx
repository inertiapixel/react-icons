import React from "react";

export const UserPinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60640)">
<path d="M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.121 20.1216C21.5406 19.7021 21.8265 19.1676 21.9423 18.5856C22.0581 18.0036 21.9988 17.4004 21.7717 16.8522C21.5447 16.3039 21.1602 15.8353 20.6668 15.5057C20.1734 15.176 19.5934 15 19 15C18.4066 15 17.8266 15.176 17.3332 15.5057C16.8398 15.8353 16.4553 16.3039 16.2283 16.8522C16.0012 17.4004 15.9419 18.0036 16.0577 18.5856C16.1735 19.1676 16.4594 19.7021 16.879 20.1216C17.297 20.5406 18.004 21.1666 19 22.0006C20.051 21.1106 20.759 20.4846 21.121 20.1216Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18V18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60640">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
