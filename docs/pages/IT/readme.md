# 布局方案
# 
```html
<div class="parent">
    <div class="child"></div>
</div>
```
## 水平居中
1. text-align:center
只可以对行元素起作用,可以对子元素设置display：inline-block属性
```css
.parent {
	text-align: center;
    background-color: pink;
}
.child {
	display: inline-block;
    height: 300px;
    width: 300px;
    background-color: red;
}
```
2. margin: 0 auto
被设置的元素要有固定宽度
```css
.parent {
    
    background-color: pink;
}
.child {
    margin: 0 auto;
    height: 300px;
    width: 300px;
    background-color: red;
}
```
3. 利用定位的left和margin
```css
.parent {
    
    background-color: pink;
}
.child {
    position: relative;
    left: 50%;
    /* 盒子宽度的一半 */
    margin-left: -150px;
    height: 300px;
    width: 300px;
    background-color: red;
}
```
4. 利用绝对定位
```css
.parent {
    position: relative;
    height: 300px;
    background-color: pink;
}
.child {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 300px;
    width: 300px;
    background-color: red;
}
```
5. 定位和转换
```css
.parent {
    position: relative;
    height: 300px;
    background-color: pink;
}
.child {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
	
    height: 300px;
    width: 300px;
    background-color: red;
}
```
6. flex
```css
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 300px;
    background-color: pink;
}
.child {
    height: 300px;
    width: 300px;
    background-color: red;
}
```
7. grid
```css
.parent {
    display: grid;
    justify-content: center;
    /* justify-items: center; */
    height: 300px;
    background-color: pink;
}
.child {
    height: 300px;
    width: 300px;
    background-color: red;
}
```