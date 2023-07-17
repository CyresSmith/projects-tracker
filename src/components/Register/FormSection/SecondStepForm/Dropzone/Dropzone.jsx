import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  DropzoneBox,
  DropzoneText,
  Text,
  RequirementsBox,
  Requirements,
  Box,
  ThumbBox,
} from './Dropzone.styled';
import { Label, SubLabel } from 'components/shared/Input/Input.styled';
import Thumb from './Thumb';

const Dropzone = ({ values, setFieldValue }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (files.length < 1) return;

    setFieldValue('files', files);
  }, [files, setFieldValue]);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: 10,
    maxSize: 10000000,
    multiple: true,
    accept: {
      'text/plain': ['.txt'],
      'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.svg', '.tiff'],
      'application/json': ['.json'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        ['.docx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        ['.pptx'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.xlsx',
      ],
    },
    onDrop: acceptedFiles => {
      if (acceptedFiles.length === 0) {
        return;
      }

      const filteredFiles = acceptedFiles.filter(acceptedFile => {
        if (files.some(file => file.name === acceptedFile.name)) return;

        return acceptedFile;
      });

      setFiles(prev => [...prev, ...filteredFiles]);
    },
  });

  return (
    <>
      <Box>
        <Label htmlFor="files">Please upload project files</Label>
        <SubLabel>Brand guides, copy, logo files, etc.</SubLabel>
        <DropzoneBox {...getRootProps({ isDragAccept, isDragReject })}>
          <input id="files" {...getInputProps()} />
          <DropzoneText>
            <Text>
              Drag&#39;n&#39;drop some files here, or click to select files
            </Text>
            <RequirementsBox>
              <Requirements>Max 10 files</Requirements>
              <Requirements>Max size 10mb</Requirements>
              <Requirements>
                .txt, .json, .pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .png,
                .gif, .jpeg, .jpg, .svg, .tiff
              </Requirements>
            </RequirementsBox>
          </DropzoneText>
        </DropzoneBox>
      </Box>
      {files.length > 0 && (
        <ThumbBox>
          {files.map((file, i) => (
            <Thumb key={i} file={file} setFiles={setFiles} />
          ))}
        </ThumbBox>
      )}
    </>
  );
};

export default Dropzone;
