import Modal from "./index";
import { Meta, StoryFn } from '@storybook/react';
import { useState } from "react";
import ModalCloseButton from "./ModalCloseButton";
import ModalContent from "./ModalContent";

export default {
  title: "Macif/Containers/Modal",
  tags: ['autodocs'],
  component: Modal
} as Meta<typeof Modal>;

const TemplateBase: StoryFn<typeof Modal> = () => {

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Ouvrir modal</button>
      <Modal shown={showModal}>
        <ModalCloseButton onClose={() => setShowModal(false)} />
        <ModalContent>
          <h2>Modal de test</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor doloremque est explicabo, fuga illo
            itaque minima nemo nisi nostrum, odit perspiciatis quaerat quos recusandae temporibus. Accusantium minus odit
            optio.</p>
        </ModalContent>
      </Modal>
    </div>
  );
};

export const Basic = {
  render: TemplateBase,
}

const TemplateModaleSansCroixFermeture: StoryFn<typeof Modal> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Ouvrir modal</button>
      <Modal shown={showModal}>
        <ModalContent>
          <h2>Modal de test</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor doloremque est explicabo, fuga illo
            itaque minima nemo nisi nostrum, odit perspiciatis quaerat quos recusandae temporibus. Accusantium minus odit
            optio.</p>
        </ModalContent>
      </Modal>
    </div>
  );
}

export const VarianteNonFermable = {
  render: TemplateModaleSansCroixFermeture,
}
