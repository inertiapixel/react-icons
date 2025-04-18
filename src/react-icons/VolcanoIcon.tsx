import React from "react";

export const VolcanoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60197)">
<path d="M9 8V7C9 6.46957 8.78929 5.96086 8.41421 5.58579C8.03914 5.21071 7.53043 5 7 5C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8V7C15 6.46957 15.2107 5.96086 15.5858 5.58579C15.9609 5.21071 16.4696 5 17 5C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20L7.472 12.188C7.62911 11.8344 7.88543 11.5339 8.2099 11.323C8.53436 11.1122 8.91303 11 9.3 11H14.7C15.087 11 15.4656 11.1122 15.7901 11.323C16.1146 11.5339 16.3709 11.8344 16.528 12.188L20 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.19141 15.0643C6.34684 15.0253 6.50618 15.0038 6.66641 15.0003C7.19341 14.9913 7.69241 15.1783 7.99941 15.5003C8.30641 15.8203 8.80541 16.0073 9.33241 16.0003C9.85941 16.0073 10.3584 15.8203 10.6664 15.5003C10.9734 15.1783 11.4724 14.9913 11.9994 15.0003C12.5264 14.9913 13.0254 15.1783 13.3324 15.5003C13.6404 15.8203 14.1394 16.0073 14.6664 16.0003C15.1934 16.0073 15.6924 15.8203 15.9994 15.5003C16.3064 15.1783 16.8054 14.9913 17.3324 15.0003C17.4934 15.0033 17.6524 15.0253 17.8044 15.0643"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60197">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
