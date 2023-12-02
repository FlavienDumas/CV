import { useNavigate } from 'react-router-dom'

function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="center divTopBar">
      <button onClick={()=>{navigate("/")}}><h3>Bonjour!</h3></button>
      <button onClick={()=>{navigate("/Projets")}}><h3>Projets</h3></button>
      <button onClick={()=>{navigate("/Divers")}}><h3>Divers</h3></button>
    </div>
  )
  }
  
export default TopBar;