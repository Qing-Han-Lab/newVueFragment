import Vue from 'vue';
(function(){ // 动态注册全局组件
  const components_vue = require.context('@/components',true,/\.vue$/);
  const addComponent = function(resolve){
    resolve.keys().forEach((item) => {
        let compName = item.split('/').pop().replace(/.vue$/g,'');
        compName = compName.slice(0,1).toLocaleUpperCase() + compName.substr(1);
        const comp = resolve(item).default;
        Vue.component(compName,comp);
    })
  }
  addComponent(components_vue);
}())