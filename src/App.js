/**
 * Created by Edward_J_Apostol on 2017-02-07.
 */

import VideoPlayer from "./VideoPlayer";

export default class App{

    constructor(){
        console.log("instance of App is created");
        this.videoplayer = new VideoPlayer();
    }
}