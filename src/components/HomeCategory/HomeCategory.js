import React from "react";
import "./HomeCategory.scss";
import { Flex, WhiteSpace } from "antd-mobile";

export default function () {
  return (
    <div className="home-category">
      <WhiteSpace />
      <Flex>
        <Flex.Item>
          <a href="##" className="item-a">
            <div className="item-img-wrapper"></div>
            <p className="item-title">Java EE</p>
          </a>
        </Flex.Item>
        <Flex.Item>
          <a href="##" className="item-a">
            <div
              className="item-img-wrapper"
              style={{ backgroundPositionX: "-50px" }}
            ></div>
            <p className="item-title">UI设计</p>
          </a>
        </Flex.Item>
        <Flex.Item>
          <a href="##" className="item-a">
            <div
              className="item-img-wrapper"
              style={{ backgroundPositionX: "-100px" }}
            ></div>
            <p className="item-title">前端</p>
          </a>
        </Flex.Item>
        <Flex.Item>
          <a href="##" className="item-a">
            <div
              className="item-img-wrapper"
              style={{ backgroundPositionX: "-150px" }}
            ></div>
            <p className="item-title">Python</p>
          </a>
        </Flex.Item>
      </Flex>
      <WhiteSpace />
      <Flex>
        <Flex.Item>
          <a href="##" className="item-a">
            <div
              className="item-img-wrapper"
              style={{ backgroundPositionX: "-200px" }}
            ></div>
            <p className="item-title">ios</p>
          </a>
        </Flex.Item>
        <Flex.Item>
          <a href="##" className="item-a">
            <div
              className="item-img-wrapper"
              style={{ backgroundPositionX: "-250px" }}
            ></div>
            <p className="item-title">大数据</p>
          </a>
        </Flex.Item>
        <Flex.Item>
          <a href="##" className="item-a">
            <div
              className="item-img-wrapper"
              style={{ backgroundPositionX: "-300px" }}
            ></div>
            <p className="item-title">C++</p>
          </a>
        </Flex.Item>
        <Flex.Item></Flex.Item>
      </Flex>
      <WhiteSpace />
    </div>
  );
}
