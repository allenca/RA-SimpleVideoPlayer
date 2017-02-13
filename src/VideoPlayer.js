export default class VideoPlayer{

	constructor(){
        this.player = document.getElementById("video_player");
        this.links = this.player.getElementsByTagName('a'); // stores anchor tags as array
        this.videotarget = "";
        this.fileName = "";
        this.video = null;
        this.source = "";
        this.initLinks(this.links); // this class run initLinks which has the values of the anchors
    }

    initLinks(links){
    	for (let i=0; i<links.length; i++){
    		// this.links[i].onclick = handler; this is the old school way of adding event listener
    		(links[i]).addEventListener("click",this.linkHandler,false)
    		// telling javascript to figure out links first, bedmas
    		// every link will go to the handler, linkHandler
    	}
    }

    linkHandler(e){
    	// e.stopPropagation();
    	e.preventDefault(); //prevents default action, like going to new page
    	this.videotarget = this.getAttribute("href"); // video target is the href of the anchor tag you click on
    	this.fileName = this.videotarget.substr(0, this.videotarget.lastIndexOf('.')) || this.videotarget; 
    	// href substring'd, first value to last instance of the character ( a dot .) IndexOf is the first instance of character
    	//  || means OR, so this can accept any anchor tag value, not just single source but even arrays
    	this.video = document.querySelector("#video_player video"); // querySelector go find something, figure then video tag and then child inside
    	this.video.removeAttribute("controls");
    	this.video.removeAttribute("poster");

    	this.source = document.querySelectorAll("#video_player video source"); // all source tags inside the video tag inside the figure tag
    	this.source[0].src = this.fileName + ".mp4";
    	this.source[1].src = this.fileName + ".webm"; // gets the first value from the array, get that filename.mp4/webm
    	this.video.load();
    	this.video.play();
    }
}