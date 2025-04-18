import React from "react";

export const SnowmanIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63478)">
<path d="M11.999 3C12.7809 2.99975 13.5458 3.22868 14.199 3.65848C14.8522 4.08828 15.3651 4.70009 15.6743 5.41828C15.9834 6.13647 16.0754 6.92953 15.9386 7.6994C15.8019 8.46927 15.4426 9.18219 14.905 9.75C16.0689 10.394 16.9857 11.4065 17.5114 12.6284C18.0372 13.8502 18.142 15.2121 17.8094 16.5C17.4769 17.7879 16.7258 18.9288 15.6742 19.7433C14.6226 20.5579 13.3302 20.9999 12 20.9999C10.6699 20.9999 9.37741 20.5579 8.32583 19.7433C7.27424 18.9288 6.52313 17.7879 6.19057 16.5C5.858 15.2121 5.96282 13.8502 6.48856 12.6284C7.0143 11.4065 7.93115 10.394 9.095 9.75C8.55755 9.18231 8.19823 8.46957 8.06145 7.69989C7.92466 6.9302 8.01641 6.13731 8.32536 5.4192C8.63431 4.70109 9.1469 4.08925 9.7998 3.6593C10.4527 3.22936 11.2173 3.00014 11.999 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 11.5L20 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 11.5L4 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13H12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16H12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63478">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
