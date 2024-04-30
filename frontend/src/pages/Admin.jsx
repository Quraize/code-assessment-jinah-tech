import AppNavbar from "../components/navbar/AppNavbar";
import Table from "../components/TableCat/Table";
import "./GeneralStyles.css";

import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
import { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
const allData = [
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "YOYOMA",
    catagory: "MERN",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
  {
    name: "Access Monitor",
    catagory: "Internet of Things",
    creation: "02/07/2022",
  },
];

export default function Admin() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (url, set) => {
      try {
         const response = await axios.get(url);
         set(response.data.map(item => {
          return {
            name: item.name,
            catagory: item.catagory,
            creation: item.createdAt
          }
         }));

      } catch (error) {
         console.log(`Error fetching data from ${url}:`, error.message);
      }
   };

    fetchData('http://localhost:3000/catagory/getrecord',setData);
    console.log(data);
    AOS.init({
      duration: 1300,
      easing: "ease-in-out-back",
    });
  }, []);
  return (
    <div>
      <AppNavbar />
      <div className="admin-table-sec">
        <div className="heading" data-aos="fade-down">
          Product Sub-catagory Code
        </div>
        <Table Data={data} />
      </div>
    </div>
  );
}
