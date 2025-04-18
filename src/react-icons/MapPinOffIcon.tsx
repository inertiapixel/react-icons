import React from "react";

export const MapPinOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69431)">
<path d="M9.44308 9.432C9.09114 10.0055 8.94222 10.6807 9.02024 11.349C9.09827 12.0173 9.39871 12.64 9.87329 13.117C10.3479 13.594 10.969 13.8976 11.637 13.9791C12.3049 14.0605 12.9808 13.915 13.5561 13.566M15.0011 11C15.0011 10.2044 14.685 9.44129 14.1224 8.87868C13.5598 8.31607 12.7967 8 12.0011 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.1522 17.1623L13.4142 20.9003C13.0392 21.2749 12.5308 21.4854 12.0007 21.4854C11.4707 21.4854 10.9623 21.2749 10.5872 20.9003L6.34325 16.6573C4.9291 15.2432 4.09588 13.3507 4.00777 11.3528C3.91967 9.35488 4.58307 7.3964 5.86725 5.86331M8.04725 4.04331C9.57077 3.17841 11.336 2.83732 13.0721 3.07238C14.8081 3.30743 16.4191 4.10566 17.6578 5.34455C18.8964 6.58345 19.6944 8.19457 19.9291 9.93068C20.1638 11.6668 19.8224 13.432 18.9572 14.9553"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69431">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
