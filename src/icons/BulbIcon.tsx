import React from "react";

export const BulbIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58686)">
<path d="M3.99889 11C4.25377 11.0003 4.49892 11.0979 4.68426 11.2728C4.8696 11.4478 4.98113 11.687 4.99606 11.9414C5.011 12.1958 4.92822 12.4464 4.76463 12.6418C4.60104 12.8373 4.36899 12.9629 4.11589 12.993L3.99889 13H2.99889C2.74401 12.9997 2.49886 12.9021 2.31352 12.7272C2.12819 12.5522 2.01666 12.313 2.00172 12.0586C1.98678 11.8042 2.06957 11.5536 2.23316 11.3582C2.39675 11.1627 2.6288 11.0371 2.88189 11.007L2.99889 11H3.99889Z" fill="black"/>
<path d="M12 2C12.2449 2.00003 12.4813 2.08996 12.6644 2.25272C12.8474 2.41547 12.9643 2.63975 12.993 2.883L13 3V4C12.9997 4.25488 12.9021 4.50003 12.7272 4.68537C12.5522 4.8707 12.313 4.98223 12.0586 4.99717C11.8042 5.01211 11.5536 4.92933 11.3582 4.76574C11.1627 4.60214 11.0371 4.3701 11.007 4.117L11 4V3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2Z" fill="black"/>
<path d="M20.9989 11C21.2538 11.0003 21.4989 11.0979 21.6843 11.2728C21.8696 11.4478 21.9811 11.687 21.9961 11.9414C22.011 12.1958 21.9282 12.4464 21.7646 12.6418C21.601 12.8373 21.369 12.9629 21.1159 12.993L20.9989 13H19.9989C19.744 12.9997 19.4989 12.9021 19.3135 12.7272C19.1282 12.5522 19.0167 12.313 19.0017 12.0586C18.9868 11.8042 19.0696 11.5536 19.2332 11.3582C19.3967 11.1627 19.6288 11.0371 19.8819 11.007L19.9989 11H20.9989Z" fill="black"/>
<path d="M4.89435 4.89442C5.06654 4.72225 5.29564 4.61882 5.53867 4.60353C5.78169 4.58825 6.02194 4.66217 6.21435 4.81142L6.30835 4.89442L7.00835 5.59442C7.1877 5.77438 7.29182 6.01586 7.29958 6.26981C7.30733 6.52376 7.21813 6.77114 7.0501 6.9617C6.88207 7.15227 6.6478 7.27173 6.39487 7.29582C6.14195 7.31992 5.88934 7.24684 5.68835 7.09142L5.59435 7.00842L4.89435 6.30842C4.70688 6.1209 4.60156 5.86659 4.60156 5.60142C4.60156 5.33626 4.70688 5.08195 4.89435 4.89442Z" fill="black"/>
<path d="M17.6911 4.89326C17.8711 4.71391 18.1126 4.60978 18.3665 4.60203C18.6205 4.59427 18.8678 4.68347 19.0584 4.85151C19.249 5.01954 19.3684 5.25381 19.3925 5.50673C19.4166 5.75965 19.3435 6.01227 19.1881 6.21326L19.1051 6.30726L18.4051 7.00726C18.2252 7.1866 17.9837 7.29073 17.7297 7.29849C17.4758 7.30624 17.2284 7.21704 17.0378 7.04901C16.8473 6.88097 16.7278 6.64671 16.7037 6.39378C16.6796 6.14086 16.7527 5.88825 16.9081 5.68726L16.9911 5.59326L17.6911 4.89326Z" fill="black"/>
<path d="M14 18C14.2652 18 14.5196 18.1054 14.7071 18.2929C14.8946 18.4804 15 18.7348 15 19C15 19.7956 14.6839 20.5587 14.1213 21.1213C13.5587 21.6839 12.7956 22 12 22C11.2044 22 10.4413 21.6839 9.87868 21.1213C9.31607 20.5587 9 19.7956 9 19C9.00003 18.7551 9.08996 18.5187 9.25272 18.3356C9.41547 18.1526 9.63975 18.0357 9.883 18.007L10 18H14Z" fill="black"/>
<path d="M12 6C13.2593 6 14.4867 6.39622 15.5083 7.13255C16.5299 7.86887 17.2939 8.90796 17.6921 10.1026C18.0903 11.2973 18.1026 12.587 17.7271 13.789C17.3516 14.991 16.6074 16.0444 15.6 16.8C15.4622 16.9035 15.2999 16.9697 15.129 16.992L15 17H9C8.78363 17 8.5731 16.9298 8.4 16.8C7.39256 16.0444 6.6484 14.991 6.27292 13.789C5.89744 12.587 5.90968 11.2973 6.3079 10.1026C6.70612 8.90796 7.47015 7.86887 8.49174 7.13255C9.51333 6.39622 10.7407 6 12 6Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58686">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
