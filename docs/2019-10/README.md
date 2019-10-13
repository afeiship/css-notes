# 2019-10
- https://1440px.com/

| name                 | code                  | description                 |
| -------------------- | --------------------- | --------------------------- |
| container            | 1440x                 | 容器的宽度/960/1200/1440 等 |
| alpha (ml0)          | margin-left:0;        | 将左侧的空间清0             |
| omega (mr0)          | margin-right:0;       | 将右侧的空间清0             |
| gutter (15px)        | margin:0 15px;        | 每个 column 之间的间距      |
| container .gird-1    | width: 90px;          | 每个 column 的宽度          |
| container .gird-15   | width: 1350px;        | 1+15 = 总的宽度             |
| container .prefix-1  | padding-left: 90px;   | c                           |
| container .prefix-11 | padding-left: 990px   | c                           |
| container .suffix-1  | padding-right: 90px;  | c                           |
| container .suffix-11 | padding-right: 990px; | c                           |
| container .push-1    | left: 80px;           | c                           |
| container .push-11   | left: 880px;          | c                           |
| container .pull-1    | left: -80px;          | c                           |
| container .pull-11   | left: -880px;         | c                           |

```css
.container-12 {
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
.grid-1 {
  position: relative;
  display: inline;
  float: left;
  margin-left: 15px;
  margin-right: 15px;
}
.grid-15 {
  position: relative;
  display: inline;
  float: left;
  margin-left: 15px;
  margin-right: 15px;
}
.alpha {
  margin-left: 0px;
}
.omega {
  margin-right: 0px;
}
.container-12 .grid-1 {
  width: 90px;
}
.container-12 .grid-15 {
  width: 1350px;
}
.container-12 .prefix-1 {
  padding-left: 90px;
}
.container-12 .prefix-11 {
  padding-left: 990px;
}
.container-12 .suffix-1 {
  padding-right: 90px;
}
.container-12 .suffix-11 {
  padding-right: 990px;
}
.container-12 .push-1 {
  left: 80px;
}
.container-12 .push-11 {
  left: 880px;
}
.container-12 .pull-1 {
  left: -80px;
}
.container-12 .pull-11 {
  left: -880px;
}
.clear {
  width: 0px;
  display: block;
  height: 0px;
  visibility: hidden;
  clear: both;
  overflow: hidden;
}
.clearfix:after {
  line-height: 0;
  width: 0px;
  display: block;
  height: 0px;
  visibility: hidden;
  clear: both;
  font-size: 0px;
  content: " ";
}
.clearfix {
  display: inline-block;
}
* html .clearfix {
  height: 1%;
}
.clearfix {
  display: block;
}

```