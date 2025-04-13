import React from "react";

export const PhotoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57666)">
<path d="M8.813 11.612C9.27 11.232 9.731 11.232 10.199 11.623L10.307 11.721L15.293 16.707L15.387 16.79C15.5794 16.9391 15.8196 17.013 16.0626 16.9976C16.3056 16.9823 16.5346 16.8789 16.7067 16.7067C16.8789 16.5346 16.9823 16.3056 16.9976 16.0626C17.013 15.8196 16.9391 15.5794 16.79 15.387L16.707 15.293L15.415 14L15.707 13.707L15.813 13.612C16.27 13.232 16.731 13.232 17.199 13.623L17.307 13.721L21.981 18.396C21.8863 19.3483 21.4534 20.235 20.7608 20.8954C20.0681 21.5557 19.1617 21.9459 18.206 21.995L18 22H6C5.00791 21.9999 4.05124 21.6312 3.31576 20.9654C2.58028 20.2996 2.11847 19.3842 2.02 18.397L8.707 11.707L8.813 11.612ZM18 2C19.0262 2 20.0132 2.39444 20.7568 3.10172C21.5004 3.80901 21.9437 4.77504 21.995 5.8L22 6V15.585L18.707 12.293L18.557 12.156C17.301 11.061 15.707 11.059 14.461 12.139L14.307 12.279L14 12.585L11.707 10.293L11.557 10.156C10.301 9.061 8.707 9.059 7.461 10.139L7.307 10.279L2 15.585V6C2 4.97376 2.39444 3.98677 3.10172 3.24319C3.80901 2.4996 4.77504 2.05631 5.8 2.005L6 2H18ZM15.01 7L14.883 7.007C14.64 7.03591 14.4159 7.15296 14.2534 7.33596C14.0909 7.51897 14.0011 7.75524 14.0011 8C14.0011 8.24476 14.0909 8.48103 14.2534 8.66403C14.4159 8.84704 14.64 8.96409 14.883 8.993L15 9L15.127 8.993C15.37 8.96409 15.5941 8.84704 15.7566 8.66403C15.9191 8.48103 16.0089 8.24476 16.0089 8C16.0089 7.75524 15.9191 7.51897 15.7566 7.33596C15.5941 7.15296 15.37 7.03591 15.127 7.007L15.01 7Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57666">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
