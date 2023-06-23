import Swal from "sweetalert2";

const SuccessAlert = (title, text, icon = 'success', timer = 2000) => {
  Swal.fire({
    title: title,
    text: text,
    color: "#000",
    toast: true,
    position: "top-right",
    timer: timer,
    timerProgressBar: true,
    showConfirmButton: false,
    icon: icon,
    background: "#fff",
  });
};

const areYouSureAlert = (context, textBtn='Eliminar') => {
    return Swal.fire({
      title: `Estas Seguro de ${context}?`,
      color:'#444',
      html: '<span class="text-grey-400">No podras reviertir esto</span>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'bg-[#6469ff]',
      cancelButtonColor: '#ee4444',
      confirmButtonText: textBtn,
      background: 'var(--white)',
  })
}

const purchaseAlert = (title)=>{
  return Swal.fire({
    title:title,
    text:'Thanks for your purchase. SignIn again to see your new features ',
    icon:'success',
    confirmButtonText:'Log out'
  })
}

const inputAlert = (title, text, inputType, confirmBtnText) => {
  return Swal.fire({
    title:title,
    text:text,
    input:inputType,
    inputAttributes:{
        autocapitalize: 'off'
    },
    showCancelButton:true,
    confirmButtonText:confirmBtnText,
    showLoaderOnConfirm:true,
    preConfirm:(value) => {
        return value 
    }
  
  })
}

export {SuccessAlert, areYouSureAlert, purchaseAlert, inputAlert};