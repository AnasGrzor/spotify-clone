"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const onClick = (open: boolean ) => {
    if (!open) {
      uploadModal.onClose();
    }
  }

  return (
    <Modal
      title="Upload"
      description="Upload your content"
      isOpen={uploadModal.isOpen}
      onChange={() => {}}
    >
      Upload Content
    </Modal>
  );
};

export default UploadModal;
