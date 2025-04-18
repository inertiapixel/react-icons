import React from "react";

export const Number3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67351)">
<path d="M12 12C12.7911 12 13.5645 11.7654 14.2223 11.3259C14.8801 10.8864 15.3928 10.2616 15.6955 9.53074C15.9983 8.79983 16.0775 7.99556 15.9231 7.21964C15.7688 6.44372 15.3878 5.73098 14.8284 5.17157C14.269 4.61216 13.5563 4.2312 12.7804 4.07686C12.0044 3.92252 11.2002 4.00173 10.4693 4.30448C9.73836 4.60723 9.11365 5.11992 8.67412 5.77772C8.2346 6.43552 8 7.20888 8 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16C8 16.7911 8.2346 17.5645 8.67412 18.2223C9.11365 18.8801 9.73836 19.3928 10.4693 19.6955C11.2002 19.9983 12.0044 20.0775 12.7804 19.9231C13.5563 19.7688 14.269 19.3878 14.8284 18.8284C15.3878 18.269 15.7688 17.5563 15.9231 16.7804C16.0775 16.0044 15.9983 15.2002 15.6955 14.4693C15.3928 13.7384 14.8801 13.1136 14.2223 12.6741C13.5645 12.2346 12.7911 12 12 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67351">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
