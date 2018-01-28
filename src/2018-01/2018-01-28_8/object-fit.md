# object-fit
> object fit solution.

## resource:
+ http://www.zhangxinxu.com/wordpress/2015/03/css3-object-position-object-fit/
+ https://www.zhihu.com/question/20543196
+ https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element


## 知识点：
```conf
object-fit 只能用于可替换元素(replaced element) ，用以
指定替换元素的内容应该如何适应到其使用的高度和宽度确定的框。


概述
CSS 里，可替换元素（replaced element）的展现不是由CSS来控制的。这些元素是一类 外观渲染独立于CSS的 外部对象。 典型的可替换元素有 <img>、 <object>、 <video> 和 表单元素，如<textarea>、 <input> 。 某些元素只在一些特殊情况下表现为可替换元素，例如 <audio> 和 <canvas> 。 通过 CSS content 属性来插入的对象 被称作 匿名可替换元素（anonymous replaced elements）。

CSS在某些情况下会对可替换元素做特殊处理，比如计算外边距和一些auto值。
需要注意的是，一部分（并非全部）可替换元素，本身具有尺寸和基线（baseline），会被像vertical-align之类的一些 CSS 属性用到。

这个方案的最佳场景，就是图片、视频标签，因为有各种尺寸，但真正看的时候，又需要保持最佳的xy纵横比，且居中
```

## 核心代码
```css
.parent{
    width:100%;
    height:100%;
    background-color: #f00;
    margin:0 auto;
}
.parent>.center{
    width:100%;
    height:100%;
}
.center {
    object-fit: contain;
    /*其属性值，分别是填充（默认）、包含、覆盖（可能被裁剪）、无变化（保持原状）和等比例缩放*/
}
```