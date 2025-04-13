import React from "react";

export const TimelineEventIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57114)">
<path d="M12 17C13.306 17 14.418 17.835 14.83 19H20C20.2652 19 20.5196 19.1054 20.7071 19.2929C20.8946 19.4804 21 19.7348 21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H14.829C14.622 21.5848 14.2388 22.0912 13.7322 22.4492C13.2256 22.8073 12.6204 22.9996 12 22.9996C11.3796 22.9996 10.7744 22.8073 10.2678 22.4492C9.7612 22.0912 9.37802 21.5848 9.171 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20C3 19.7348 3.10536 19.4804 3.29289 19.2929C3.48043 19.1054 3.73478 19 4 19H9.17C9.37701 18.4149 9.76032 17.9084 10.2671 17.5502C10.774 17.1921 11.3794 16.9998 12 17Z" fill="black"/>
<path d="M17 2C17.5304 2 18.0391 2.21071 18.4142 2.58579C18.7893 2.96086 19 3.46957 19 4V12C19 12.5304 18.7893 13.0391 18.4142 13.4142C18.0391 13.7893 17.5304 14 17 14H14.414L12.707 15.707C12.5348 15.8792 12.3057 15.9826 12.0627 15.9979C11.8197 16.0132 11.5794 15.9393 11.387 15.79L11.293 15.707L9.585 14H7C6.49542 14.0002 6.00943 13.8096 5.63945 13.4665C5.26947 13.1234 5.04284 12.6532 5.005 12.15L5 12V4C5 3.46957 5.21071 2.96086 5.58579 2.58579C5.96086 2.21071 6.46957 2 7 2H17Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57114">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
