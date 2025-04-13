import React from "react";

export const MicrowaveIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57733)">
<path d="M20 5C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H20ZM14 7H4V17H14V7ZM18.01 14H18C17.7451 14.0003 17.5 14.0979 17.3146 14.2728C17.1293 14.4478 17.0178 14.687 17.0028 14.9414C16.9879 15.1958 17.0707 15.4464 17.2343 15.6418C17.3979 15.8373 17.6299 15.9629 17.883 15.993L18.01 16C18.2752 16 18.5296 15.8946 18.7171 15.7071C18.9046 15.5196 19.01 15.2652 19.01 15C19.01 14.7348 18.9046 14.4804 18.7171 14.2929C18.5296 14.1054 18.2752 14 18.01 14ZM18.01 11H18C17.7451 11.0003 17.5 11.0979 17.3146 11.2728C17.1293 11.4478 17.0178 11.687 17.0028 11.9414C16.9879 12.1958 17.0707 12.4464 17.2343 12.6418C17.3979 12.8373 17.6299 12.9629 17.883 12.993L18.01 13C18.2752 13 18.5296 12.8946 18.7171 12.7071C18.9046 12.5196 19.01 12.2652 19.01 12C19.01 11.7348 18.9046 11.4804 18.7171 11.2929C18.5296 11.1054 18.2752 11 18.01 11ZM18.01 8H18C17.7451 8.00028 17.5 8.09788 17.3146 8.27285C17.1293 8.44782 17.0178 8.68695 17.0028 8.94139C16.9879 9.19584 17.0707 9.44638 17.2343 9.64183C17.3979 9.83729 17.6299 9.9629 17.883 9.993L18.01 10C18.2752 10 18.5296 9.89464 18.7171 9.70711C18.9046 9.51957 19.01 9.26522 19.01 9C19.01 8.73478 18.9046 8.48043 18.7171 8.29289C18.5296 8.10536 18.2752 8 18.01 8Z" fill="black"/>
<path d="M5.94512 9.66825C7.28112 8.77725 8.21912 8.77725 9.55512 9.66825L9.46612 9.61225L9.50612 9.62925L9.65212 9.69325L9.74712 9.73725C10.1251 9.90825 10.2801 9.96725 10.4211 9.99225C10.5541 10.0152 10.6071 9.99725 10.7571 9.83225C10.8435 9.72972 10.9496 9.64561 11.0691 9.58492C11.1887 9.52422 11.3192 9.48818 11.4529 9.47894C11.5867 9.4697 11.7209 9.48744 11.8477 9.53111C11.9744 9.57479 12.0911 9.6435 12.1907 9.73317C12.2904 9.82283 12.371 9.93163 12.4278 10.0531C12.4846 10.1745 12.5163 10.3061 12.5212 10.4401C12.5261 10.5741 12.504 10.7077 12.4562 10.8329C12.4085 10.9582 12.336 11.0726 12.2431 11.1692C11.6301 11.8502 10.8851 12.1033 10.0791 11.9633C9.71112 11.8993 9.45812 11.8022 8.92112 11.5582C8.81988 11.5115 8.71787 11.4665 8.61512 11.4233L8.44512 11.3322C7.78112 10.8892 7.71912 10.8892 7.05512 11.3322C6.94586 11.4051 6.82332 11.4558 6.69449 11.4813C6.56565 11.5068 6.43305 11.5067 6.30426 11.481C6.17546 11.4553 6.05299 11.4044 5.94385 11.3314C5.8347 11.2583 5.74101 11.1645 5.66812 11.0553C5.59524 10.946 5.54459 10.8234 5.51907 10.6946C5.49354 10.5658 5.49365 10.4332 5.51937 10.3044C5.54509 10.1756 5.59593 10.0531 5.66898 9.94397C5.74203 9.83482 5.83586 9.74113 5.94512 9.66825Z" fill="black"/>
<path d="M5.94513 12.6682C7.28113 11.7772 8.21913 11.7772 9.55513 12.6682L9.46613 12.6123L9.50613 12.6292L9.65213 12.6932L9.74713 12.7373C10.1251 12.9083 10.2801 12.9672 10.4211 12.9922C10.5541 13.0152 10.6071 12.9972 10.7571 12.8322C10.9369 12.645 11.1825 12.5351 11.4419 12.5256C11.7013 12.5161 11.9542 12.6079 12.1472 12.7815C12.3402 12.9552 12.4581 13.197 12.476 13.456C12.4939 13.715 12.4104 13.9707 12.2431 14.1692C11.6301 14.8502 10.8851 15.1033 10.0791 14.9633C9.71113 14.8993 9.45813 14.8022 8.92113 14.5582C8.81989 14.5115 8.71787 14.4665 8.61513 14.4233L8.44513 14.3322C7.78113 13.8892 7.71913 13.8892 7.05513 14.3322C6.83447 14.4794 6.56437 14.533 6.30426 14.481C6.04415 14.4291 5.81532 14.2759 5.66813 14.0553C5.52093 13.8346 5.46742 13.5645 5.51937 13.3044C5.57132 13.0443 5.72447 12.8154 5.94513 12.6682Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57733">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
