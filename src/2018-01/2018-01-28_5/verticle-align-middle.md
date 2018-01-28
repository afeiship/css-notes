# verticle-align-middle


## 知识点：
```css
.dib-block,
.dib-fix{
    display: inline-block;
    vertical-align: middle;
}

.dib-block{
    background: #eee;
    border:1px solid #f00;
}
/* 这个占位的非常关键，直接决定了container的高度 */
.dib-fix{
    width:0;
    height: 100%;
}
```