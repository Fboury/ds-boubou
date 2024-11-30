import Modal from "./index";
import {Meta, StoryFn, StoryObj} from '@storybook/react';
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "DS/Containers/Modal",
  tags: ['autodocs'],
  component: Modal
};

export default meta;

const TemplateBase: StoryFn<typeof Modal> = () => {

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Ouvrir modal</button>
      <Modal shown={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal de test</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor doloremque est explicabo, fuga illo
          itaque minima nemo nisi nostrum, odit perspiciatis quaerat quos recusandae temporibus. Accusantium minus odit
          optio.</p>
      </Modal>
    </div>
  )
};

export const Basic: StoryObj<typeof Modal> = {
  render: TemplateBase,
}
