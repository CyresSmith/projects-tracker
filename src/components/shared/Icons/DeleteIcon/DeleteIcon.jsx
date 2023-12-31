import React from 'react';

const DeleteIcon = ({ size = 24, color = '#838A99' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M5 8C5 7.17157 5.67157 6.5 6.5 6.5H17.5C18.3284 6.5 19 7.17157 19 8C19 8.82843 18.3284 9.5 17.5 9.5H6.5C5.67157 9.5 5 8.82843 5 8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.77061 19.7492L6.03857 10.9648C6.18894 10.988 6.34298 11.0001 6.49984 11.0001H17.4998C17.6567 11.0001 17.8108 10.988 17.9611 10.9648L17.2291 19.7492C17.0995 21.3041 15.7997 22.5001 14.2394 22.5001H9.76024C8.19998 22.5001 6.90018 21.3041 6.77061 19.7492ZM13.25 16.5C13.25 15.8096 12.6904 15.25 12 15.25C11.3096 15.25 10.75 15.8096 10.75 16.5C10.75 17.1904 11.3096 17.75 12 17.75C12.6904 17.75 13.25 17.1904 13.25 16.5ZM12 13.75C13.5188 13.75 14.75 14.9812 14.75 16.5C14.75 18.0188 13.5188 19.25 12 19.25C10.4812 19.25 9.25 18.0188 9.25 16.5C9.25 14.9812 10.4812 13.75 12 13.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2.5C7.89543 2.5 7 3.39543 7 4.5V5H17V4.5C17 3.39543 16.1046 2.5 15 2.5H9Z"
        fill={color}
      />
    </svg>
  );
};

export default DeleteIcon;
