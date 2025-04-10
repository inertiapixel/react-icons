import React from "react";

export const ZoomOutAreaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_56999)">
<path d="M15 9C16.1013 8.99992 17.1813 9.30293 18.1218 9.87584C19.0623 10.4488 19.827 11.2695 20.3321 12.2481C20.8372 13.2267 21.0633 14.3254 20.9855 15.4239C20.9076 16.5225 20.529 17.5784 19.891 18.476L22.707 21.293C22.8892 21.4816 22.99 21.7342 22.9877 21.9964C22.9854 22.2586 22.8802 22.5094 22.6948 22.6948C22.5094 22.8802 22.2586 22.9854 21.9964 22.9877C21.7342 22.99 21.4816 22.8892 21.293 22.707L18.476 19.891C17.5784 20.529 16.5225 20.9076 15.4239 20.9855C14.3254 21.0633 13.2267 20.8372 12.2481 20.3321C11.2695 19.827 10.4488 19.0623 9.87584 18.1218C9.30293 17.1813 8.99992 16.1013 9 15L9.004 14.775C9.06221 13.2237 9.71942 11.7554 10.8375 10.6785C11.9556 9.60157 13.4476 8.99994 15 9ZM17 14H13C12.7348 14 12.4804 14.1054 12.2929 14.2929C12.1054 14.4804 12 14.7348 12 15C12 15.2652 12.1054 15.5196 12.2929 15.7071C12.4804 15.8946 12.7348 16 13 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14ZM3 14C3.26522 14 3.51957 14.1054 3.70711 14.2929C3.89464 14.4804 4 14.7348 4 15V16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H6C6.26522 17 6.51957 17.1054 6.70711 17.2929C6.89464 17.4804 7 17.7348 7 18C7 18.2652 6.89464 18.5196 6.70711 18.7071C6.51957 18.8946 6.26522 19 6 19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14ZM3 9C3.26522 9 3.51957 9.10536 3.70711 9.29289C3.89464 9.48043 4 9.73478 4 10V11C4 11.2652 3.89464 11.5196 3.70711 11.7071C3.51957 11.8946 3.26522 12 3 12C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9ZM6 2C6.26522 2 6.51957 2.10536 6.70711 2.29289C6.89464 2.48043 7 2.73478 7 3C7 3.26522 6.89464 3.51957 6.70711 3.70711C6.51957 3.89464 6.26522 4 6 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V6C4 6.26522 3.89464 6.51957 3.70711 6.70711C3.51957 6.89464 3.26522 7 3 7C2.73478 7 2.48043 6.89464 2.29289 6.70711C2.10536 6.51957 2 6.26522 2 6V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H6ZM11 2C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8946 2.48043 12 2.73478 12 3C12 3.26522 11.8946 3.51957 11.7071 3.70711C11.5196 3.89464 11.2652 4 11 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H11ZM16 2C16.7956 2 17.5587 2.31607 18.1213 2.87868C18.6839 3.44129 19 4.20435 19 5V6C19 6.26522 18.8946 6.51957 18.7071 6.70711C18.5196 6.89464 18.2652 7 18 7C17.7348 7 17.4804 6.89464 17.2929 6.70711C17.1054 6.51957 17 6.26522 17 6V5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H15C14.7348 4 14.4804 3.89464 14.2929 3.70711C14.1054 3.51957 14 3.26522 14 3C14 2.73478 14.1054 2.48043 14.2929 2.29289C14.4804 2.10536 14.7348 2 15 2H16Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_56999">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
