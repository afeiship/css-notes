# list-items
> list with items.

## resources:
+ https://segmentfault.com/q/1010000005902727

## 公式：
```scss
/*
这里只看 x 方向
*/
$wrap-width: 1000px;
$item-width: 320px;
$count: 3;

// 公式：
 ($item-width + $gap) * $count = $wrap-width + $gap;

// 结论：
$gap: ( $wrap-width - $item-width * $count )/ ($count - 1)
$gap: (1000 - 3*320)/2  // 20px

.wrapper{
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    >.ul{
        margin-right:-20px;
        >.li{
            width:320px;
            height: 200px;
        }
    }
}


```

## 知识点：
```conf
1. margin-right: -20px margin 的负值，当相关元素
2. width:auto 的时候，margin的负值，会增加元素宽度
3. margin:left的负值，还是继续以左，上，原点为准，向左移
4. 这个特性只适用于 margin-right:-20px 的情况

左和右的css负边距对元素宽度的影响

负边距不仅能影响元素在文档流中的位置，还能增加元素的宽度！
这个作用能实现的前提是：该元素没有设定width属性（当然width:auto是可以的）。
```