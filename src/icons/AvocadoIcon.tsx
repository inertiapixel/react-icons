import React from "react";

export const AvocadoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84617)">
<path d="M17.8 14.04C18.0096 13.222 18.4787 12.4939 19.137 11.965C20.332 10.98 20.953 9.68 21 8.063C20.953 6.633 20.46 5.437 19.523 4.477C18.563 3.539 17.367 3.047 15.938 3C14.32 3.047 13.02 3.668 12.035 4.863C11.473 5.543 10.781 5.988 9.961 6.199C9.023 6.387 8.133 6.679 7.289 7.079C6.445 7.477 5.73 7.957 5.145 8.519C3.715 10.02 3 11.743 3 13.688C3 15.634 3.715 17.356 5.145 18.856C6.645 20.285 8.367 21 10.313 21C12.258 21 13.98 20.285 15.48 18.855C16.043 18.27 16.535 17.555 16.957 16.711C17.355 15.867 17.637 14.988 17.801 14.074V14.039L17.8 14.04Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.8698 10.0358C9.92779 10.1478 9.07579 10.5738 8.31379 11.3138C7.57379 12.0758 7.14779 12.9278 7.03579 13.8698C6.90079 14.7898 7.14779 15.5738 7.77579 16.2238C8.42579 16.8518 9.21079 17.0988 10.1298 16.9638C11.0718 16.8518 11.9238 16.4258 12.6858 15.6858C13.4258 14.9238 13.8518 14.0718 13.9638 13.1298C14.0988 12.2098 13.8518 11.4258 13.2238 10.7758C12.5738 10.1478 11.7888 9.90079 10.8698 10.0358Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84617">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
