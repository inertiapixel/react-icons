import React from "react";

export const InfoSquareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57957)">
<path d="M19 2C19.7652 1.99996 20.5015 2.29233 21.0583 2.81728C21.615 3.34224 21.9501 4.06011 21.995 4.824L22 5V19C22 19.7652 21.7077 20.5015 21.1827 21.0583C20.6578 21.615 19.9399 21.9501 19.176 21.995L19 22H5C4.23479 22 3.49849 21.7077 2.94174 21.1827C2.38499 20.6578 2.04989 19.9399 2.005 19.176L2 19V5C1.99996 4.23479 2.29233 3.49849 2.81728 2.94174C3.34224 2.38499 4.06011 2.04989 4.824 2.005L5 2H19ZM12 11H11L10.883 11.007C10.64 11.0359 10.4159 11.153 10.2534 11.336C10.0909 11.519 10.0011 11.7552 10.0011 12C10.0011 12.2448 10.0909 12.481 10.2534 12.664C10.4159 12.847 10.64 12.9641 10.883 12.993L11 13V16L11.007 16.117C11.0333 16.3402 11.1341 16.5481 11.293 16.707C11.4519 16.8659 11.6598 16.9667 11.883 16.993L12 17H13L13.117 16.993C13.3402 16.9667 13.5481 16.8659 13.707 16.707C13.8659 16.5481 13.9667 16.3402 13.993 16.117L14 16L13.993 15.883C13.9691 15.679 13.8829 15.4873 13.7462 15.3339C13.6095 15.1806 13.4289 15.0731 13.229 15.026L13.117 15.006L13 15V12L12.993 11.883C12.9667 11.6598 12.8659 11.4519 12.707 11.293C12.5481 11.1341 12.3402 11.0333 12.117 11.007L12 11ZM12.01 8L11.883 8.007C11.64 8.03591 11.4159 8.15296 11.2534 8.33597C11.0909 8.51897 11.0011 8.75524 11.0011 9C11.0011 9.24476 11.0909 9.48103 11.2534 9.66403C11.4159 9.84704 11.64 9.96409 11.883 9.993L12 10L12.127 9.993C12.37 9.96409 12.5941 9.84704 12.7566 9.66403C12.9191 9.48103 13.0089 9.24476 13.0089 9C13.0089 8.75524 12.9191 8.51897 12.7566 8.33597C12.5941 8.15296 12.37 8.03591 12.127 8.007L12.01 8Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57957">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
