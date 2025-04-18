import React from "react";

export const GuitarPick1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72569)">
<path d="M16 18.5C18 16 20 12 20 8C20 5.054 17.916 3.843 15.796 3.346C14.932 3.116 13.666 3 12 3C10.333 3 9.068 3.115 8.204 3.346C6.084 3.843 4 5.054 4 8C4 11.312 6 16 8 18.5C8.297 18.87 8.618 19.231 8.963 19.581L9.317 19.928C10.0414 20.6142 11.0012 20.9966 11.999 20.9966C12.9968 20.9966 13.9566 20.6142 14.681 19.928C15.1531 19.483 15.5938 19.0059 16 18.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72569">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
