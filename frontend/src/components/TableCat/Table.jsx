/* eslint-disable react/prop-types */
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { Link } from "react-router-dom";

import './TableStyles.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";

const tableHead = {
  name: "Subcatagory",
  catagory: "Catagory",
  creation: "Date",
};

export default function Table({Data}) {
  const allData = [...Data]
  const countPerPage = 5;
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState(
    cloneDeep(allData.slice(0, countPerPage))
  );
  const searchData = useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        allData
          .filter(item => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }

    AOS.init({
      duration: 1300,
      easing: "ease-in-out-back",
    });
  }, [value]);

  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData.slice(from, to)));
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <>
      <div className="search-sec">
        <input
          placeholder="Search by subcatagory"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="catagory-input"
          data-aos="fade-right"
        />
        <div>
          <Link to={'/admin/addcatagory'}><button className="catagory-funcs" data-aos="fade-up">Add</button></Link>
          <Link to={'/admin/deletecatagory'}><button className="catagory-funcs" data-aos="fade-left">Delete</button></Link>
        </div>
      </div>
      <table data-aos="zoom-in">
        <thead className="table-head">
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={allData.length}
        className="pagination-sec"
        data-aos="zoom-in"
      />
    </>
  );
}
