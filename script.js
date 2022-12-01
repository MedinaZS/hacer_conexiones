console.log("page loaded...")

/** Edit profile */
document.querySelector("#edit-profile").addEventListener("click", changeUsername)

function changeUsername(){
    document.querySelector("#my-username").innerHTML = "Montse Medina";
}

/** Connection Request and Your connections */

let yourConnections = document.querySelector(".your-connections .notification");
let connRequest = document.querySelector(".connection-requests .notification");


function acceptRequest(index){
    /* Remover el request */
    removeRequest(index);
    /** Aumentar las conexiones */
    yourConnections.innerHTML = parseInt(yourConnections.innerHTML)+1;
    /** Disminuir los request */
    connRequest.innerHTML = parseInt(connRequest.innerHTML)-1;
}


function closeRequest(index){
    /* Remover el request */
    removeRequest(index);
    /** Disminuir los request */
    connRequest.innerHTML = parseInt(connRequest.innerHTML)-1;
}

function removeRequest(index){
    /* Remover el request */
    document.querySelector(".request-" + index).remove();
}

