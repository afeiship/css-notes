# BEM
> Block Element Modifer.

## description
```css
.block{}  
.block__element{}  
.block--modifier{}  
```

## rules
- .block 代表了更高级别的抽象或组件。
- .block__element 代表.block的后代，用于形成一个完整的.block的整体。
- .block--modifier代表.block的不同状态或不同版本。
- 之所以使用两个连字符和下划线而不是一个，是为了让你自己的块可以用单个连字符来界定

## example
```css
.site-search{} /* 块 */  
.site-search__field{} /* 元素 */  
.site-search--full{} /* 修饰符 */ 
```

## resources
- http://getbem.com/naming/
- https://www.cnblogs.com/dujishi/p/5862911.html
