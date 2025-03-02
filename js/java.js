document.getElementById("main-btn").addEventListener('click',function(){
    window.location.href = "/index.html";
})
let sum=0;
task_completed("btn-task-1");
function task_completed(name){
    document.getElementById("name").addEventListener('click',function(){
        this.style.backgroundColor="gray";
        alert("task completed");
        sum++;
        if(sum==6){
            alert("");
        }
        const container = document.getElementById("comment-section")
        const p=document.createElement("h3");
        p.innerText ='
        "task completed"
        '
        container.appendChild(p)
        
    })
}