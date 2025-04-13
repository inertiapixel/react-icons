import React from "react";

export const ClockHeartIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78554)">
<path d="M20.9556 11.1074C20.7855 9.4004 20.1311 7.7776 19.0694 6.43013C18.0078 5.08267 16.5831 4.06668 14.9634 3.50185C13.3436 2.93702 11.5961 2.84688 9.92679 3.24204C8.25749 3.63721 6.73588 4.50122 5.54123 5.73229C4.34657 6.96336 3.52863 8.51021 3.18376 10.1906C2.83888 11.871 2.98144 13.615 3.59464 15.2171C4.20784 16.8192 5.26614 18.2127 6.64486 19.2334C8.02359 20.2541 9.66531 20.8596 11.3766 20.9784"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0001 21.9996L21.3501 18.7156C21.5556 18.5163 21.719 18.2778 21.8307 18.0142C21.9425 17.7507 22.0003 17.4674 22.0007 17.1812C22.0012 16.8949 21.9443 16.6115 21.8334 16.3476C21.7225 16.0837 21.5599 15.8446 21.3551 15.6446C20.9373 15.236 20.3763 15.0066 19.7918 15.0055C19.2074 15.0044 18.6455 15.2316 18.2261 15.6386L18.0021 15.8586L17.7791 15.6386C17.3613 15.2303 16.8006 15.0011 16.2163 15C15.6321 14.9989 15.0705 15.2259 14.6511 15.6326C14.4456 15.8319 14.2821 16.0703 14.1703 16.3338C14.0585 16.5974 14.0006 16.8806 14 17.1669C13.9994 17.4531 14.0562 17.7366 14.167 18.0005C14.2778 18.2645 14.4404 18.5035 14.6451 18.7036L18.0001 21.9996Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L12.5 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78554">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
