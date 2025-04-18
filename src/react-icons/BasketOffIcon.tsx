import React from "react";

export const BasketOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84132)">
<path d="M17 10L15 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 10L7.75 7.748M8.751 4.746L9 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9992 8H18.9992C19.2876 7.99997 19.5726 8.06229 19.8346 8.1827C20.0966 8.30311 20.3295 8.47876 20.5173 8.6976C20.7051 8.91645 20.8433 9.17331 20.9225 9.45059C21.0017 9.72786 21.0201 10.019 20.9762 10.304C20.5342 12.82 20.2202 14.742 19.9992 16M18.9892 19.003C18.7079 19.317 18.3635 19.568 17.9786 19.7398C17.5936 19.9116 17.1768 20.0003 16.7552 20H7.24324C6.52664 20 5.83372 19.7434 5.28987 19.2768C4.74602 18.8102 4.38716 18.1643 4.27824 17.456L3.02324 10.304C2.97941 10.019 2.99773 9.72786 3.07694 9.45059C3.15616 9.17331 3.2944 8.91645 3.48218 8.6976C3.66997 8.47876 3.90286 8.30311 4.16488 8.1827C4.42691 8.06229 4.71187 7.99997 5.00024 8H7.99924"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12C11.6044 12 11.2178 12.1173 10.8889 12.3371C10.56 12.5568 10.3036 12.8692 10.1522 13.2346C10.0009 13.6001 9.96126 14.0022 10.0384 14.3902C10.1156 14.7781 10.3061 15.1345 10.5858 15.4142C10.8655 15.6939 11.2219 15.8844 11.6098 15.9616C11.9978 16.0387 12.3999 15.9991 12.7654 15.8478C13.1308 15.6964 13.4432 15.44 13.6629 15.1111C13.8827 14.7822 14 14.3956 14 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84132">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
