import React from "react";

export const BrightnessUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58709)">
<path d="M12 8C12.7826 8 13.548 8.22958 14.2014 8.66029C14.8549 9.09101 15.3676 9.70394 15.6761 10.4232C15.9846 11.1424 16.0753 11.9363 15.9371 12.7066C15.7988 13.4769 15.4376 14.1898 14.8983 14.7568C14.3589 15.3239 13.665 15.7202 12.9026 15.8968C12.1402 16.0734 11.3427 16.0225 10.6089 15.7503C9.87519 15.4782 9.23739 14.9967 8.77454 14.3657C8.31169 13.7346 8.04413 12.9816 8.005 12.2L8 12L8.005 11.8C8.05631 10.775 8.4996 9.80901 9.24319 9.10172C9.98677 8.39444 10.9738 8 12 8Z" />
<path d="M12 2C12.2449 2.00003 12.4813 2.08996 12.6644 2.25272C12.8474 2.41547 12.9643 2.63975 12.993 2.883L13 3V5C12.9997 5.25488 12.9021 5.50003 12.7272 5.68537C12.5522 5.8707 12.313 5.98223 12.0586 5.99717C11.8042 6.01211 11.5536 5.92933 11.3582 5.76574C11.1627 5.60214 11.0371 5.3701 11.007 5.117L11 5V3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2Z" />
<path d="M17.6919 4.89326C17.8719 4.71391 18.1133 4.60978 18.3673 4.60203C18.6212 4.59427 18.8686 4.68347 19.0592 4.85151C19.2498 5.01954 19.3692 5.25381 19.3933 5.50673C19.4174 5.75965 19.3443 6.01227 19.1889 6.21326L19.1059 6.30726L17.7059 7.70726C17.526 7.8866 17.2845 7.99073 17.0305 7.99849C16.7766 8.00624 16.5292 7.91704 16.3386 7.74901C16.1481 7.58097 16.0286 7.34671 16.0045 7.09378C15.9804 6.84086 16.0535 6.58825 16.2089 6.38726L16.2919 6.29326L17.6919 4.89326Z" />
<path d="M20.9989 11C21.2538 11.0003 21.4989 11.0979 21.6843 11.2728C21.8696 11.4478 21.9811 11.687 21.9961 11.9414C22.011 12.1958 21.9282 12.4464 21.7646 12.6418C21.601 12.8373 21.369 12.9629 21.1159 12.993L20.9989 13H18.9989C18.744 12.9997 18.4989 12.9021 18.3135 12.7272C18.1282 12.5522 18.0167 12.313 18.0017 12.0586C17.9868 11.8042 18.0696 11.5536 18.2332 11.3582C18.3967 11.1627 18.6288 11.0371 18.8819 11.007L18.9989 11H20.9989Z" />
<path d="M16.2928 16.2929C16.465 16.1207 16.6941 16.0173 16.9371 16.002C17.1801 15.9867 17.4204 16.0606 17.6128 16.2099L17.7068 16.2929L19.1068 17.6929C19.2861 17.8728 19.3903 18.1143 19.398 18.3682C19.4058 18.6222 19.3166 18.8696 19.1485 19.0601C18.9805 19.2507 18.7462 19.3702 18.4933 19.3943C18.2404 19.4184 17.9878 19.3453 17.7868 19.1899L17.6928 19.1069L16.2928 17.7069C16.1053 17.5193 16 17.265 16 16.9999C16 16.7347 16.1053 16.4804 16.2928 16.2929Z" />
<path d="M12 18C12.2449 18 12.4813 18.09 12.6644 18.2527C12.8474 18.4155 12.9643 18.6397 12.993 18.883L13 19V21C12.9997 21.2549 12.9021 21.5 12.7272 21.6854C12.5522 21.8707 12.313 21.9822 12.0586 21.9972C11.8042 22.0121 11.5536 21.9293 11.3582 21.7657C11.1627 21.6021 11.0371 21.3701 11.007 21.117L11 21V19C11 18.7348 11.1054 18.4804 11.2929 18.2929C11.4804 18.1054 11.7348 18 12 18Z" />
<path d="M6.29347 16.2917C6.47343 16.1123 6.7149 16.0082 6.96885 16.0005C7.2228 15.9927 7.47018 16.0819 7.66075 16.2499C7.85131 16.418 7.97078 16.6522 7.99487 16.9052C8.01896 17.1581 7.94588 17.4107 7.79047 17.6117L7.70747 17.7057L6.30747 19.1057C6.12751 19.285 5.88604 19.3892 5.63209 19.3969C5.37814 19.4047 5.13076 19.3155 4.94019 19.1474C4.74963 18.9794 4.63017 18.7451 4.60607 18.4922C4.58198 18.2393 4.65506 17.9867 4.81047 17.7857L4.89347 17.6917L6.29347 16.2917Z" />
<path d="M5.99889 11C6.25377 11.0003 6.49892 11.0979 6.68426 11.2728C6.8696 11.4478 6.98113 11.687 6.99606 11.9414C7.011 12.1958 6.92822 12.4464 6.76463 12.6418C6.60104 12.8373 6.36899 12.9629 6.11589 12.993L5.99889 13H3.99889C3.74401 12.9997 3.49886 12.9021 3.31352 12.7272C3.12819 12.5522 3.01666 12.313 3.00172 12.0586C2.98678 11.8042 3.06957 11.5536 3.23316 11.3582C3.39675 11.1627 3.6288 11.0371 3.88189 11.007L3.99889 11H5.99889Z" />
<path d="M4.89435 4.89442C5.06654 4.72225 5.29564 4.61882 5.53867 4.60353C5.78169 4.58825 6.02194 4.66217 6.21435 4.81142L6.30835 4.89442L7.70835 6.29442C7.8877 6.47438 7.99182 6.71586 7.99958 6.96981C8.00733 7.22376 7.91813 7.47114 7.7501 7.6617C7.58207 7.85227 7.3478 7.97173 7.09487 7.99582C6.84195 8.01992 6.58934 7.94684 6.38835 7.79142L6.29435 7.70842L4.89435 6.30842C4.70688 6.1209 4.60156 5.86659 4.60156 5.60142C4.60156 5.33626 4.70688 5.08195 4.89435 4.89442Z" />
</g>
<defs>
<clipPath id="clip0_802_58709">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
