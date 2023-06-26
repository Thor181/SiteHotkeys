

document.addEventListener('keydown', (e) => {
    var isDrx = document.getElementsByClassName('current-user-info__photo').length > 0;
    if (isDrx){
        console.log(e.key);
        if (e.key == "Escape"){
            document.getElementById('go-back').click();
        }

        if (e.key == "F6") {
            document.querySelector('.ribbon-item [Title="Открытие карточки записи"]').click();
        }
    }
})