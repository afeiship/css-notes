# line-height:


## 知识点：
1. line-height: 150%; 子级的line-height 先计算好，16*150% = 24px
2. line-height: 1.5； 子解的：line-height: 1.5 * 30 = 45px;
3. 150%: 先计算，再继承给子级用；  1.5先继承，再动态计算
4. .parent>*{ line-height:150%; } 与 .parent { line-height: 1.5 } 这个是等效的作用