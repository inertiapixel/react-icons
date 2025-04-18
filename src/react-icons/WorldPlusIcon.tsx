import React from "react";

export const WorldPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59615)">
<path d="M20.9851 12.5181C21.0901 10.6962 20.6388 8.88539 19.6911 7.32587C18.7433 5.76636 17.3438 4.53181 15.6783 3.78597C14.0127 3.04013 12.1598 2.81824 10.3652 3.14973C8.57062 3.48122 6.91923 4.35043 5.63003 5.64207C4.34083 6.93371 3.47475 8.58674 3.14665 10.3819C2.81856 12.1771 3.04395 14.0297 3.79294 15.6938C4.54193 17.3579 5.77912 18.7551 7.34043 19.6999C8.90174 20.6447 10.7134 21.0926 12.5351 20.9841"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H15.0016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.7608 6.62181 15.5758 10.9618 14.783 15.157"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59615">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
