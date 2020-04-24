export default {
    install(Vue){
        Vue.prototype.speak = function(){
            console.log('my name is vue')
        }
        Vue.prototype.toPage = function(url,data={},animation='pop-in'){ // 页面跳转
              let path = '/index.html#/'+url;
              if(Object.keys(data).length!==0){ // 有参数，url穿参
                path+='?'
                Object.keys(data).forEach((key) => {
                  path += `${key}=${data[key]}&`;
                })
                path = path.slice(0,path.length-1);
              }
              if(window.plus){
                  let wv = window.plus.webview.create(path,url,{});
                  wv.show(animation);
                  wv.onclose = ()=>{
                      console.log('page have been closed')
                  }
              }else{
                  //this.$router.push({path : url,query : data});
                  // 或者  
                  window.location.href = path;
              }
        }
        Vue.prototype.goBack = function(){ //页面返回
             if(window.plus){
                 let wv = window.plus.webview.currentWebview();
                 if(wv){
                     wv.close();
                 }
             }else{
                 window.history.go(-1);
                 // this.$router.go(-1)   this.$router.back()
             }
        }
        Vue.prototype.b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
            // 图片转换为blob
            const byteCharacters = atob(b64Data)
            const byteArrays = []
            for (
              let offset = 0;
              offset < byteCharacters.length;
              offset += sliceSize
            ) {
              const slice = byteCharacters.slice(offset, offset + sliceSize)
              const byteNumbers = new Array(slice.length)
              for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i)
              }
              const byteArray = new Uint8Array(byteNumbers)
              byteArrays.push(byteArray)
            }
            const blob = new Blob(byteArrays, { type: contentType })
            return blob
        }      
    }
}