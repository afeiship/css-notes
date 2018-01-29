# table-cell

## resouces:
+ https://mly-zju.github.io/html/css/2016/02/23/verticalAlign.html
+ http://www.zhangxinxu.com/study/201010/table-cell-two-column-flow-layout.html

## 知识点：
1. 当父级为d:table的时候，子级(为d:tbc)会width/height:100%;
2. 里层的元素居中就比较简单了：va:m

## 关于table-width: 1%;
+ https://liaolushen.github.io/2015/09/12/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3-1-table-cell-width/


## 其它
```conf
Here is my technique for text content but not for lt ie8: (IE8是支持这种方式的)

html, body{ width:100%; height:100%; margin:0}
body{ display:table;}
div{ display:table-cell; vertical-align:middle; text-align:center}
```

## 关于table-cell 1%的总结：

1. 第一种方案：
```conf
原理解释：

table-layout:fixed;
这个性能会好一些，是在没有填充内容的时候，把cell的宽度计算好
所以，他的必要条件是table的width是已经有了的；width:100%;
这里的width:1%, 其实是没有必要的，完全不需要！！！
```


```html
<div class="table">
    <div class="cell">a</div>
    <div class="cell">aaaaaaaaaaaaaaa</div>
</div>
```

```css
.table{
    width:100%;
    display:table;
    table-layout:fixed;
}
.table .cell{
    display:table-cell;
}
```


2. 第2种方案：
```conf
原理解释：

table-layout:auto;
这个是根据内容自动计算，所以cell的宽度是要接近份数的一个比例
table:width:100%
这个就是非必要条件了
```


```html
<div class="table">
    <div class="cell">a</div>
    <div class="cell">aaaaaaaaaaaaaaa</div>
</div>
```

```css
.table{
    display:table;
}
.table .cell{
    display:table-cell;
    width:48%;
}
```