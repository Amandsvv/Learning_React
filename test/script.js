function myfun(status){
    return new Promise((res,rej) =>{
        setTimeout(() => {
            if(status){
                res("task Completed");
            }else{
                rej("Task failed");
            }
        },2000)
    })
}

myfun(true)
.then(result => console.log(result))
.catch(result => console.log(result))