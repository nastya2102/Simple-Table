import React, { useState } from 'react';
import { Layout } from 'antd';
import {options, users} from '../../shared/constains';
import CustomSelect from '../../components/Selector';
import Button from '../../components/Button';
import ComparisonModal from '../../pages/ComparisonModal';
import Table from '../../components/Table';
import InputSearch from '../../components/InputSearch';
import CustomHeader from '../../components/Header';
import './style.scss';

const { Content} = Layout;

const TablePage = () => {
  const [selectedRow, setSelectedRow] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isOpenCompare, setIsOpenCompare] = useState(false);

  const handleChangeRow = (selectedRowKeys) => {
    setSelectedRow(selectedRowKeys);
  };

  const onSearch = (value) => {
    setSearchValue(value)
  };

  const compare = () => {
    setIsOpenCompare(true);
  };

  return (
    <Layout>
      <CustomHeader />
      <Content style={{ padding: '25px 50px' }}>
        {/*<div>*/}
          {options.map((item, i) => (
            <span key={item.id}>
              {i !== 0 && <span className='selector-separator'>in</span>}
              <CustomSelect options={[item]} defaultValue={item.value}/>
            </span>
          ))}
        {/*</div>*/}
        <h1 className='title'>People</h1>
        <div className='search-panel'>
          <InputSearch value={searchValue} onSearch={onSearch} />
          <Button onClick={compare} disabled={!selectedRow.length}>Compare selected</Button>
        </div>
        <Table selectedRow={selectedRow} handleChangeRow={handleChangeRow} searchValue={searchValue}/>
      </Content>
      <ComparisonModal
        isOpen={isOpenCompare}
        handleClose={() => setIsOpenCompare(false)}
        data={users.filter(i => selectedRow.indexOf(i.key) !== -1)}
      />
    </Layout>
  );
};

export default TablePage;