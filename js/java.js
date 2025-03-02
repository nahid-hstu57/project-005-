document.getElementById("main-btn").addEventListener('click',function(){
    window.location.href = "/index.html";
})
document.getElementById("go-to-main").addEventListener('mouseout', function () {
    window.location.href = "main.html";
    console.log("clicked"); 
})
document.getElementById("btn-task-1").addEventListener('click',function(){
    alert("task completed")
    console.log("akdfj");
})