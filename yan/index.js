const apiURL = 'https://v1.hitokoto.cn?c=d&e&f&g&h&i&j&k=c'

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    const hitokoto = document.querySelector('#hitokoto_text')
    const from = document.querySelector('#from_text')
    
    //测试用
   // const test = document.querySelector('#test')
   // test.innerText = "test："+"from"+data.from +"from_who"+ data.from_who
   
   
    hitokoto.innerText = "『 "+ data.hitokoto + "』" 
    if( data.from == null ){
        if( data.from_who == null ){
            from.innerText = "-未知";
        }else{
            from.innerText = data.from_who
        }
    }else{
        if( data.from_who == null){
            from.innerText = data.from
        }else{
            from.innerText =  data.from + " | " + data.from_who
        }    
    }
})
  .catch(console.error)

