import React from "react";

export const BrandFlipboardIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82286)">
<path d="M3.973 3H20.027C20.564 3 21 3.436 21 3.973V8.025C21 8.28306 20.8975 8.53054 20.715 8.71301C20.5325 8.89549 20.2851 8.998 20.027 8.998H15.002V13.829C15.002 14.477 14.477 15.002 13.829 15.002H9V20.027C9 20.1549 8.9748 20.2815 8.92584 20.3996C8.87688 20.5177 8.80512 20.625 8.71466 20.7154C8.6242 20.8057 8.51682 20.8774 8.39866 20.9262C8.28049 20.9751 8.15386 21.0001 8.026 21H3.973C3.71494 21 3.46746 20.8975 3.28499 20.715C3.10251 20.5325 3 20.2851 3 20.027V3.973C3 3.436 3.436 3 3.973 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82286">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
