import React from "react";

export const ClockPlayIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78468)">
<path d="M12 7V12L14 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 22L22 19L17 16V22Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.0164 20.9424C11.1343 21.1564 9.23261 20.771 7.58227 19.8412C5.93193 18.9114 4.61704 17.4845 3.82485 15.7639C3.03266 14.0432 2.80356 12.1165 3.17019 10.2581C3.53681 8.39966 4.48047 6.70429 5.86676 5.41341C7.25305 4.12254 9.0113 3.30197 10.8911 3.06858C12.7709 2.83519 14.6765 3.20087 16.3363 4.11355C17.9962 5.02623 19.3258 6.43936 20.1358 8.15171C20.9457 9.86406 21.1948 11.7883 20.8474 13.6504"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78468">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
