import React from "react";

export const MailOpenedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57764)">
<path d="M14.8715 14.2852L21.3935 20.8052C21.132 21.1522 20.7982 21.4381 20.4152 21.6433C20.0322 21.8484 19.6092 21.9678 19.1755 21.9932L18.9995 21.9982H4.99947C4.53544 21.9987 4.07764 21.8913 3.66218 21.6847C3.24672 21.478 2.88497 21.1776 2.60547 20.8072L9.12647 14.2852L11.4445 15.8302L11.5605 15.8962C11.6972 15.963 11.8473 15.9977 11.9995 15.9977C12.1516 15.9977 12.3018 15.963 12.4385 15.8962L12.5545 15.8302L14.8715 14.2852Z" />
<path d="M2 9.53516L7.429 13.1552L2 18.5852V9.53516Z" />
<path d="M22.0003 9.53516V18.5852L16.5703 13.1552L22.0003 9.53516Z" />
<path d="M12.44 2.10221L12.555 2.16821L20.999 7.79721L12 13.7972L3 7.79721L11.445 2.16721C11.5906 2.07045 11.7589 2.01354 11.9333 2.00213C12.1077 1.99073 12.2831 2.02523 12.44 2.10221Z" />
</g>
<defs>
<clipPath id="clip0_802_57764">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
