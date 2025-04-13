import React from "react";

export const SquareRoundedLetterJIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57272)">
<path d="M11.676 2.001L12 2C19.752 2 22 4.248 22 12L21.995 12.642C21.869 19.877 19.534 22 12 22L11.358 21.995C4.228 21.87 2.063 19.6 2 12.325V12C2 4.357 4.185 2.064 11.676 2.001ZM14 7H10C9.73478 7 9.48043 7.10536 9.29289 7.29289C9.10536 7.48043 9 7.73478 9 8L9.007 8.117C9.03566 8.36025 9.15259 8.58453 9.33563 8.74728C9.51866 8.91004 9.75507 8.99997 10 9H13V14C12.9997 14.2549 12.9021 14.5 12.7272 14.6854C12.5522 14.8707 12.313 14.9822 12.0586 14.9972C11.8042 15.0121 11.5536 14.9293 11.3582 14.7657C11.1627 14.6021 11.0371 14.3701 11.007 14.117L11 14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13C9.73478 13 9.48043 13.1054 9.29289 13.2929C9.10536 13.4804 9 13.7348 9 14C9 14.7956 9.31607 15.5587 9.87868 16.1213C10.4413 16.6839 11.2044 17 12 17C12.7956 17 13.5587 16.6839 14.1213 16.1213C14.6839 15.5587 15 14.7956 15 14V8C15 7.73478 14.8946 7.48043 14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7Z" />
</g>
<defs>
<clipPath id="clip0_802_57272">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
