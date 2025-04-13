import React from "react";

export const BiohazardIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58919)">
<path d="M16.4111 2.0707C17.2309 2.89019 17.8067 3.92153 18.0741 5.04944C18.3414 6.17736 18.2898 7.35741 17.9251 8.4577L17.8741 8.5947L18.0971 8.6387C18.3138 8.6867 18.5288 8.7467 18.7421 8.8187L19.0601 8.9357L19.3101 9.0407C21.4651 10.0107 22.8821 12.1077 22.9911 14.5237V14.7407C22.9907 15.1385 22.8323 15.5199 22.5507 15.8009C22.2691 16.0819 21.8874 16.2396 21.4896 16.2392C21.0918 16.2388 20.7104 16.0804 20.4294 15.7988C20.1483 15.5172 19.9907 15.1355 19.9911 14.7377L19.9931 14.5927C19.9697 14.0784 19.8244 13.577 19.5693 13.1299C19.3141 12.6827 18.9564 12.3026 18.5256 12.0208C18.0947 11.739 17.6031 11.5635 17.0912 11.5089C16.5792 11.4543 16.0617 11.5221 15.5811 11.7067L15.4901 11.7437L15.4941 11.7817L15.5011 11.9987C15.5013 12.6263 15.3328 13.2425 15.0131 13.7826C14.6934 14.3227 14.2344 14.7669 13.6841 15.0687L13.5241 15.1507L13.5381 15.2607C13.6201 15.7717 13.8231 16.2577 14.1331 16.6767L14.2731 16.8517C14.5559 17.1837 14.9026 17.4553 15.2926 17.6505C15.6826 17.8456 16.1079 17.9603 16.5431 17.9877L16.7461 17.9937C17.1439 17.9937 17.5254 18.1517 17.8068 18.433C18.0881 18.7143 18.2461 19.0959 18.2461 19.4937C18.2461 19.8915 18.0881 20.2731 17.8068 20.5544C17.5254 20.8357 17.1439 20.9937 16.7461 20.9937C15.8877 20.9938 15.0384 20.8171 14.2513 20.4745C13.4642 20.132 12.7561 19.631 12.1711 19.0027L11.9941 18.8037L11.9161 18.8957C10.9006 20.0321 9.50751 20.7618 7.99509 20.9497L7.72209 20.9777L7.46309 20.9937H7.24609C6.84827 20.9933 6.4669 20.8349 6.18587 20.5533C6.04672 20.4139 5.9364 20.2484 5.8612 20.0663C5.786 19.8843 5.7474 19.6892 5.74759 19.4922C5.74779 19.2952 5.78678 19.1002 5.86235 18.9183C5.93791 18.7364 6.04857 18.5711 6.18799 18.432C6.46958 18.151 6.85127 17.9933 7.24909 17.9937L7.39409 17.9957C8.15592 17.961 8.88128 17.6595 9.44324 17.144C10.0052 16.6284 10.368 15.9317 10.4681 15.1757L10.4711 15.1457L10.3101 15.0627C9.78911 14.7751 9.35004 14.3595 9.03439 13.855C8.71873 13.3506 8.53691 12.774 8.50609 12.1797L8.50109 11.9847L8.50709 11.7937L8.51009 11.7507L8.43509 11.7187C7.66396 11.4156 6.80618 11.4185 6.03709 11.7267L5.84609 11.8107C5.29228 12.0751 4.82462 12.4908 4.49723 13.0098C4.16984 13.5289 3.99609 14.13 3.99609 14.7437C3.99609 15.1415 3.83806 15.5231 3.55675 15.8044C3.27545 16.0857 2.89392 16.2437 2.49609 16.2437C2.09827 16.2437 1.71674 16.0857 1.43543 15.8044C1.15413 15.5231 0.996094 15.1415 0.996094 14.7437C0.996317 13.297 1.49843 11.8951 2.4168 10.7772C3.33517 9.65936 4.61291 8.89471 6.03209 8.6137L6.10909 8.5997L6.05909 8.4567L5.97909 8.1967L5.91309 7.9467C5.67668 6.95214 5.68703 5.91486 5.94324 4.92522C6.19945 3.93557 6.69376 3.02359 7.38309 2.2687L7.54609 2.0967C7.6812 1.95086 7.84394 1.83334 8.02486 1.75096C8.20579 1.66857 8.40128 1.62298 8.59998 1.61682C8.79868 1.61066 8.99663 1.64405 9.18231 1.71507C9.36799 1.78608 9.5377 1.8933 9.68158 2.03048C9.82546 2.16767 9.94063 2.33208 10.0204 2.51417C10.1002 2.69626 10.143 2.89239 10.1463 3.09116C10.1496 3.28993 10.1133 3.48737 10.0397 3.67201C9.96598 3.85665 9.85633 4.02481 9.71709 4.1667L9.58009 4.3097C9.2822 4.63899 9.05495 5.02583 8.91236 5.44636C8.76977 5.86688 8.71487 6.31216 8.75104 6.75473C8.78721 7.19729 8.91369 7.62775 9.12266 8.01954C9.33164 8.41133 9.61869 8.75614 9.96609 9.0327L10.0501 9.0947L10.1001 9.0607C10.6013 8.736 11.1772 8.54494 11.7731 8.5057L12.0011 8.4987C12.6841 8.4987 13.3371 8.6957 13.8951 9.0547L13.9431 9.0877L14.0101 9.0397C14.5471 8.61435 14.9359 8.03022 15.1211 7.3707L15.1711 7.1707C15.2772 6.67427 15.2655 6.1599 15.137 5.6688C15.0085 5.17771 14.7667 4.72354 14.4311 4.3427L14.2901 4.1927C14.1468 4.05439 14.0324 3.88893 13.9537 3.70596C13.875 3.52299 13.8335 3.32619 13.8317 3.12702C13.8299 2.92785 13.8678 2.73031 13.9431 2.54593C14.0184 2.36156 14.1297 2.19403 14.2705 2.05312C14.4113 1.91222 14.5787 1.80076 14.763 1.72525C14.9473 1.64974 15.1448 1.6117 15.344 1.61333C15.5432 1.61497 15.74 1.65625 15.923 1.73478C16.1061 1.81331 16.2727 1.9275 16.4111 2.0707Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58919">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
