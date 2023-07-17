import { useState, useEffect } from 'react';

import {
  FaFileAlt,
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaFileExcel,
  FaFileCode,
} from 'react-icons/fa';

import { BsFillTrash3Fill } from 'react-icons/bs';

import { Box, ThumbImg, Delete } from './Thumb.styled';
import Icon from './Icon';
import theme from 'theme';

export const Thumb = ({ file, setFiles }) => {
  const [thumb, setThumb] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);

  const imagesFormats = [
    'image/png',
    'image/gif',
    'image/jpeg',
    'image/svg+xml',
    'image/tiff',
  ];

  useEffect(() => {
    if (!file) return;

    setLoading(true);

    let reader = new FileReader();

    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() =>
        setFiles(prev => prev.filter(deleted => deleted.name !== file.name))
      }
    >
      <Delete hovered={hovered}>
        <BsFillTrash3Fill size={30} color={theme.colors.danger} />
      </Delete>

      {imagesFormats.includes(file?.type) && (
        <ThumbImg src={thumb} alt={file?.name} />
      )}

      {file?.type === 'text/plain' && (
        <Icon icon={FaFileAlt} name={file?.name} />
      )}

      {file?.type === 'application/pdf' && (
        <Icon icon={FaFilePdf} name={file?.name} />
      )}

      {file?.type === 'application/json' && (
        <Icon icon={FaFileCode} name={file?.name} />
      )}

      {file?.type === 'application/msword' && (
        <Icon icon={FaFileWord} name={file?.name} />
      )}

      {file?.type ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && (
        <Icon icon={FaFileWord} name={file?.name} />
      )}

      {file?.type === 'application/vnd.ms-powerpoint' && (
        <Icon icon={FaFilePowerpoint} name={file?.name} />
      )}

      {file?.type ===
        'application/vnd.openxmlformats-officedocument.presentationml.presentation' && (
        <Icon icon={FaFilePowerpoint} name={file?.name} />
      )}

      {file?.type === 'application/vnd.ms-excel' && (
        <Icon icon={FaFileExcel} name={file?.name} />
      )}

      {file?.type ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && (
        <Icon icon={FaFileExcel} name={file?.name} />
      )}
    </Box>
  );
};

export default Thumb;
