# object-fit
> object fit solution.

## resource:
+ http://www.zhangxinxu.com/wordpress/2015/03/css3-object-position-object-fit/
+ https://www.zhihu.com/question/20543196


## 知识点：
```conf
object-fit 只能用于可替换元素(replaced element) ，用以
指定替换元素的内容应该如何适应到其使用的高度和宽度确定的框。

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