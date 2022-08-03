function add_Task(){
    var task=document.getElementById("input-data").value;
    var text_area = document.getElementsByClassName("text-area");
    var ele=document.createElement("div");
    text_area[0].appendChild(ele);
    ele.classList.add("task");
    var input = document.createElement("input");
    var edit_btn=document.createElement("button");
    var tasks=document.getElementsByClassName("task");
    input.classList.add("content");
    tasks[0].appendChild(input);
    tasks[0].append(edit_btn);
    input.setAttribute(value=task);
}
