import React from "react";

export const AlertTriangleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59215)">
<path d="M11.9992 1.67188C12.9542 1.67188 13.8442 2.13888 14.3892 2.91888L14.4942 3.07887L22.6082 16.6269C22.8548 17.054 22.989 17.5366 22.9981 18.0297C23.0073 18.5228 22.8912 19.0101 22.6607 19.4461C22.4302 19.882 22.0928 20.2523 21.6801 20.5224C21.2674 20.7924 20.793 20.9532 20.3012 20.9899L20.1062 20.9979H3.88121C3.38891 20.9923 2.90605 20.8622 2.47768 20.6195C2.04932 20.3768 1.68942 20.0296 1.43158 19.6102C1.17374 19.1907 1.02637 18.7128 1.00322 18.2211C0.980076 17.7293 1.08191 17.2396 1.29921 16.7979L1.39821 16.6129L9.50821 3.07487C9.76787 2.64669 10.1335 2.29264 10.5698 2.04689C11.0062 1.80114 11.4984 1.67199 11.9992 1.67188ZM12.0092 15.0019L11.8822 15.0089C11.6392 15.0378 11.4152 15.1548 11.2526 15.3378C11.0901 15.5208 11.0003 15.7571 11.0003 16.0019C11.0003 16.2466 11.0901 16.4829 11.2526 16.6659C11.4152 16.8489 11.6392 16.966 11.8822 16.9949L11.9992 17.0019L12.1262 16.9949C12.3693 16.966 12.5933 16.8489 12.7558 16.6659C12.9183 16.4829 13.0081 16.2466 13.0081 16.0019C13.0081 15.7571 12.9183 15.5208 12.7558 15.3378C12.5933 15.1548 12.3693 15.0378 12.1262 15.0089L12.0092 15.0019ZM11.9992 8.00187C11.7543 8.00191 11.5179 8.09183 11.3348 8.25459C11.1518 8.41735 11.0349 8.64162 11.0062 8.88488L10.9992 9.00187V13.0019L11.0062 13.1189C11.0351 13.3619 11.1522 13.5859 11.3352 13.7485C11.5182 13.911 11.7544 14.0008 11.9992 14.0008C12.244 14.0008 12.4802 13.911 12.6632 13.7485C12.8463 13.5859 12.9633 13.3619 12.9922 13.1189L12.9992 13.0019V9.00187L12.9922 8.88488C12.9636 8.64162 12.8466 8.41735 12.6636 8.25459C12.4805 8.09183 12.2441 8.00191 11.9992 8.00187Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_59215">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
