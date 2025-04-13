import React from "react";

export const ChessIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58546)">
<path d="M11.9989 2C13.0598 2 14.0772 2.42143 14.8273 3.17157C15.5775 3.92172 15.9989 4.93913 15.9989 6C15.9917 6.68998 15.8426 7.3711 15.5609 8.001L15.9989 8C16.2538 8.00028 16.4989 8.09788 16.6843 8.27285C16.8696 8.44782 16.9811 8.68695 16.9961 8.94139C17.011 9.19584 16.9282 9.44638 16.7646 9.64183C16.601 9.83729 16.369 9.9629 16.1159 9.993L15.9989 10H14.7359L15.9759 15.79C16.0311 16.0459 15.9838 16.3132 15.8441 16.5345C15.7045 16.7559 15.4836 16.9137 15.2289 16.974L15.1159 16.994L14.9989 17H8.99889C8.8597 17 8.72203 16.971 8.5947 16.9148C8.46736 16.8586 8.35317 16.7764 8.25941 16.6735C8.16566 16.5707 8.09442 16.4493 8.05025 16.3173C8.00608 16.1854 7.98995 16.0456 8.00289 15.907L8.02089 15.79L9.26089 10H7.99889C7.74401 9.99972 7.49886 9.90212 7.31352 9.72715C7.12819 9.55218 7.01666 9.31305 7.00172 9.05861C6.98678 8.80416 7.06957 8.55362 7.23316 8.35817C7.39675 8.16271 7.6288 8.0371 7.88189 8.007L7.99889 8H8.43689C8.22201 7.51586 8.08305 7.00148 8.02489 6.475L8.00489 6.216L7.99889 6C7.99889 4.93913 8.42032 3.92172 9.17046 3.17157C9.92061 2.42143 10.938 2 11.9989 2Z" fill="black"/>
<path d="M18 18H6C5.73478 18 5.48043 18.1054 5.29289 18.2929C5.10536 18.4804 5 18.7348 5 19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.4903 21.0001 17.9636 20.8201 18.33 20.4942C18.6963 20.1682 18.9301 19.719 18.987 19.232L18.998 19.058C19.0059 18.922 18.9859 18.7859 18.9394 18.658C18.8928 18.53 18.8206 18.4129 18.7271 18.3138C18.6337 18.2148 18.521 18.1358 18.3959 18.0819C18.2709 18.0279 18.1362 18 18 18Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58546">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
