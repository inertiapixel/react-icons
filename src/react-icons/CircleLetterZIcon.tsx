import React from "react";

export const CircleLetterZIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58435)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM14 7H10C9.73478 7 9.48043 7.10536 9.29289 7.29289C9.10536 7.48043 9 7.73478 9 8L9.007 8.117C9.03566 8.36025 9.15259 8.58453 9.33563 8.74728C9.51866 8.91004 9.75507 8.99997 10 9H12.382L9.106 15.553C9.02984 15.7054 8.99388 15.8748 9.00155 16.045C9.00921 16.2152 9.06025 16.3806 9.14981 16.5256C9.23936 16.6706 9.36448 16.7902 9.51327 16.8733C9.66207 16.9563 9.82961 16.9999 10 17H14C14.2652 17 14.5196 16.8946 14.7071 16.7071C14.8946 16.5196 15 16.2652 15 16L14.993 15.883C14.9643 15.6397 14.8474 15.4155 14.6644 15.2527C14.4813 15.09 14.2449 15 14 15H11.618L14.894 8.447C14.9702 8.29458 15.0061 8.12522 14.9985 7.95501C14.9908 7.78479 14.9398 7.61935 14.8502 7.47439C14.7606 7.32944 14.6355 7.20977 14.4867 7.12674C14.3379 7.04372 14.1704 7.00009 14 7Z" />
</g>
<defs>
<clipPath id="clip0_802_58435">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
