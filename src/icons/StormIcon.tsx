import React from "react";

export const StormIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_62376)">
<path d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12C5 12.9193 5.18106 13.8295 5.53284 14.6788C5.88463 15.5281 6.40024 16.2997 7.05025 16.9497C7.70026 17.5998 8.47194 18.1154 9.32122 18.4672C10.1705 18.8189 11.0807 19 12 19C12.9193 19 13.8295 18.8189 14.6788 18.4672C15.5281 18.1154 16.2997 17.5998 16.9497 16.9497C17.5998 16.2997 18.1154 15.5281 18.4672 14.6788C18.8189 13.8295 19 12.9193 19 12C19 11.0807 18.8189 10.1705 18.4672 9.32122C18.1154 8.47194 17.5998 7.70026 16.9497 7.05025C16.2997 6.40024 15.5281 5.88463 14.6788 5.53284C13.8295 5.18106 12.9193 5 12 5C11.0807 5 10.1705 5.18106 9.32122 5.53284C8.47194 5.88463 7.70026 6.40024 7.05025 7.05025C6.40024 7.70026 5.88463 8.47194 5.53284 9.32122C5.18106 10.1705 5 11.0807 5 12Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.36941 14.236C3.53041 10.307 3.80841 6.62 4.66541 3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.6289 9.76172C20.4659 13.6897 20.1899 17.3767 19.3319 20.9977" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62376">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
