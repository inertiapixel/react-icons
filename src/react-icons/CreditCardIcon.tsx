import React from "react";

export const CreditCardIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58280)">
<path d="M22 10V16C22 17.0609 21.5786 18.0783 20.8284 18.8284C20.0783 19.5786 19.0609 20 18 20H6C4.93913 20 3.92172 19.5786 3.17157 18.8284C2.42143 18.0783 2 17.0609 2 16V10H22ZM7.01 14H7C6.86868 14.0007 6.73877 14.0272 6.6177 14.078C6.49662 14.1289 6.38675 14.2031 6.29436 14.2964C6.10776 14.4849 6.00367 14.7398 6.005 15.005C6.00566 15.1363 6.03217 15.2662 6.08303 15.3873C6.1339 15.5084 6.20811 15.6182 6.30143 15.7106C6.39475 15.803 6.50536 15.8761 6.62694 15.9258C6.74851 15.9754 6.87868 16.0007 7.01 16C7.27522 16 7.52957 15.8946 7.71711 15.7071C7.90464 15.5196 8.01 15.2652 8.01 15C8.01 14.7348 7.90464 14.4804 7.71711 14.2929C7.52957 14.1054 7.27522 14 7.01 14ZM13 14H11C10.7348 14 10.4804 14.1054 10.2929 14.2929C10.1054 14.4804 10 14.7348 10 15C10 15.2652 10.1054 15.5196 10.2929 15.7071C10.4804 15.8946 10.7348 16 11 16H13C13.2652 16 13.5196 15.8946 13.7071 15.7071C13.8946 15.5196 14 15.2652 14 15C14 14.7348 13.8946 14.4804 13.7071 14.2929C13.5196 14.1054 13.2652 14 13 14ZM18 4C19.0609 4 20.0783 4.42143 20.8284 5.17157C21.5786 5.92172 22 6.93913 22 8H2C2 6.93913 2.42143 5.92172 3.17157 5.17157C3.92172 4.42143 4.93913 4 6 4H18Z" />
</g>
<defs>
<clipPath id="clip0_802_58280">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
