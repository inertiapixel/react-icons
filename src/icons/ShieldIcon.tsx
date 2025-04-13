import React from "react";

export const ShieldIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57542)">
<path d="M11.8834 2.007L11.9974 2L12.1154 2.007L12.1744 2.015L12.2354 2.028L12.3464 2.062C12.4231 2.09026 12.496 2.12788 12.5634 2.174L12.6674 2.256L12.9224 2.474C14.9397 4.14956 17.4893 5.0493 20.1114 5.011L20.4534 5.001C20.677 4.9908 20.8976 5.05591 21.0798 5.1859C21.262 5.31589 21.3953 5.50326 21.4584 5.718C21.9498 7.38958 22.1002 9.14288 21.9006 10.8737C21.701 12.6046 21.1555 14.2776 20.2965 15.7935C19.4376 17.3093 18.2827 18.6371 16.9005 19.6978C15.5182 20.7585 13.9369 21.5305 12.2504 21.968C12.0858 22.0107 11.913 22.0107 11.7484 21.968C10.0618 21.5306 8.48038 20.7587 7.09804 19.698C5.7157 18.6374 4.56069 17.3096 3.70163 15.7938C2.84257 14.2779 2.29701 12.6048 2.09735 10.8739C1.89769 9.14301 2.04802 7.38964 2.53941 5.718C2.60252 5.50326 2.73585 5.31589 2.91805 5.1859C3.10026 5.05591 3.32081 4.9908 3.54441 5.001C6.28187 5.12613 8.96747 4.22499 11.0754 2.474L11.3384 2.249L11.4344 2.174C11.5019 2.12788 11.5747 2.09026 11.6514 2.062L11.7634 2.028C11.8026 2.01853 11.8433 2.01152 11.8834 2.007Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57542">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
