import React from "react";

export const SunIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57133)">
<path d="M12 19C12.2449 19 12.4813 19.09 12.6644 19.2527C12.8474 19.4155 12.9643 19.6397 12.993 19.883L13 20V21C12.9997 21.2549 12.9021 21.5 12.7272 21.6854C12.5522 21.8707 12.313 21.9822 12.0586 21.9972C11.8042 22.0121 11.5536 21.9293 11.3582 21.7657C11.1627 21.6021 11.0371 21.3701 11.007 21.117L11 21V20C11 19.7348 11.1054 19.4804 11.2929 19.2929C11.4804 19.1054 11.7348 19 12 19Z" fill="black"/>
<path d="M18.3127 16.9099L18.4067 16.9929L19.1067 17.6929C19.2861 17.8729 19.3902 18.1144 19.398 18.3683C19.4057 18.6223 19.3165 18.8697 19.1485 19.0602C18.9804 19.2508 18.7462 19.3702 18.4933 19.3943C18.2403 19.4184 17.9877 19.3454 17.7867 19.1899L17.6927 19.1069L16.9927 18.4069C16.8202 18.2347 16.7165 18.0053 16.7012 17.7619C16.6859 17.5186 16.76 17.278 16.9097 17.0855C17.0593 16.893 17.2741 16.7618 17.5137 16.7166C17.7533 16.6713 18.0012 16.7152 18.2107 16.8399L18.3127 16.9099Z" fill="black"/>
<path d="M7.00747 16.992C7.17965 17.1642 7.28308 17.3933 7.29836 17.6363C7.31364 17.8793 7.23972 18.1196 7.09047 18.312L7.00747 18.406L6.30747 19.106C6.12751 19.2854 5.88604 19.3895 5.63209 19.3972C5.37814 19.405 5.13076 19.3158 4.94019 19.1478C4.74963 18.9797 4.63017 18.7455 4.60607 18.4925C4.58198 18.2396 4.65506 17.987 4.81047 17.786L4.89347 17.692L5.59347 16.992C5.781 16.8045 6.03531 16.6992 6.30047 16.6992C6.56563 16.6992 6.81994 16.8045 7.00747 16.992Z" fill="black"/>
<path d="M3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889Z" fill="black"/>
<path d="M20.9989 11C21.2538 11.0003 21.4989 11.0979 21.6843 11.2728C21.8696 11.4478 21.9811 11.687 21.9961 11.9414C22.011 12.1958 21.9282 12.4464 21.7646 12.6418C21.601 12.8373 21.369 12.9629 21.1159 12.993L20.9989 13H19.9989C19.744 12.9997 19.4989 12.9021 19.3135 12.7272C19.1282 12.5522 19.0167 12.313 19.0017 12.0586C18.9868 11.8042 19.0696 11.5536 19.2332 11.3582C19.3967 11.1627 19.6288 11.0371 19.8819 11.007L19.9989 11H20.9989Z" fill="black"/>
<path d="M6.21361 4.81083L6.30762 4.89383L7.00761 5.59383C7.18696 5.77379 7.29109 6.01526 7.29884 6.26921C7.3066 6.52316 7.2174 6.77054 7.04937 6.96111C6.88133 7.15167 6.64706 7.27113 6.39414 7.29523C6.14122 7.31932 5.88861 7.24624 5.68761 7.09083L5.59361 7.00783L4.89362 6.30783C4.7217 6.13551 4.61855 5.9064 4.60348 5.66346C4.58842 5.42052 4.66248 5.18042 4.81178 4.98818C4.96108 4.79594 5.17537 4.66476 5.41448 4.61922C5.65359 4.57368 5.9011 4.61692 6.11062 4.74083L6.21361 4.81083Z" fill="black"/>
<path d="M19.1051 4.89435C19.2773 5.06654 19.3807 5.29564 19.396 5.53867C19.4113 5.78169 19.3374 6.02194 19.1881 6.21435L19.1051 6.30835L18.4051 7.00835C18.2252 7.1877 17.9837 7.29182 17.7297 7.29958C17.4758 7.30733 17.2284 7.21813 17.0378 7.0501C16.8473 6.88207 16.7278 6.6478 16.7037 6.39487C16.6796 6.14195 16.7527 5.88934 16.9081 5.68835L16.9911 5.59435L17.6911 4.89435C17.8787 4.70688 18.133 4.60156 18.3981 4.60156C18.6633 4.60156 18.9176 4.70688 19.1051 4.89435Z" fill="black"/>
<path d="M12 2C12.2449 2.00003 12.4813 2.08996 12.6644 2.25272C12.8474 2.41547 12.9643 2.63975 12.993 2.883L13 3V4C12.9997 4.25488 12.9021 4.50003 12.7272 4.68537C12.5522 4.8707 12.313 4.98223 12.0586 4.99717C11.8042 5.01211 11.5536 4.92933 11.3582 4.76574C11.1627 4.60214 11.0371 4.3701 11.007 4.117L11 4V3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2Z" fill="black"/>
<path d="M12 7C12.9797 6.99994 13.9378 7.28769 14.7553 7.8275C15.5729 8.36731 16.2138 9.1354 16.5986 10.0364C16.9833 10.9373 17.0949 11.9315 16.9195 12.8953C16.7441 13.8592 16.2893 14.7502 15.6118 15.4579C14.9343 16.1655 14.0638 16.6585 13.1085 16.8756C12.1532 17.0928 11.1552 17.0245 10.2383 16.6793C9.3215 16.334 8.52629 15.7271 7.95146 14.9338C7.37663 14.1405 7.04752 13.1958 7.005 12.217L7 12L7.005 11.783C7.06092 10.4958 7.61161 9.27978 8.54222 8.38866C9.47284 7.49754 10.7115 7.00007 12 7Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57133">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
