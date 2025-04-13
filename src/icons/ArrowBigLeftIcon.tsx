import React from "react";

export const ArrowBigLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59113)">
<path d="M9.58564 3.99964L2.99964 10.5856C2.62469 10.9607 2.41406 11.4693 2.41406 11.9996C2.41406 12.53 2.62469 13.0386 2.99964 13.4136L9.58564 19.9996C9.86533 20.2795 10.2217 20.4701 10.6098 20.5474C10.9978 20.6246 11.4001 20.585 11.7656 20.4336L11.9106 20.3656C12.2384 20.1979 12.5135 19.943 12.7057 19.6289C12.8978 19.3148 12.9995 18.9538 12.9996 18.5856V15.9996H19.9996C20.5301 15.9996 21.0388 15.7889 21.4138 15.4138C21.7889 15.0388 21.9996 14.5301 21.9996 13.9996V9.99964L21.9946 9.84964C21.9568 9.34648 21.7302 8.87622 21.3602 8.53313C20.9902 8.19004 20.5042 7.99948 19.9996 7.99964L12.9996 7.99864V5.41364C12.9996 5.01814 12.8822 4.63154 12.6624 4.30272C12.4427 3.9739 12.1303 3.71762 11.7649 3.56628C11.3995 3.41494 10.9975 3.37533 10.6096 3.45247C10.2217 3.5296 9.86534 3.72002 9.58564 3.99964Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_59113">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
