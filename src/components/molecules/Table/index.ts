import dynamic from 'next/dynamic';
import Header from './Header';
import HeaderColumn from './Header/Column';
import SearchInput from './Header/SearchInput';
import Row from './Row';
import RowColumn from './Row/Column';

const Rows = dynamic(() => import('./Rows'));
export default {
  Header: { Component: Header, Column: HeaderColumn, SearchInput },
  Row: { Component: Row, Column: RowColumn },
  Rows,
};
