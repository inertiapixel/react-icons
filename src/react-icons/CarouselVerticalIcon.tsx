import React from "react";

export const CarouselVerticalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58616)">
<path d="M18 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V8C20 7.46957 19.7893 6.96086 19.4142 6.58579C19.0391 6.21071 18.5304 6 18 6Z" />
<path d="M16 19C16.5046 18.9998 16.9906 19.1904 17.3605 19.5335C17.7305 19.8766 17.9572 20.3468 17.995 20.85L18 21V22C17.9997 22.2549 17.9021 22.5 17.7272 22.6854C17.5522 22.8707 17.313 22.9822 17.0586 22.9972C16.8042 23.0121 16.5536 22.9293 16.3582 22.7657C16.1627 22.6021 16.0371 22.3701 16.007 22.117L16 22V21H8V22C7.99972 22.2549 7.90212 22.5 7.72715 22.6854C7.55218 22.8707 7.31305 22.9822 7.05861 22.9972C6.80416 23.0121 6.55362 22.9293 6.35817 22.7657C6.16271 22.6021 6.0371 22.3701 6.007 22.117L6 22V21C5.99984 20.4954 6.19041 20.0094 6.5335 19.6395C6.87659 19.2695 7.34684 19.0428 7.85 19.005L8 19H16Z" />
<path d="M17 1C17.2449 1.00003 17.4813 1.08996 17.6644 1.25272C17.8474 1.41547 17.9643 1.63975 17.993 1.883L18 2V3C18.0002 3.50458 17.8096 3.99057 17.4665 4.36055C17.1234 4.73053 16.6532 4.95716 16.15 4.995L16 5H8C7.49542 5.00016 7.00943 4.80959 6.63945 4.4665C6.26947 4.12341 6.04284 3.65316 6.005 3.15L6 3V2C6.00028 1.74512 6.09788 1.49997 6.27285 1.31463C6.44782 1.1293 6.68695 1.01777 6.94139 1.00283C7.19584 0.987891 7.44638 1.07067 7.64183 1.23426C7.83729 1.39786 7.9629 1.6299 7.993 1.883L8 2V3H16V2C16 1.73478 16.1054 1.48043 16.2929 1.29289C16.4804 1.10536 16.7348 1 17 1Z" />
</g>
<defs>
<clipPath id="clip0_802_58616">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
