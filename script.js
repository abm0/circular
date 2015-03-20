$(function() {
    var $container = $('#container'),
        el = document.getElementById('foo'),
        centerX = $container.width() / 2 - 10,   
        centerY = $container.height() / 2 - 10,
        radiusX = $container.width() / 3 - 10, 
        radiusY = $container.height() / 3 - 10,
        angle, x, y,
        factor = 0,
        colors = ['blue', 'green', 'yellow', 'red', 'black', 'white'];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function updateAngle(factor) {
        angle = Math.PI * (1 - factor);
        x = centerX + radiusX * Math.cos(angle);
        y = centerY + radiusY * Math.sin(angle); 
        
        if ((factor.toFixed(3) - 1.5) % 2 == 0) {
            el.style.backgroundColor = getRandomColor();
        }
        
        el.style.top = y + 'px';
        el.style.left = x + 'px';
    }

    function rotate() {
        var delta = 0.0025,
            currentDelta = 0,
            delay = 1,
            maxDelta = 0.5;
        
        (function iterate() {
            if (currentDelta <= maxDelta) {
                factor += delta; 
                currentDelta += delta;
                
                updateAngle(factor);
                
                setTimeout(iterate, delay);
            }
        })();
    }

    updateAngle(factor);

    $('#rotate').on('click', rotate);
});