# double-div-center
> double div center.

## resources:
+ http://www.mamicode.com/info-detail-2154406.html

## 知识点：
+ margin/padding 等，设置为百分比，都是以父级宽度的50%为基准的
+ 所以：1. 要向左移50%，这个不难，直接left 50%/margin-left:50%; 即可
+ 关键要得到自身宽度，这个就得有个父级，和自己宽度一样的就行了，所以需要再包一层，然后，-50%，就可以满足要求