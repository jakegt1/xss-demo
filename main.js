function createRow(content) {
    const template = document.getElementById("row").content.cloneNode(true);
    const contentElement = template.querySelector("slot[name='content']");
    contentElement.outerHTML = content;
    return template;
}

function handleSubmission() {
    const title = document.getElementById("title");
    const value = title.value;
    const escaped = new Option(value).innerHTML;

    document.getElementById("escaped").appendChild(createRow(escaped));
    document.getElementById("xss").appendChild(createRow(value));   
    title.value = "";
    document.getElementById("")
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("add").addEventListener("click", handleSubmission);
    document.addEventListener("keyup", (evt) => {
        if(evt.key === "Enter"){
            handleSubmission();
        }
    });
});