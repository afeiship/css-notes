# line-height:

## resource:
+ https://www.zhihu.com/question/20394889

## 知识点：
1. line-height: 150%; 子级的line-height 先计算好，16*150% = 24px
2. line-height: 1.5； 子解的：line-height: 1.5 * 30 = 45px;
3. 150%: 先计算，再继承给子级用；  1.5先继承，再动态计算
4. .parent>*{ line-height:150%; } 与 .parent { line-height: 1.5 } 这个是等效的作用
5. 另，1.5em等也是按照150%的情况来算的。

## 其它：
```conf
line-height属性的细节与大多数CSS属性不同，line-height支持属性值设置为无单位的数字。有无单位在子元素继承属性时有微妙的不同。语法line-height: normal | <number> | <length> | <percentage>normal 根据浏览器决定，一般为1.2。
number 仅指定数字时（无单位），实际行距为字号乘以该数字得出的结果。可以理解为一个系数，子元素仅继承该系数，子元素的真正行距是分别与自身元素字号相乘的计算结果。大多数情况下推荐使用，可以避免一些意外的继承问题。length 具体的长度，如px/em等。percentage 百分比，100%与1em相同。
有单位（包括百分比）与无单位之间的区别有单位时，子元素继承了父元素计算得出的行距；
无单位时继承了系数，子元素会分别计算各自行距（推荐使用）。
```