import axios from "axios";

// 加载各UI组件的消息提醒，用于提示获取数据
// import { Toast } from "antd-mobile";
// import { Message } from "antd";



const http = axios.create({
  baseURL: "http://mock-api.com/mnEd3LgJ.mock",
  timeout: 2000,
});

// 拦截器的 常用场景

// // 请求拦截
// http.interceptors.request.use(config => {
//     // 自定义header，可添加项目token
//     config.headers.token = 'token';
//     return config;
// });
// // 返回拦截
// http.interceptors.response.use((response)=>{
//     // 获取接口返回结果
//     const res = response.data;
//     // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
//     if(res.code === 0){
//         return res;
//     }else if(res.code === 10000){
//         // 10000假设是未登录状态码
//         // Message.warning(res.message);
//         // 也可使用router进行跳转
//         window.location.href = '/#/login';
//         return res;
//     }else{
//         // 错误显示可在http中控制，因为某些场景我们不想要展示错误
//         // Message.error(res.message);
//         return res;
//     }
// },()=>{
//     // Message.error('网络请求异常，请稍后重试!');
// });


export default http;
