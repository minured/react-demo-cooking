import React, { useState, useEffect } from "react";
import "./HomeCarousel.scss";
import { Carousel } from "antd-mobile";

export default function () {
  // 1 2 3作为占位，请求数据后替换
  let [imgList, setImgList] = useState([1, 2, 3]);
  let [imgHeight, setImgHeight] = useState(176);

  useEffect(() => {
    console.log("useEffect");
    // 模拟请求延迟
    setTimeout(() => {
      setImgList([
        "AiyWuByWklrrUDlFignR",
        "TekJlZRVCjLFexlOCuWn",
        "IJOtIlfsYdTyaDTRVrLI",
      ]);
    }, 200);
  }, []);

  return (
    <div className="home-carousel">
      <Carousel
        autoplay={true}
        infinite
        // from to 接收的是 indx
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log("slide to", index)}
      >
        {imgList.map((val) => (
          <a
            key={val}
            href="###"
            style={{
              display: "inline-block",
              width: "100%",
              height: imgHeight,
            }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              //   src={require(`../../assets/images/banner${val}.png`)}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                setImgHeight("auto");
              }}
            />
          </a>
        ))}
      </Carousel>
    </div>
  );
}
