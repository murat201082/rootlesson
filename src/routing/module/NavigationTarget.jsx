import { useNavigate, useParams } from "react-router-dom"

export default function NavigationTarget(){
const {id } = useParams();
const navigate = useNavigate()
const getParametric = () => {
    if(id){
        return (
            <div>
                <h1 className="bg-warning ">Değiştirgen : {id}</h1>
            </div>
        )
        }
  
}
const goToSource = () =>{
 navigate('/source')
}
    return (
        <div className="bg-primary" >
            <h1 className="bg-danger  ">Hedefe Geldin</h1> <br />
            {getParametric()} <br />
            <button onClick={()=>goToSource()} className="btn btn-secondary mb-4 w-25">Kaynağa Git</button>
        </div>
    )
}