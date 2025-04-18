import React from "react";

export const SkewXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63584)">
<path d="M4 5.2032V18.7932C3.99999 18.9401 4.03235 19.0852 4.09478 19.2182C4.15722 19.3512 4.24819 19.4688 4.36122 19.5627C4.47426 19.6565 4.60659 19.7243 4.74879 19.7612C4.891 19.7981 5.03959 19.8032 5.184 19.7762L19.184 17.1512C19.4133 17.1083 19.6204 16.9865 19.7694 16.807C19.9185 16.6275 20 16.4015 20 16.1682V7.8282C20 7.59489 19.9185 7.36892 19.7694 7.1894C19.6204 7.00989 19.4133 6.88813 19.184 6.8452L5.184 4.2202C5.03959 4.19317 4.891 4.19828 4.74879 4.23519C4.60659 4.2721 4.47426 4.33989 4.36122 4.43373C4.24819 4.52758 4.15722 4.64518 4.09478 4.77817C4.03235 4.91117 3.99999 5.05628 4 5.2032Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63584">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
