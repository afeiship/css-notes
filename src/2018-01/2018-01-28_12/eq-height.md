# eq-height:

## solution1
+ display-table + table-cell

## solution2:
```css
#one-true { overflow: hidden; }
#one-true .col {
  width: 27%;
  padding: 30px 3.15% 0;
  float: left;

  /*很大的margin-bottom/ padding-bottom: */
  margin-bottom: -99999px;
  padding-bottom: 99999px;
}
#one-true .col:nth-child(1) { margin-left: 33.3%; background: #ccc; }
#one-true .col:nth-child(2) { margin-left: -66.3%; background: #eee; }
#one-true .col:nth-child(3) { left: 0; background: #eee; }


```

## solution3:
+ flex layout