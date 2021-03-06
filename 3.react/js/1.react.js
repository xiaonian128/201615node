/**
 * react.js React
 * react-dom.js ReactDOM
 */
/**
 * render是渲染页面
 * 就是把HTML标签绘制到页面的容器元素中去
 * 1参数 是要绘制的标签
 * 2参数 是画到哪里去，是容器
 * jsx javascript+(xml+html)混合写法
 * 1. 虚拟DOM元素 dom里的p 标签是不一样的
 * 在html代码中如果遇到{开头的表示是js表达式
 */
/*let style = {color:'red'};
ReactDOM.render(
  <p style={style}>hello</p>,document.querySelector('#app')
);*/
function render(domEle,container){
  //创建一个真实DOM元素 p
  var ele = document.createElement(domEle.tag);
  //给ele的子元素赋值
  ele.innerHTML = domEle.children;
  container.appendChild(ele);
}
//babel转译JS代码
render(
  {
    tag:'p',//标签名
    children:'hello'//代表内容或者说子元素
  },document.querySelector('#app')
);



/*function render(html,container){
  container.innerHTML = html;
}
render(
  '<p>hello</p>',document.querySelector('#app')
);*/
