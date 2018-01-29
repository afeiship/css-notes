# nagative-margin


## resources:
+ http://www.jcodecraeer.com/plus/view.php?aid=1133


## 知识点：
```conf
使用负margin可以使:当前的div左边能容纳下面的div浮动上来 
因此把右边的div摆在前面，左边的摆后面，右边的使用负margin就能让左边的浮上来
这样就遮住了右边的左半部分，只要右边再内部使用一个div
外左边距为左边的宽度就实现了左右的排版。
```

## 自己的小结：
```conf
1. 负 margin 需要 正 margin 来中和 或者 正padding
2. 负 margin 不会脱离文档流
3. 负 margin 下面的元素，可以来填充他产生的空隙，当然，这需要配合float:left/right 这种东西。
4. 使用这种技术，基本是把简单的 layout 变得复杂一点； 但是有意义：
5. 意义在于：可以把重要的 content 内容先加载，先渲染； 第二点：SEO；还是一种体验上的优化吧！
```