import React from "react";

export const EyeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58193)">
<path d="M11.9997 4C16.2897 4 19.8627 6.429 22.6647 11.154L22.8847 11.533L22.9297 11.633L22.9597 11.716L22.9737 11.771L22.9877 11.853L22.9987 11.953V12.063L22.9847 12.174C22.9781 12.2111 22.9694 12.2479 22.9587 12.284L22.9197 12.392L22.8837 12.467L22.8677 12.497C20.1037 17.333 16.5677 19.877 12.3127 19.996L11.9997 20C7.60368 20 3.96268 17.451 1.13168 12.496C1.04539 12.3449 1 12.174 1 12C1 11.826 1.04539 11.6551 1.13168 11.504C3.96268 6.549 7.60368 4 11.9997 4ZM11.9997 9C11.204 9 10.441 9.31607 9.87836 9.87868C9.31575 10.4413 8.99968 11.2044 8.99968 12C8.99968 12.7956 9.31575 13.5587 9.87836 14.1213C10.441 14.6839 11.204 15 11.9997 15C12.7953 15 13.5584 14.6839 14.121 14.1213C14.6836 13.5587 14.9997 12.7956 14.9997 12C14.9997 11.2044 14.6836 10.4413 14.121 9.87868C13.5584 9.31607 12.7953 9 11.9997 9Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58193">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
