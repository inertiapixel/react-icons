import React from "react";

export const Pennant2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57678)">
<path d="M13.9999 2C14.2448 2.00003 14.4812 2.08996 14.6642 2.25272C14.8473 2.41547 14.9642 2.63975 14.9929 2.883L14.9999 3V20H15.9999C16.2548 20.0003 16.4999 20.0979 16.6852 20.2728C16.8706 20.4478 16.9821 20.687 16.997 20.9414C17.012 21.1958 16.9292 21.4464 16.7656 21.6418C16.602 21.8373 16.37 21.9629 16.1169 21.993L15.9999 22H11.9999C11.745 21.9997 11.4998 21.9021 11.3145 21.7272C11.1292 21.5522 11.0176 21.313 11.0027 21.0586C10.9878 20.8042 11.0705 20.5536 11.2341 20.3582C11.3977 20.1627 11.6298 20.0371 11.8829 20.007L11.9999 20H12.9999V12.649L4.59387 8.914C3.84187 8.579 3.80387 7.549 4.48087 7.144L4.59387 7.086L12.9999 3.35V3C12.9999 2.73478 13.1052 2.48043 13.2928 2.29289C13.4803 2.10536 13.7347 2 13.9999 2Z" />
</g>
<defs>
<clipPath id="clip0_802_57678">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
