# css box
- CSS 盒模型

## 定义
- 内容(content)
- 内边距(padding)
- 边框(border)
- 外边距(margin)
- CSS盒子模型都具备这些属性。
- 这些属性我们可以用日常生活中的常见事物——盒子作一个比喻来理解，所以叫它盒子模型。
- CSS盒子模型就是在网页设计中经常用到的CSS技术所使用的一种思维模型。

~~~
基本概念：标准模型 和IE模型
CSS如何设置这两种模型
JS如何设置获取盒模型对应的宽和高
实例题（根据盒模型解释边距重叠）
BFC（边距重叠解决方案）
~~~

## 组成
盒模型的组成大家肯定都懂，由里向外content,padding,border,margin.
盒模型是有两种标准的，一个是标准模型，一个是IE模型。

<img width="400" src="https://images2017.cnblogs.com/blog/1265396/201711/1265396-20171119143703656-1332857321.png" />
<img width="400" src="https://images2017.cnblogs.com/blog/1265396/201711/1265396-20171119144229156-49945808.png" />


## 如何设置
```css
/* 标准模型 */
box-sizing:content-box;

 /*IE模型*/
box-sizing:border-box;
```

## 用 js 取
通过JS获取盒模型对应的宽和高，有以下几种方法：
为了方便书写，以下用dom来表示获取的HTML的节点。

1. dom.style.width/height 
    这种方式只能取到dom元素内联样式所设置的宽高，也就是说如果该节点的样式是在style标签中或外联的CSS文件中设置的话，通过这种方法是获取不到dom的宽高的。
2. dom.currentStyle.width/height 
   - 这种方式获取的是在页面渲染完成后的结果，就是说不管是哪种方式设置的样式，都能获取到。
   - 但这种方式只有IE浏览器支持。
3. window.getComputedStyle(dom).width/height
　　这种方式的原理和2是一样的，这个可以兼容更多的浏览器，通用性好一些。
4. dom.getBoundingClientRect().width/height
　　这种方式是根据元素在视窗中的绝对位置来获取宽高的
5.dom.offsetWidth/offsetHeight
　　这个就没什么好说的了，最常用的，也是兼容最好的。

## 边距重叠
父元素没有设置margin-top，而子元素设置了margin-top：20px;可以看出，父元素也一起有了边距.

## 边距重叠解决方案(BFC) - 自动拥有布局 - ie(haslayout)
首先要明确BFC是什么意思，其全英文拼写为 Block Formatting Context 直译为“块级格式化上下文”

BFC的原理
内部的box会在垂直方向，一个接一个的放置
每个元素的margin box的左边，与包含块border box的左边相接触（对于从做往右的格式化，否则相反）
box垂直方向的距离由margin决定，属于同一个bfc的两个相邻box的margin会发生重叠
bfc的区域不会与浮动区域的box重叠
bfc是一个页面上的独立的容器，外面的元素不会影响bfc里的元素，反过来，里面的也不会影响外面的
计算bfc高度的时候，浮动元素也会参与计算

## 怎么取创建bfc
- float属性不为none（脱离文档流）
- position 为 absolute 或 fixed
- display为inline-block,table-cell,table-caption,flex,inine-flex
- overflow 不为 visible
- 根元素

## 应用场景
自适应两栏布局
清除内部浮动 
防止垂直margin重叠


## 普通流
从定义中我们可以知道只要不是 float、absolutely positioned 和 root element 时就是 in flow。


## 外边距叠加存在两种情况：
- 一是父子外边距叠加；
- 二是兄弟外边距叠加。


## resources
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing