// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);

//console.log(document.all);


document.getElementById("main-heading").textContent = 'New DOM Layout';
document.getElementById("main-heading").classList.add("bg-success");
document.getElementById("para1").textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';
document.getElementById("para2").textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';


document.getElementById("btn").onclick = function () {
    document.getElementById("para4").textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';
}


document.getElementById("red").className = 'bg-danger';
document.getElementById("blue").className = 'bg-primary';
document.getElementById("yellow").className = 'bg-warning';
document.getElementById("green").className = 'bg-success';
document.getElementById("black").className = 'bg-dark';



