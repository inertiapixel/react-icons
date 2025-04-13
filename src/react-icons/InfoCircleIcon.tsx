import React from "react";

export const InfoCircleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57969)">
<path d="M12 2C17.523 2 22 6.477 22 12C22.0021 14.6255 20.9715 17.1464 19.1309 19.0186C17.2902 20.8908 14.7872 21.9641 12.162 22.0066C9.53689 22.0491 7.00034 21.0576 5.1 19.246C3.19966 17.4344 2.08799 14.9482 2.005 12.324L2 12L2.004 11.72C2.152 6.327 6.57 2 12 2ZM12 11H11L10.883 11.007C10.64 11.0359 10.4159 11.153 10.2534 11.336C10.0909 11.519 10.0011 11.7552 10.0011 12C10.0011 12.2448 10.0909 12.481 10.2534 12.664C10.4159 12.847 10.64 12.9641 10.883 12.993L11 13V16L11.007 16.117C11.0333 16.3402 11.1341 16.5481 11.293 16.707C11.4519 16.8659 11.6598 16.9667 11.883 16.993L12 17H13L13.117 16.993C13.3402 16.9667 13.5481 16.8659 13.707 16.707C13.8659 16.5481 13.9667 16.3402 13.993 16.117L14 16L13.993 15.883C13.9691 15.679 13.8829 15.4873 13.7462 15.3339C13.6095 15.1806 13.4289 15.0731 13.229 15.026L13.117 15.006L13 15V12L12.993 11.883C12.9667 11.6598 12.8659 11.4519 12.707 11.293C12.5481 11.1341 12.3402 11.0333 12.117 11.007L12 11ZM12.01 8L11.883 8.007C11.64 8.03591 11.4159 8.15296 11.2534 8.33597C11.0909 8.51897 11.0011 8.75524 11.0011 9C11.0011 9.24476 11.0909 9.48103 11.2534 9.66403C11.4159 9.84704 11.64 9.96409 11.883 9.993L12 10L12.127 9.993C12.37 9.96409 12.5941 9.84704 12.7566 9.66403C12.9191 9.48103 13.0089 9.24476 13.0089 9C13.0089 8.75524 12.9191 8.51897 12.7566 8.33597C12.5941 8.15296 12.37 8.03591 12.127 8.007L12.01 8Z" />
</g>
<defs>
<clipPath id="clip0_802_57969">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
