

function getModal(){
    // document.getElementsByClassName("modal").classList.add('modal-view');
    // $('#modal').addClass('modal-view')
    let modal = document.getElementById('modal').classList.add('modal-view')
    
}

function hideModal(){
    let modal = document.getElementById('modal').classList.remove('modal-view')
}

function getImgModal(){
    document.getElementById('img-modal').classList.add('modal-view')
}

function hideImgModal(){
    document.getElementById('img-modal').classList.remove('modal-view')
}