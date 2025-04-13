import React from "react";

export const LayoutNavbarExpandIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57817)">
<path d="M18 3C18.7652 2.99996 19.5015 3.29233 20.0583 3.81728C20.615 4.34224 20.9501 5.06011 20.995 5.824L21 6V18C21 18.7652 20.7077 19.5015 20.1827 20.0583C19.6578 20.615 18.9399 20.9501 18.176 20.995L18 21H6C5.23479 21 4.49849 20.7077 3.94174 20.1827C3.38499 19.6578 3.04989 18.9399 3.005 18.176L3 18V6C2.99996 5.23479 3.29233 4.49849 3.81728 3.94174C4.34224 3.38499 5.06011 3.04989 5.824 3.005L6 3H18ZM19 9H5V18C5.00003 18.2449 5.08996 18.4813 5.25272 18.6644C5.41547 18.8474 5.63975 18.9643 5.883 18.993L6 19H18C18.2449 19 18.4813 18.91 18.6644 18.7473C18.8474 18.5845 18.9643 18.3603 18.993 18.117L19 18V9ZM10.613 12.21L10.707 12.293L12 13.585L13.293 12.293C13.4652 12.1208 13.6943 12.0174 13.9373 12.0021C14.1803 11.9868 14.4206 12.0607 14.613 12.21L14.707 12.293C14.8792 12.4652 14.9826 12.6943 14.9979 12.9373C15.0132 13.1803 14.9393 13.4206 14.79 13.613L14.707 13.707L12.707 15.707C12.5348 15.8792 12.3057 15.9826 12.0627 15.9979C11.8197 16.0132 11.5794 15.9393 11.387 15.79L11.293 15.707L9.293 13.707C9.11365 13.527 9.00953 13.2856 9.00177 13.0316C8.99402 12.7777 9.08321 12.5303 9.25125 12.3397C9.41928 12.1492 9.65355 12.0297 9.90647 12.0056C10.1594 11.9815 10.412 12.0546 10.613 12.21Z" />
</g>
<defs>
<clipPath id="clip0_802_57817">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
