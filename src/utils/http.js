import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (window.localStorage.getItem('User-Token')) {
        config.headers['token'] = localStorage.getItem('User-Token');
    }
    config.headers['name'] = 'ych'
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

const fetch = function(type,url,data){
    if(window.plus){
        window.plus.nativeUI.showWaiting()
        setTimeout(()=>{
            window.plus.nativeUI.closeWaiting()
        },3000)
    }
    let axiosObj = {
        method : type,
        url : url,
        timeout : 10000
    }
    if(type.toLocaleUpperCase()==='GET'){
       axiosObj.params = data;
    }else{
      axiosObj.data = data;
    }
    return new Promise((resolve,reject) => {
        axios(axiosObj).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        }).finally(()=>{
            if(window.plus){
                window.plus.nativeUI.closeWaiting()
            }
        })
    })
}

export default fetch;