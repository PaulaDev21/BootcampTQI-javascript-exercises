function loadPart(elementId, partPath) {
    
    let element = document.getElementById(elementId)
    element.innerHTML = '<object type="text/html" data="' + partPath + '" ></object>';
    console.log(partPath);
    
}