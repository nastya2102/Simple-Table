import VerticalTable from '../../components/VerticalTable'
import { Modal, Button } from 'antd';
import './style.scss';

const ComparisonModal = ({data, isOpen, handleClose}) => {

  return (
    <>
      <Modal
        visible={isOpen}
        footer={null}
        onCancel={handleClose}
        width={1200}
        title={
          <div className="close-container">
          <Button onClick={handleClose}>X</Button>
        </div>
        }
        bodyStyle={{
          padding: 0,
        }}
      >

        <VerticalTable data={data}/>
      </Modal>
    </>
  );
};

export default ComparisonModal;