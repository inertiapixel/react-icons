import React from "react";

export const PacmanIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67150)">
<path d="M5.6347 5.63659C6.53013 4.741 7.6045 4.04447 8.78757 3.59254C9.97064 3.14061 11.2358 2.94345 12.5003 3.01396C13.7647 3.08446 15.0001 3.42105 16.1256 4.0017C17.2511 4.58235 18.2414 5.394 19.0317 6.38359L13.4127 12.0006L19.0317 17.6176C18.2674 18.573 17.3163 19.3625 16.2365 19.9379C15.1568 20.5133 13.9711 20.8625 12.7518 20.9642C11.5325 21.0658 10.3053 20.9178 9.14521 20.5292C7.98507 20.1406 6.91636 19.5195 6.00436 18.7039C5.09237 17.8883 4.35625 16.8953 3.84097 15.7856C3.3257 14.6759 3.0421 13.4728 3.00751 12.2498C2.97291 11.0268 3.18804 9.80957 3.63975 8.67252C4.09146 7.53546 4.77027 6.50244 5.6347 5.63659Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 8.5C12.0523 8.5 12.5 8.05228 12.5 7.5C12.5 6.94772 12.0523 6.5 11.5 6.5C10.9477 6.5 10.5 6.94772 10.5 7.5C10.5 8.05228 10.9477 8.5 11.5 8.5Z"   strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67150">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
