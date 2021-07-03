function AbrirMenuLateral(){
    document.getElementById('BotonMenu').style.display = 'none';
    document.getElementById('Menu').style.display = 'block';


}

function CerrarMenuLateral(){
    document.getElementById('BotonMenu').style.display = 'block';
    document.getElementById('Menu').style.display = 'none';


}



function main(){
    document.getElementById('BotonMenu').onclick = AbrirMenuLateral;
    document.getElementById('BotonMenuCerrar').onclick = CerrarMenuLateral;
}
window.onload=main;