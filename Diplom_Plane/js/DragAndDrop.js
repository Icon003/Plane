$(document).ready(function(){
    var DropZone = ('#DropZone');
    var block = 'block';
    var DropZone = document.getElementById("DropZone");
    DropZone.addEventListener("dragover", function(event){
        event.preventDefault(); 
//        event.stopPropagation();
    }, false);
    
    DropZone.addEventListener("drop", function(event){
        event.preventDefault();
//        event.stopPropagation();
        
        var i = 0,
            files = event.dataTransfer.files,
            len = files.length;
            console.log(files);
            for(; i<len;i++){
                var reader = new FileReader();
                reader.onload = function(event) {
                the_url = event.target.result;
                    var img = document.createElement("img");
                    img.src = the_url;
                    img.className = "block";
                    DropZone.appendChild(img);
                    
              }
                reader.readAsDataURL(files[i]);
            }
                
    }, false);

});


