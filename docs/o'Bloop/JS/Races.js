window.addEventListener('DOMContentLoaded', function() {
    function drawLineBetweenDivs(div1Id, div2Id) {
        var div1 = document.getElementById(div1Id);
        var div2 = document.getElementById(div2Id);
        var lines = document.getElementById('lines');
        
        var div1Rect = div1.getBoundingClientRect();
        var div2Rect = div2.getBoundingClientRect();
        
        var svgns = "http://www.w3.org/2000/svg";
        var lineEl = document.createElementNS(svgns, 'line');
        
        lineEl.setAttribute('x1', div1Rect.left + div1Rect.width / 2);
        lineEl.setAttribute('y1', div1Rect.top + div1Rect.height / 2);
        lineEl.setAttribute('x2', div2Rect.left + div2Rect.width / 2);
        lineEl.setAttribute('y2', div2Rect.top + div2Rect.height / 2);
        lineEl.setAttribute('stroke', 'black');
        
        lines.appendChild(lineEl);
    }
});