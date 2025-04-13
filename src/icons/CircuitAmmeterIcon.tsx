import React from "react";

export const CircuitAmmeterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78839)">
<path d="M5 12C5 12.9193 5.18106 13.8295 5.53284 14.6788C5.88463 15.5281 6.40024 16.2997 7.05025 16.9497C7.70026 17.5998 8.47194 18.1154 9.32122 18.4672C10.1705 18.8189 11.0807 19 12 19C12.9193 19 13.8295 18.8189 14.6788 18.4672C15.5281 18.1154 16.2997 17.5998 16.9497 16.9497C17.5998 16.2997 18.1154 15.5281 18.4672 14.6788C18.8189 13.8295 19 12.9193 19 12C19 11.0807 18.8189 10.1705 18.4672 9.32122C18.1154 8.47194 17.5998 7.70026 16.9497 7.05025C16.2997 6.40024 15.5281 5.88463 14.6788 5.53284C13.8295 5.18106 12.9193 5 12 5C11.0807 5 10.1705 5.18106 9.32122 5.53284C8.47194 5.88463 7.70026 6.40024 7.05025 7.05025C6.40024 7.70026 5.88463 8.47194 5.53284 9.32122C5.18106 10.1705 5 11.0807 5 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12H2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14V11C10 9.964 10.895 9 12 9C13.105 9 14 9.964 14 11V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 12H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78839">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
