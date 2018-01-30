# holy-grails-layout
> Holy grails layout


## resources:
+ http://alistapart.com/d/holygrail/example_4.html
+ http://www.elonglau.com/33.html


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
