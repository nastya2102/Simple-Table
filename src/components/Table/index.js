import React  from 'react';
import { Table } from 'antd';
import { users } from '../../shared/constains';
import { calculateAge, calculateDateRange } from '../../shared/helpers';
import './style.scss';

const CustomTable = ({selectedRow, handleChangeRow, searchValue}) => {
  const columName =  [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <div>{text.split(' ')[0]}</div>,
    },
    {
      title: 'Last Name',
      dataIndex: 'name',
      render: (text) => <div>{text.split(' ')[1]}</div>,
    },
    {
      title: 'Position',
      dataIndex: 'position',
    },
    {
      title: 'Department',
      dataIndex: 'department',
    },
    {
      title: 'Age',
      dataIndex: 'date_of_birth',
      render: (item) => <div>{calculateAge(new Date(item))}</div>,
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      render: (item) => <div>{Number(item).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>,
    },
    {
      title: 'Employment time',
      dataIndex: 'employment_date',
      render: (item) => <div>{calculateDateRange(new Date(item))}</div>,
    },
  ];

  return (
      <Table
        filteredValue={searchValue}
        rowSelection={{
          selectedRowKeys: selectedRow,
          onChange: handleChangeRow,
          type: 'checkbox',
        }}
        columns={columName}
        dataSource={users}
      />
  );
};

export default CustomTable;