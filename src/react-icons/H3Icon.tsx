import React from "react";

export const H3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72532)">
<path d="M19 14C19.3956 14 19.7822 13.8827 20.1111 13.6629C20.44 13.4432 20.6964 13.1308 20.8478 12.7654C20.9991 12.3999 21.0387 11.9978 20.9616 11.6098C20.8844 11.2219 20.6939 10.8655 20.4142 10.5858C20.1345 10.3061 19.7781 10.1156 19.3902 10.0384C19.0022 9.96126 18.6001 10.0009 18.2346 10.1522C17.8692 10.3036 17.5568 10.56 17.3371 10.8889C17.1173 11.2178 17 11.6044 17 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 16C17 16.3956 17.1173 16.7822 17.3371 17.1111C17.5568 17.44 17.8692 17.6964 18.2346 17.8478C18.6001 17.9991 19.0022 18.0387 19.3902 17.9616C19.7781 17.8844 20.1345 17.6939 20.4142 17.4142C20.6939 17.1345 20.8844 16.7781 20.9616 16.3902C21.0387 16.0022 20.9991 15.6001 20.8478 15.2346C20.6964 14.8692 20.44 14.5568 20.1111 14.3371C19.7822 14.1173 19.3956 14 19 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 18H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 18H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 6H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72532">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
