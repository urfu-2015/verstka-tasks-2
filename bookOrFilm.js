var addEvent = function(element, event, handler) {
	if (element.addEventListener) {
		element.addEventListener(event, handler);
	} else {
		element.attachEvent('on'+event, handler);
	}
};


addEvent(window, 'load', function() { init(); });

function init() {
    selectNothing();
    addEvent(document.getElementById('itemType'), 'click', select);
}

function select() {
    switch (document.getElementById('itemType').value) {
        case 'book':
            selectBook();
            break;
        case 'film':
            selectFilm();
            break;
        case 'nothing':
            selectNothing();
            break;
    }
}

function selectBook() {
    document.getElementById('bookDescription').style.display = 'block';
    document.getElementById('filmDescription').style.display = 'none';
    document.getElementById('authorDescription').style.display = 'block';
    document.getElementById('postButton').style.display = 'block';
}

function selectFilm() {
    document.getElementById('bookDescription').style.display = 'none';
    document.getElementById('filmDescription').style.display = 'block';
    document.getElementById('authorDescription').style.display = 'block';
    document.getElementById('postButton').style.display = 'block';
}

function selectNothing() {
    document.getElementById('bookDescription').style.display = 'none';
    document.getElementById('filmDescription').style.display = 'none';
    document.getElementById('authorDescription').style.display = 'none';
    document.getElementById('postButton').style.display = 'none';
}
