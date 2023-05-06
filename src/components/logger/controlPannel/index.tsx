import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import './styles.scss';
import type { IApiResponse } from '../../../types/Responses';
import { useStore } from '@nanostores/react';
import { page, pageSize, selectedColections } from './selectedCollections';


const ControlPannel = () => {
  const [collections, setCollections] = useState<string[]>([]);

  const $pageSize = useStore(pageSize);
  const onChangePageSize = (e: ChangeEvent<HTMLInputElement>) => pageSize.set(Number(e.target.value));

  const $page = useStore(page);
  const onChangePage = (e: ChangeEvent<HTMLInputElement>) => page.set(Number(e.target.value));

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
          <label htmlFor="page">Página</label>
          <input type="number" name="page" value={$page} onChange={onChangePage} />
        </div>
        <div className="pagination-input">
          <label htmlFor="pageSize">Quantidade por página</label>
          <input type="number" name="pageSize" value={$pageSize} onChange={onChangePageSize}/>
        </div>
      </div>
    </div>
  );
};

export default ControlPannel;