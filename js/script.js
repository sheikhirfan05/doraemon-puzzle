let rows = 3;
let cols = 3;

let currTile;
let otherTile; //blank Tile

let turns = 0;


    // var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"]; 

window.onload = function() {
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            
            let tile = document.createElement('img');
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + '.jpg';

            tile.addEventListener('dragstart', dragStart);
            tile.addEventListener('dragover', dragOver);
            tile.addEventListener('dragenter', dragEnter);
            tile.addEventListener('dragleave', dragLeave);
            tile.addEventListener('drop', dragDrop);
            tile.addEventListener('dragend', dragEnd);

            document.getElementById('board').append(tile);
        }
    }
    
    function dragStart(){
        currTile = this;
    }
    function dragOver(e){
        e.preventDefault();
    }
    function dragEnter(e){
        e.preventDefault();
    }
    function dragLeave(){

    }
    function dragDrop(){
        otherTile = this;
    }
    function dragEnd(){
        if(!otherTile.src.includes('3.jpg')){
            return;
        }

        let currCords = currTile.id.split("-");
        let r = parseInt(currCords[0]);
        let c = parseInt(currCords[1]);

        let otherCords = otherTile.id.split("-");
        let r2 = parseInt(otherCords[0]);
        let c2 = parseInt(otherCords[1]);

        let moveLeft = r == r2 && c2 == c-1;
        let moveRight = r == r2 && c2 ==c+1;

        let moveUp = c == c2 && r2 == r-1;
        let moveDown = c ==c2 && r2 ==r+1;

        let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

        if(isAdjacent){
            var currImg = currTile.src;
            var otherImg = otherTile.src; 
    
            currTile.src = otherImg;
            otherTile.src = currImg;

            turns += 1;
            document.getElementById('turns').innerText = turns;
        }
    }
}

function myNav(){
    if(list.style.display == "none"){
        list.style.display = "flex";
        bars.style.height = '26px';
        bars.style.transform = 'rotate(45deg)';
        bar3.style.display = 'none';
        bar1.style.height = '100%';
        bar1.style.position = 'relative';
        bar1.style.left = '-1px';
        bar1.style.width = '2px';
        bar2.style.position = 'relative';
        bar2.style.height = '2px';
        bar2.style.bottom = '13px';

    }
    else{
        list.style.display="none";
        bars.style.height = '17px';
        bars.style.transform = 'none';
        bar3.style.display = 'block';
        bar1.style.height = '2px';
        bar1.style.position = 'relative';
        bar1.style.left = '0';
        bar1.style.width = '100%';
        bar2.style.position = 'relative';
        bar2.style.height = '2px';
        bar2.style.bottom = '0';
    }
}