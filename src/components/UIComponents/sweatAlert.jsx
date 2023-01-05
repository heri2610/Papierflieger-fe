import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const SweatAlert = (title, icon) => {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    title,
    icon,
    confirmButtonText: 'Oke'
  })
}

export default SweatAlert