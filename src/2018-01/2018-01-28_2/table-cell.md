# table-cell

## resouces:
+ https://mly-zju.github.io/html/css/2016/02/23/verticalAlign.html
+ http://www.zhangxinxu.com/study/201010/table-cell-two-column-flow-layout.html

## 知识点：
1. 当父级为d:table的时候，子级(为d:tbc)会width/height:100%;
2. 里层的元素居中就比较简单了：va:m

## 其它
```conf
Here is my technique for text content but not for lt ie8: (IE8是支持这种方式的)

html, body{ width:100%; height:100%; margin:0}
body{ display:table;}
div{ display:table-cell; vertical-align:middle; text-align:center}
```