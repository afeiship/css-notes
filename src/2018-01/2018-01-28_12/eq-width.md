# eq-width:

## muliple colums layout:
+ http://matthewjamestaylor.com/blog/ultimate-multi-column-liquid-layouts-em-and-pixel-widths


## 知识点：
1. 这里的基本原理是外层table/里层table-cell
2. 给里面的table-cell 规定一个相对接近等分的数字，但记得一定是接近！接近！接近！不能是：width:1%; 这种
3. 因为table会自动计算没错，但如果是很小的话，table在计算的时候，如果有很多或者很少的内容的时候，就会出现不等宽的情况
4. 但是如果用上这个属性之后，就不一样了： table-layout: fixed; 这个是保证table只进行一次渲染，后面内容的多少都不会影响，所以，可以用1%的方式来做。
5. 但是原生的 table/td 又不是这种表现，所以这里，还只能用div的方式才是这种表现。
## html:
```html
 <div class="div-table">
    <div class="div-tbcell">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </div>
    <div class="div-tbcell">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
        vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies
        mi vitae est. Mauris placerat eleifend leo.
    </div>
    <div class="div-tbcell">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </div>
</div>
```

## Style1:
```scss
/* 1%: 实测试，没有用：table-layout: fixed;  */
.div-table{
    display:table;
    table-layout: fixed;
    .div-tbcell{
        display:table-cell;
        width:1%;
    }
}
```

## Style2:
```scss
.div-table{
    display:table;
    .div-tbcell{
        display:table-cell;
        width:33%;
    }
}
```

## styl3:
```css
/*
https://www.w3schools.com/howto/howto_css_equal_height.asp
*/
.col-container {
    display: table; /* Make the container element behave like a table */
    width: 100%; /* Set full-width to expand the whole page */
}

.col {
    display: table-cell; /* Make elements inside the container behave like table cells */
}
```
