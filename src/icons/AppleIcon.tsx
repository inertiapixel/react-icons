import React from "react";

export const AppleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85728)">
<path d="M5 14C5 14.9193 5.18106 15.8295 5.53284 16.6788C5.88463 17.5281 6.40024 18.2997 7.05025 18.9497C7.70026 19.5998 8.47194 20.1154 9.32122 20.4672C10.1705 20.8189 11.0807 21 12 21C12.9193 21 13.8295 20.8189 14.6788 20.4672C15.5281 20.1154 16.2997 19.5998 16.9497 18.9497C17.5998 18.2997 18.1154 17.5281 18.4672 16.6788C18.8189 15.8295 19 14.9193 19 14C19 13.0807 18.8189 12.1705 18.4672 11.3212C18.1154 10.4719 17.5998 9.70026 16.9497 9.05025C16.2997 8.40024 15.5281 7.88463 14.6788 7.53284C13.8295 7.18106 12.9193 7 12 7C11.0807 7 10.1705 7.18106 9.32122 7.53284C8.47194 7.88463 7.70026 8.40024 7.05025 9.05025C6.40024 9.70026 5.88463 10.4719 5.53284 11.3212C5.18106 12.1705 5 13.0807 5 14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11V5C12 4.46957 12.2107 3.96086 12.5858 3.58579C12.9609 3.21071 13.4696 3 14 3H16V4C16 4.53043 15.7893 5.03914 15.4142 5.41421C15.0391 5.78929 14.5304 6 14 6H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10.5C11.333 11.167 12.667 11.167 14 10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85728">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
