import React, { useEffect, useState } from "react";
import "./HomeList.scss";
import "../../http";
import http from "../../http";
import { ListView, WingBlank, WhiteSpace } from "antd-mobile";
import Image from "../../components/ImportImg";

// 自定义 useFetch 请求数据

export default function () {
  let [subList, setSubList] = useState([]);

  const useFetch = (url) => {

    useEffect(() => {
      async function fetchData() {
        const res = await http.get(url);
        console.log(res);
        setSubList(res.data);
      }
      fetchData();
    }, [url]);
  };
  useFetch("/sublist");


  //   const getSubList = async (url) => {
  //     const res = await http.get(url);
  //     console.log(res);
  //     setSubList(res.data);
  //   };

  //   useEffect(() => {
  //     getSubList("/sublist");
  //   }, []);


  return (
    <div className="home-sub-list">
      <WhiteSpace />
      <WingBlank>
        {/* 渲染列表 */}
        {subList.map((v, i) => (
          <div className="list-item" key={i}>
            <div className="left-img">
              <Image src={v.img} />
            </div>
            <div className="right-content">
              <div className="title">{v.title}</div>
              <div className="des">{v.des}</div>
            </div>
          </div>
        ))}
      </WingBlank>
    </div>
  );
}
