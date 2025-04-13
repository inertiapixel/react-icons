import React from "react";

export const AdCircleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59264)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.57 22 2.152 17.673 2.004 12.28L2 12L2.004 11.72C2.152 6.327 6.57 2 12 2ZM8.5 8C7.86528 7.9999 7.25429 8.24123 6.79095 8.67504C6.32762 9.10885 6.04664 9.70265 6.005 10.336L6 10.5V15L6.007 15.117C6.03591 15.36 6.15296 15.5841 6.33596 15.7466C6.51897 15.9091 6.75524 15.9989 7 15.9989C7.24476 15.9989 7.48103 15.9091 7.66404 15.7466C7.84704 15.5841 7.96409 15.36 7.993 15.117L8 15V14H9V15L9.007 15.117C9.03591 15.36 9.15296 15.5841 9.33597 15.7466C9.51897 15.9091 9.75524 15.9989 10 15.9989C10.2448 15.9989 10.481 15.9091 10.664 15.7466C10.847 15.5841 10.9641 15.36 10.993 15.117L11 15V10.5L10.995 10.336C10.9534 9.70265 10.6724 9.10885 10.209 8.67504C9.74571 8.24123 9.13472 7.9999 8.5 8ZM15 8H14C13.7348 8 13.4804 8.10536 13.2929 8.29289C13.1054 8.48043 13 8.73478 13 9V15C13 15.2652 13.1054 15.5196 13.2929 15.7071C13.4804 15.8946 13.7348 16 14 16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V11C18 10.2044 17.6839 9.44129 17.1213 8.87868C16.5587 8.31607 15.7956 8 15 8ZM15 10C15.2652 10 15.5196 10.1054 15.7071 10.2929C15.8946 10.4804 16 10.7348 16 11V13C16 13.2449 15.91 13.4813 15.7473 13.6644C15.5845 13.8474 15.3603 13.9643 15.117 13.993L15 14V10ZM8.5 10C8.61703 9.99996 8.73036 10.041 8.82026 10.1159C8.91016 10.1908 8.97093 10.2949 8.992 10.41L9 10.5V12H8V10.5L8.008 10.41C8.02907 10.2949 8.08984 10.1908 8.17974 10.1159C8.26964 10.041 8.38297 9.99996 8.5 10Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_59264">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
