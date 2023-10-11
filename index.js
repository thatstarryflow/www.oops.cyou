// 获取需要操作的元素
const contactLink = document.querySelector('a[href="mailto:youremail@example.com"]');

      
// 添加鼠标悬停事件处理程序，以突出显示联系链接
contactLink.addEventListener('mouseenter', () => {
    contactLink.style.fontWeight = 'bold';
});

contactLink.addEventListener('mouseleave', () => {
    contactLink.style.fontWeight = 'normal';
});