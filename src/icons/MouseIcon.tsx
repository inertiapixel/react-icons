import React from "react";

export const MouseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57706)">
<path d="M14 2C15.3261 2 16.5979 2.52678 17.5355 3.46447C18.4732 4.40215 19 5.67392 19 7V17C19 18.3261 18.4732 19.5979 17.5355 20.5355C16.5979 21.4732 15.3261 22 14 22H10C8.67392 22 7.40215 21.4732 6.46447 20.5355C5.52678 19.5979 5 18.3261 5 17V7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2H14ZM12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11L11.007 11.117C11.0371 11.3701 11.1627 11.6021 11.3582 11.7657C11.5536 11.9293 11.8042 12.0121 12.0586 11.9972C12.313 11.9822 12.5522 11.8707 12.7272 11.6854C12.9021 11.5 12.9997 11.2549 13 11V7L12.993 6.883C12.9643 6.63975 12.8474 6.41547 12.6644 6.25272C12.4813 6.08996 12.2449 6.00003 12 6Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57706">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
