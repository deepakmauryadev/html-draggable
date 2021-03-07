// Picking all draggable element
const allDraggableElement = document.querySelectorAll('.draggable');

// Adding event listner to all of them
allDraggableElement.forEach(element => {
    
    var header = document.querySelector('.draggable-header');
    if(!header) header = element;
    header.setAttribute('draggable', 'false')
    
    header.addEventListener('mousedown', mousedown);

    function mousedown(e) {

        let initialCursorPositionX = e.clientX;
        let initialCursorPositionY = e.clientY;
        
        window.addEventListener('mousemove', mousemove);
        window.addEventListener('mouseup',  mouseup);

        function mousemove(e) {
            let nextCursorPositionX = initialCursorPositionX - e.clientX;
            let nextCursorPositionY = initialCursorPositionY - e.clientY;
            
            const rect = element.getBoundingClientRect();

            element.style.left = rect.left - nextCursorPositionX + "px";
            element.style.top = rect.top - nextCursorPositionY + "px";
            
            initialCursorPositionX = e.clientX;
            initialCursorPositionY = e.clientY;
        }

        function mouseup() {
            window.removeEventListener('mousemove', mousemove);
            window.removeEventListener('mouseup', mouseup);
        }
    }
});