import React from "react";

export const PooIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65866)">
<path d="M10 12H10.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 12H14.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16C10.5869 16.4087 11.2849 16.6277 12 16.6277C12.7151 16.6277 13.4131 16.4087 14 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.0002 4.00109C13.0002 4.00109 14.5002 5.50109 14.5002 8.00109H14.6642C15.0487 8.02635 15.4222 8.14017 15.7555 8.33366C16.0888 8.52715 16.3729 8.79508 16.5855 9.11652C16.7981 9.43795 16.9335 9.80419 16.9811 10.1866C17.0288 10.569 16.9874 10.9573 16.8602 11.3211C17.4129 11.6021 17.865 12.0476 18.1542 12.5961C18.4434 13.1446 18.5555 13.7692 18.4752 14.3841C19.0392 14.7026 19.4849 15.1952 19.7458 15.788C20.0067 16.3809 20.0686 17.0423 19.9225 17.6734C19.7763 18.3044 19.4298 18.8712 18.9347 19.2889C18.4397 19.7067 17.8228 19.953 17.1762 19.9911H17.0002H7.00015C6.33716 19.9911 5.69283 19.7715 5.16784 19.3666C4.64285 18.9617 4.26678 18.3943 4.09838 17.7531C3.92999 17.1118 3.97876 16.4328 4.23707 15.8222C4.49538 15.2116 4.94868 14.7038 5.52615 14.3781C5.446 13.7634 5.55824 13.139 5.84744 12.5906C6.13664 12.0423 6.58859 11.5971 7.14115 11.3161C7.01393 10.9524 6.9725 10.5642 7.0201 10.1818C7.06769 9.79949 7.20302 9.4333 7.41553 9.11189C7.62803 8.79047 7.91195 8.52253 8.24511 8.32897C8.57828 8.13542 8.95168 8.02149 9.33615 7.99609H9.50015C11.0002 7.99609 12.0002 5.99609 11.0002 3.99609V4.00109Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65866">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
