import React from "react";

export const HorseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71603)">
<path d="M7 10L6.15 18.507C6.13099 18.6957 6.15175 18.8863 6.21094 19.0665C6.27013 19.2467 6.36643 19.4125 6.49363 19.5531C6.62084 19.6938 6.77611 19.8063 6.94945 19.8832C7.12279 19.9602 7.31034 20 7.5 20H7.646C8.0457 20 8.43624 19.8803 8.76724 19.6562C9.09824 19.4322 9.35451 19.1141 9.503 18.743L10.497 16.257C10.6455 15.8859 10.9018 15.5678 11.2328 15.3438C11.5638 15.1197 11.9543 15 12.354 15H13.646C14.0457 15 14.4362 15.1197 14.7672 15.3438C15.0982 15.5678 15.3545 15.8859 15.503 16.257L16.497 18.743C16.6455 19.1141 16.9018 19.4322 17.2328 19.6562C17.5638 19.8803 17.9543 20 18.354 20H18.5C18.6903 19.9999 18.8786 19.9602 19.0527 19.8834C19.2268 19.8066 19.383 19.6943 19.5114 19.5537C19.6397 19.4132 19.7373 19.2474 19.7981 19.067C19.8588 18.8866 19.8812 18.6956 19.864 18.506L19 9H11C11 6 8 4 5 4L2 10L4 12L7 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 14V12C22 11.2044 21.6839 10.4413 21.1213 9.87868C20.5587 9.31607 19.7956 9 19 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71603">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
