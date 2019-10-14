# margin collapsible
> 外边距合并

## 含义
- `块级元素` 的上外边距和下外边距有时会合并（或折叠）为一个外边距，`其大小取其中的最大者`，
- 这种行为称为外边距折叠（margin collapsing），
- 有时也翻译为外边距合并

## 三种基本情况
+ 相邻元素之间
  - 毗邻的两个元素之间的外边距会折叠（除非后一个元素需要清除之前的浮动）。
+ 父元素与其第一个或最后一个子元素之间
  - 如果在父元素与其第一个子元素之间不存在边框、内边距、行内内容，也没有创建块格式化上下文、或者清除浮动将两者的 margin-top 分开；或者在父元素与其最后一个子元素之间不存在边框、内边距、行内内容、height、min-height、max-height将两者的 margin-bottom 分开，那么这两对外边距之间会产生折叠。此时子元素的外边距会“溢出”到父元素的外面。
+ 空的块级元素



## resources
- https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing