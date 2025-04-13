import React from "react";

export const CircleNumber1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58429)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12.994 7.886C12.911 7.109 11.986 6.726 11.377 7.216L11.293 7.293L9.293 9.293L9.21 9.387C9.07393 9.56237 9.00008 9.77803 9.00008 10C9.00008 10.222 9.07393 10.4376 9.21 10.613L9.293 10.707L9.387 10.79C9.56237 10.9261 9.77803 10.9999 10 10.9999C10.222 10.9999 10.4376 10.9261 10.613 10.79L10.707 10.707L11 10.414V16L11.007 16.117C11.0359 16.3601 11.153 16.5841 11.336 16.7466C11.519 16.9091 11.7552 16.9989 12 16.9989C12.2448 16.9989 12.481 16.9091 12.664 16.7466C12.847 16.5841 12.9641 16.3601 12.993 16.117L13 16V8L12.994 7.886Z" />
</g>
<defs>
<clipPath id="clip0_802_58429">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
