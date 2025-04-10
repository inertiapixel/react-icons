import React from "react";

export const ChartGridDotsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58578)">
<path d="M18 2C18.2652 2 18.5196 2.10536 18.7071 2.29289C18.8946 2.48043 19 2.73478 19 3V3.171C19.422 3.32061 19.8053 3.56253 20.1219 3.87913C20.4385 4.19572 20.6804 4.579 20.83 5.001L21 5C21.2652 5 21.5196 5.10536 21.7071 5.29289C21.8946 5.48043 22 5.73478 22 6C22 6.26522 21.8946 6.51957 21.7071 6.70711C21.5196 6.89464 21.2652 7 21 7H20.829C20.6795 7.42161 20.4378 7.80456 20.1216 8.12096C19.8053 8.43736 19.4225 8.67925 19.001 8.829L19 11H21C21.2652 11 21.5196 11.1054 21.7071 11.2929C21.8946 11.4804 22 11.7348 22 12C22 12.2652 21.8946 12.5196 21.7071 12.7071C21.5196 12.8946 21.2652 13 21 13H19V15.171C19.422 15.3206 19.8053 15.5625 20.1219 15.8791C20.4385 16.1957 20.6804 16.579 20.83 17.001L21 17C21.2652 17 21.5196 17.1054 21.7071 17.2929C21.8946 17.4804 22 17.7348 22 18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H20.829C20.6795 19.4216 20.4378 19.8046 20.1216 20.121C19.8053 20.4374 19.4225 20.6792 19.001 20.829L19 21C19 21.2652 18.8946 21.5196 18.7071 21.7071C18.5196 21.8946 18.2652 22 18 22C17.7348 22 17.4804 21.8946 17.2929 21.7071C17.1054 21.5196 17 21.2652 17 21V20.83C16.5782 20.6803 16.1951 20.4383 15.8787 20.1217C15.5623 19.8051 15.3205 19.4219 15.171 19H13V21C13 21.2652 12.8946 21.5196 12.7071 21.7071C12.5196 21.8946 12.2652 22 12 22C11.7348 22 11.4804 21.8946 11.2929 21.7071C11.1054 21.5196 11 21.2652 11 21V19H8.829C8.67948 19.4216 8.4378 19.8046 8.12157 20.121C7.80534 20.4374 7.42252 20.6792 7.001 20.829L7 21C7 21.2652 6.89464 21.5196 6.70711 21.7071C6.51957 21.8946 6.26522 22 6 22C5.73478 22 5.48043 21.8946 5.29289 21.7071C5.10536 21.5196 5 21.2652 5 21V20.83C4.57819 20.6803 4.19511 20.4383 3.87869 20.1217C3.56228 19.8051 3.3205 19.4219 3.171 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18C2 17.7348 2.10536 17.4804 2.29289 17.2929C2.48043 17.1054 2.73478 17 3 17H3.17C3.31961 16.578 3.56153 16.1947 3.87813 15.8781C4.19472 15.5615 4.578 15.3196 5 15.17V14.83C4.57819 14.6803 4.19511 14.4383 3.87869 14.1217C3.56228 13.8051 3.3205 13.4219 3.171 13H3C2.73478 13 2.48043 12.8946 2.29289 12.7071C2.10536 12.5196 2 12.2652 2 12C2 11.7348 2.10536 11.4804 2.29289 11.2929C2.48043 11.1054 2.73478 11 3 11H3.17C3.31961 10.578 3.56153 10.1947 3.87813 9.87813C4.19472 9.56153 4.578 9.31961 5 9.17V7H3C2.73478 7 2.48043 6.89464 2.29289 6.70711C2.10536 6.51957 2 6.26522 2 6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5H5V3C5 2.73478 5.10536 2.48043 5.29289 2.29289C5.48043 2.10536 5.73478 2 6 2C6.26522 2 6.51957 2.10536 6.70711 2.29289C6.89464 2.48043 7 2.73478 7 3V5H11V3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V5H15.17C15.3196 4.578 15.5615 4.19472 15.8781 3.87813C16.1947 3.56153 16.578 3.31961 17 3.17V3C17 2.73478 17.1054 2.48043 17.2929 2.29289C17.4804 2.10536 17.7348 2 18 2ZM11 13H8.829C8.67948 13.4216 8.4378 13.8046 8.12157 14.121C7.80534 14.4374 7.42252 14.6792 7.001 14.829V15.171C7.42252 15.3208 7.80534 15.5626 8.12157 15.879C8.4378 16.1954 8.67948 16.5784 8.829 17H11V13ZM17 13H13V17H15.17C15.3196 16.578 15.5615 16.1947 15.8781 15.8781C16.1947 15.5615 16.578 15.3196 17 15.17V13ZM11 7H7V9.171C7.422 9.32061 7.80528 9.56253 8.12187 9.87913C8.43847 10.1957 8.68039 10.579 8.83 11.001L11 11V7ZM15.171 7H13V11H17V8.83C16.5782 8.68027 16.1951 8.43828 15.8787 8.1217C15.5623 7.80511 15.3205 7.4219 15.171 7Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58578">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
