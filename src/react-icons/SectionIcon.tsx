import React from "react";

export const SectionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57566)">
<path d="M20.01 19C20.2649 19.0003 20.51 19.0979 20.6954 19.2728C20.8807 19.4478 20.9922 19.687 21.0072 19.9414C21.0221 20.1958 20.9393 20.4464 20.7757 20.6418C20.6121 20.8373 20.3801 20.9629 20.127 20.993L20 21C19.7451 20.9997 19.5 20.9021 19.3146 20.7272C19.1293 20.5522 19.0178 20.313 19.0028 20.0586C18.9879 19.8042 19.0707 19.5536 19.2343 19.3582C19.3979 19.1627 19.6299 19.0371 19.883 19.007L20.01 19ZM4.01 19C4.27522 19 4.52957 19.1054 4.71711 19.2929C4.90464 19.4804 5.01 19.7348 5.01 20C5.01 20.2652 4.90464 20.5196 4.71711 20.7071C4.52957 20.8946 4.27522 21 4.01 21C3.75421 21.0024 3.50723 20.9066 3.31988 20.7324C3.13253 20.5583 3.01905 20.3189 3.00278 20.0636C2.98651 19.8083 3.06869 19.5565 3.23242 19.36C3.39615 19.1634 3.62897 19.0371 3.883 19.007L4.01 19ZM8.01 19C8.27522 19 8.52957 19.1054 8.71711 19.2929C8.90464 19.4804 9.01 19.7348 9.01 20C9.01 20.2652 8.90464 20.5196 8.71711 20.7071C8.52957 20.8946 8.27522 21 8.01 21C7.75421 21.0024 7.50723 20.9066 7.31988 20.7324C7.13253 20.5583 7.01905 20.3189 7.00278 20.0636C6.98651 19.8083 7.06869 19.5565 7.23242 19.36C7.39615 19.1634 7.62897 19.0371 7.883 19.007L8.01 19ZM12.01 19C12.2649 19.0003 12.51 19.0979 12.6954 19.2728C12.8807 19.4478 12.9922 19.687 13.0072 19.9414C13.0221 20.1958 12.9393 20.4464 12.7757 20.6418C12.6121 20.8373 12.3801 20.9629 12.127 20.993L12 21C11.7451 20.9997 11.5 20.9021 11.3146 20.7272C11.1293 20.5522 11.0178 20.313 11.0028 20.0586C10.9879 19.8042 11.0707 19.5536 11.2343 19.3582C11.3979 19.1627 11.6299 19.0371 11.883 19.007L12.01 19ZM16.01 19C16.2649 19.0003 16.51 19.0979 16.6954 19.2728C16.8807 19.4478 16.9922 19.687 17.0072 19.9414C17.0221 20.1958 16.9393 20.4464 16.7757 20.6418C16.6121 20.8373 16.3801 20.9629 16.127 20.993L16 21C15.7451 20.9997 15.5 20.9021 15.3146 20.7272C15.1293 20.5522 15.0178 20.313 15.0028 20.0586C14.9879 19.8042 15.0707 19.5536 15.2343 19.3582C15.3979 19.1627 15.6299 19.0371 15.883 19.007L16.01 19ZM20.01 3C20.2649 3.00028 20.51 3.09788 20.6954 3.27285C20.8807 3.44782 20.9922 3.68695 21.0072 3.94139C21.0221 4.19584 20.9393 4.44638 20.7757 4.64183C20.6121 4.83729 20.3801 4.9629 20.127 4.993L20 5C19.7451 4.99972 19.5 4.90212 19.3146 4.72715C19.1293 4.55218 19.0178 4.31305 19.0028 4.05861C18.9879 3.80416 19.0707 3.55362 19.2343 3.35817C19.3979 3.16271 19.6299 3.0371 19.883 3.007L20.01 3ZM4.01 3C4.27522 3 4.52957 3.10536 4.71711 3.29289C4.90464 3.48043 5.01 3.73478 5.01 4C5.01 4.26522 4.90464 4.51957 4.71711 4.70711C4.52957 4.89464 4.27522 5 4.01 5C3.75421 5.00237 3.50723 4.90661 3.31988 4.73244C3.13253 4.55827 3.01905 4.31892 3.00278 4.06364C2.98651 3.80835 3.06869 3.55653 3.23242 3.35999C3.39615 3.16345 3.62897 3.03712 3.883 3.007L4.01 3ZM8.01 3C8.27522 3 8.52957 3.10536 8.71711 3.29289C8.90464 3.48043 9.01 3.73478 9.01 4C9.01 4.26522 8.90464 4.51957 8.71711 4.70711C8.52957 4.89464 8.27522 5 8.01 5C7.75421 5.00237 7.50723 4.90661 7.31988 4.73244C7.13253 4.55827 7.01905 4.31892 7.00278 4.06364C6.98651 3.80835 7.06869 3.55653 7.23242 3.35999C7.39615 3.16345 7.62897 3.03712 7.883 3.007L8.01 3ZM12.01 3C12.2649 3.00028 12.51 3.09788 12.6954 3.27285C12.8807 3.44782 12.9922 3.68695 13.0072 3.94139C13.0221 4.19584 12.9393 4.44638 12.7757 4.64183C12.6121 4.83729 12.3801 4.9629 12.127 4.993L12 5C11.7451 4.99972 11.5 4.90212 11.3146 4.72715C11.1293 4.55218 11.0178 4.31305 11.0028 4.05861C10.9879 3.80416 11.0707 3.55362 11.2343 3.35817C11.3979 3.16271 11.6299 3.0371 11.883 3.007L12.01 3ZM16 3C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4C17.0007 4.13132 16.9754 4.26149 16.9258 4.38306C16.8761 4.50464 16.803 4.61525 16.7106 4.70857C16.6182 4.80189 16.5084 4.8761 16.3873 4.92697C16.2662 4.97783 16.1363 5.00434 16.005 5.005C15.8737 5.00566 15.7435 4.98044 15.6219 4.93079C15.5004 4.88114 15.3898 4.80804 15.2964 4.71564C15.2031 4.62325 15.1289 4.51338 15.078 4.3923C15.0272 4.27123 15.0007 4.14132 15 4.01C15 3.448 15.448 3 16 3ZM19 7C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H5C4.46957 17 3.96086 16.7893 3.58579 16.4142C3.21071 16.0391 3 15.5304 3 15V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H19Z" />
</g>
<defs>
<clipPath id="clip0_802_57566">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
