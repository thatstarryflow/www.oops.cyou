const APIURL = 'https://v1.hitokoto.cn?c=d&e&f&g&h&i&j&k=c'
const hitokoto = document.querySelector('#hitokoto_text')
const from = document.querySelector('#from_text')

setTimeout(() => getText(), 800);

function getButton(){
hitokoto.innerText =  "获取中......"
from.innerText = ' '
setTimeout(() => getText(), 1000);
}


function getText(){
    fetch(APIURL)
    .then(response => response.json())
    .then(data => {   
    hitokoto.innerText = "『 "+ data.hitokoto + " 』" 
    
    
     /**  {
         //测试代码块
         const test = document.querySelector('#test')
         test.innerText = "test："+"from"+data.from +"from_who"+ data.from_who
          }**/
    
    if( data.from == null ){
        if( data.from_who == null ){
            from.innerText = "-未知"
        }else{
            from.innerText = data.from_who
        }
    }else{
        if( data.from_who == null){
            from.innerText = data.from
        }else{
            if(data.from == data.from_who){
            from.innerText = data.from
            }else{
            from.innerText =  data.from + " | " + data.from_who
            }
        }    
    }
})
  .catch(console.error)
}