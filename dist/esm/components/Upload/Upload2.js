import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { FormLayout } from '../../lib/Layout/FormLayout/FormLayout.js';
import UploadStyles from './Upload.module.css.js';

function Upload(_ref) {
  return jsx("h1", {
    children: "WIP"
  }, void 0);
}

function Dragger(_ref2) {
  let {
    label,
    afterLabel,
    beforeLabel,
    layout,
    children,
    files,
    setFiles
  } = _ref2;
  const [classes, setClasses] = useState([UploadStyles['sbui-upload-dragger']]);
  const draggedCssClass = UploadStyles['sbui-upload-dragger--dragged'];

  const dragOver = e => {
    e.preventDefault();

    if (!classes.includes(draggedCssClass)) {
      let originalClasses = classes;
      originalClasses.push(draggedCssClass);
      setClasses(originalClasses);
    }
  };

  const dragEnter = e => {
    e.preventDefault();

    if (!classes.includes(draggedCssClass)) {
      let originalClasses = classes;
      originalClasses.push(draggedCssClass);
      setClasses(originalClasses);
    }
  };

  const dragLeave = e => {
    e.preventDefault();

    if (classes.includes(draggedCssClass)) {
      let newClasses = classes;

      for (var i = 0; i < newClasses.length; i++) {
        if (newClasses[i] === draggedCssClass) {
          newClasses.splice(i, 1);
        }
      }

      setClasses(newClasses);
    }
  };

  const fileDrop = e => {
    e.preventDefault();
    const newFiles = e.dataTransfer.files;
    setFiles([...files, ...newFiles]);
  };

  const fileUpload = e => {
    e.preventDefault();
    const newFiles = e.target.files || [];
    setFiles([...files, ...newFiles]);
  };

  return jsx("div", Object.assign({
    onDragOver: dragOver,
    onDragEnter: dragEnter,
    onDragLeave: dragLeave,
    onDrop: fileDrop
  }, {
    children: jsx(FormLayout, Object.assign({
      label: label,
      afterLabel: afterLabel,
      beforeLabel: beforeLabel,
      layout: layout
    }, {
      children: jsxs("label", Object.assign({
        htmlFor: "file-upload",
        className: classes.join(' ')
      }, {
        children: [jsx("input", {
          id: "file-upload",
          name: "file-upload",
          type: "file",
          className: "sr-only",
          onChange: fileUpload
        }, void 0), children]
      }), void 0)
    }), void 0)
  }), void 0);
}

Upload.Dragger = Dragger;

export { Upload as default };
