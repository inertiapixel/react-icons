import React from "react";

export const MessageCircle2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57744)">
<path d="M5.821 4.91178C9.719 2.14678 15.29 2.37279 18.894 5.44779C22.561 8.57479 23.062 13.6858 20.046 17.3448C17.204 20.7918 12.081 21.9278 7.815 20.1498L7.583 20.0488L3.208 20.9798L3.133 20.9928L3.023 21.0018L2.91 20.9978L2.866 20.9928L2.756 20.9728L2.651 20.9388L2.551 20.8948L2.475 20.8528L2.367 20.7758L2.286 20.7018L2.213 20.6188L2.16 20.5438L2.095 20.4288L2.053 20.3228L2.022 20.2098L2.009 20.1348L2 20.0248L2.004 19.9118L2.009 19.8678L2.029 19.7578L2.051 19.6858L3.201 16.2348L3.179 16.1988C0.969 12.4518 1.97 7.80679 5.59 5.08079L5.82 4.91278L5.821 4.91178Z" />
</g>
<defs>
<clipPath id="clip0_802_57744">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
