const insecureProtocolString = 'http:';
const secureProtocolString = 'https:';
const pr_redirect = (insecureToSecure = true) =>{
    if(insecureToSecure){
        location.protocol = secureProtocolString;
    }
    else{
        location.protocol = insecureProtocolString;
    }
};
const pr_execute = ()=>{
    if(typeof Swal!='undefined'){
        if(location.protocol == insecureProtocolString){
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 7500,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                icon : 'warning',
                title : `Estás navegando a través del protocolo ${insecureProtocolString}(inseguro). ¿Deseas ir a ${secureProtocolString}(seguro)?`,
                html : '<button class="btn btn-ocean" onclick="pr_redirect()">Sip</button>'
            });
        }
    }
}
document.addEventListener('DOMContentLoaded',pr_execute);