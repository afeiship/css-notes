# holy-grails-layout
> Holy grails layout


## resources:
+ http://alistapart.com/d/holygrail/example_4.html
+ http://www.elonglau.com/33.html


## 深入理解 margin 负值：
+ https://www.cnblogs.com/xiaohuochai/p/5314289.html

```conf
虽然margin可以应用到所有元素，但display属性不同时，表现也不同
【1】block元素可以使用四个方向的margin值
【2】inline元素使用上下方向的margin值无效
【3】inline-block使用上下方向的margin负值看上去无效

[注意]inline-block使用上下方向的margin负值只是看上去无效，
这与其默认的vertical-align:baseline有关系，当垂直对齐的属性值为其他值时，则会显示不同的视觉效果
```




## 知识点：
```conf
经典三列布局，也叫做圣杯布局【Holy Grail of Layouts】是Kevin Cornell在2006年提出的一个布局模型概念，在国内最早是由淘宝UED的工程师传播开来，在中国也有叫法是双飞翼布局，它的布局要求有几点：

1、三列布局，中间宽度自适应，两边定宽；
2、中间栏要在浏览器中优先展示渲染；
3、允许任意列的高度最高；
4、要求只用一个额外的DIV标签；
5、要求用最简单的CSS、最少的HACK语句；
```


## margin-left/top 的负值：
```conf
在元素规定了 width/height 的时候，就会相对于父级，左，上的原点：按 x/y 方向来移动
```

## margin-right/bottom 的负值:
```conf
在元素规定了 width/height 的时候，就会相对于父级，我的理解，就是向上填空！(而bottom或right的负值是让其下边的兄弟元素向上x值)
```
