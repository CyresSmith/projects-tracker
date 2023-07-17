import * as React from 'react';
import { memo } from 'react';

const FileIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={83} height={89} fill="none">
    <rect width={83} height={89} fill="#DCE6FF" rx={16} />
    <g clipPath="url(#a)">
      <path fill="#EFF4FF" d="M0 66h83v23H0z" />
    </g>
    <g fill="#215DF6" opacity={0.14}>
      <rect width={43} height={8} x={20} y={17} rx={4} />
      <rect width={43} height={8} x={20} y={31} rx={4} />
      <rect width={43} height={8} x={20} y={45} rx={4} />
    </g>
  </svg>
);
const Memo = memo(FileIcon);
export default Memo;
