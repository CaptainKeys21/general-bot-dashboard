import React, { ChangeEvent, useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useStore } from '@nanostores/react';

import { initialDate, finalDate, page, pageSize, selectedColections } from './selectedCollections';
import type { IApiResponse } from '../../../types/Responses';
import DatePicker from '../../general/DatePicker';
import axios from '../../../utils/axios';
import './styles.scss';



const ControlPannel = () => {
  const [collections, setCollections] = useState<string[]>([]);

  //* Page Size
  const $pageSize = useStore(pageSize);
  const onChangePageSize = (e: ChangeEvent<HTMLInputElement>) => pageSize.set(Number(e.target.value));

  //* Page
  const $page = useStore(page);
  const onClickNextPage = () => page.set($page + 1); 
  const onClickPreviousPage = () => $page > 1 && page.set($page - 1); 

  //* Date Filter
  const $initialDate = useStore(initialDate);
  const $finalDate = useStore(finalDate);

  //* Selected Collectionns
  const $selectedCollections = useStore(selectedColections);
  const addCollection = (coll: string) => {
    $selectedCollections.push(coll);
    selectedColections.set([...new Set($selectedCollections)]);
  };
  const removeCollection = (coll: string) => {
    const index = $selectedCollections.indexOf(coll);
    if (index === -1) return;
    selectedColections.set([...new Set($selectedCollections.filter((e) => e !== coll))]);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    $selectedCollections.includes(e.target.name)? removeCollection(e.target.name):addCollection(e.target.name);
  };

  useEffect(() => {
    axios.get<IApiResponse<string[]>>('/logger/categories', { baseURL: 'http://localhost:8081' })
      .then((res) => setCollections(res.data.data));
  },[]);

  return (
    <div className="main-pannel">
      <div className="pannel-collections">
        {collections.map((val, index) => (
          <div className="collection-checkbox" key={index}>
            <input type="checkbox" id={val} name={val} checked={$selectedCollections.includes(val)} onChange={onChange}/>
            <label htmlFor={val}>{val}</label>
          </div>
        ))}
      </div>
      <div className="pannel-pagination">
        <div className="pagination-input">
          <label>Página</label>
          <button onClick={onClickPreviousPage} className='page-button'><FaAngleLeft size={'1.5rem'} /></button>
          <p>{$page}</p>
          <button onClick={onClickNextPage} className='page-button'><FaAngleRight size={'1.5rem'} /></button>
        </div>
        <div className="pagination-input">
          <label htmlFor="pageSize">Quantidade por página</label>
          <input type="number" name="pageSize" value={$pageSize} onChange={onChangePageSize}/>
        </div>
        <div className="pagination-input">
          <label htmlFor='initial-date'>Data Inicial</label>
          <DatePicker 
            selected={$initialDate} 
            onChange={(date) => initialDate.set(date?.getTime() || 0)} 
          />
        </div>
        <div className="pagination-input">
          <label htmlFor='final-date'>Data Final</label>
          <DatePicker 
            selected={$finalDate} 
            onChange={(date) => finalDate.set(date?.getTime() || 0)} 
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPannel;