function verificaRistorante(){
    var nomeRistTxt = document.getElementById("nome_rist");
    var descRistTxt = document.getElementById("desc_rist");
    var ubRistTxt = document.getElementById("Ub_ristorante");

    var nomeRist = nomeRistTxt.value.trim();
    var desc_Rist = descRistTxt.value.trim();
    var UbRist = ubRistTxt.value.trim();
}

function validateRistorante(nome, descrizione, ubicazione){
    var validationOK = true;
    if(nome == "" || descrizione == "" || ubicazione == ""){
        validationOK = false;
    }else{
        if(descrizione.length < 10){
            validationOK = false;
        }
    }

    if(ubicazione === "---"){
        validationOK = false;
    }
    return validationOK;
}