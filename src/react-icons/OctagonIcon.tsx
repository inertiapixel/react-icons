import React from "react";

export const OctagonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57697)">
<path d="M15.3002 2.00024H8.70024C8.13824 2.00024 7.68424 2.20124 7.29324 2.59324L2.59324 7.29324C2.40217 7.47378 2.25077 7.69211 2.14868 7.93434C2.04659 8.17657 1.99604 8.43741 2.00024 8.70024V15.3002C2.00024 15.8622 2.20124 16.3162 2.59324 16.7072L7.29324 21.4072C7.68424 21.7992 8.13824 22.0002 8.70024 22.0002H15.3002C15.8622 22.0002 16.3162 21.7992 16.7072 21.4072L21.4072 16.7072C21.7992 16.3162 22.0002 15.8622 22.0002 15.3002V8.70024C22.0002 8.13824 21.7992 7.68424 21.4072 7.29324L16.7072 2.59324C16.5267 2.40217 16.3084 2.25077 16.0661 2.14868C15.8239 2.04659 15.5631 1.99604 15.3002 2.00024Z" />
</g>
<defs>
<clipPath id="clip0_802_57697">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
