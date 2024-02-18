const likebtn=document.getElementById("likebtn");
const dislikebtn=document.getElementById("dislikebtn");

const initlike = 34;

const initdislike = 6;

let likecount = initlike;
let dislikecount= initdislike;

likebtn.innerText="👍 "+ likecount;
dislikebtn.innerText= "👎 "+dislikecount;

//did the extra credit here
function handleLike(){
    if(document.cookie.indexOf("voteddislike")> -1){
        dislikecount--;
        dislikebtn.innerText= "👎 "+dislikecount;
        enableDislikebtn();
    }
    likecount++;
    likebtn.innerText="👍 "+ likecount;
    disableLikebtn();
}

//did the extra credit here
function handleDislike(){
    if(document.cookie.indexOf("votedlike")> -1){
       likecount--;
       likebtn.innerText="👍 "+ likecount;
       enableLikebtn();
    }
    dislikecount++;
    dislikebtn.innerText= "👎 "+dislikecount;
    disableDislikebtn();
}

//did the extra credit here
function disableLikebtn(){
    likebtn.disabled = true;
    setCookielike()
}
function disableDislikebtn(){
    dislikebtn.disabled = true;
    setCookiedislike();
}
function enableLikebtn(){
    likebtn.disabled = false;
}
function enableDislikebtn(){
    dislikebtn.disabled = false;
}

//did the extra credit here
function setCookielike(){
    document.cookie = "votedlike=true; Samesite=Strict; Max-Age=60"
}
function setCookiedislike(){
    document.cookie = "voteddislike=true; Samesite=Strict; Max-Age=60"
}

//did the extra credit here
window.onload = function(){
    if(document.cookie.indexOf("votedlike")> -1){
        enableDislikebtn();
        disableLikebtn();
    }
    if(document.cookie.indexOf("voteddislike")> -1){
        disableDislikebtn();
        enableLikebtn();
    }
}