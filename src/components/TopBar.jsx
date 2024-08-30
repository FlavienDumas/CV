import { useNavigate, useLocation } from 'react-router-dom'

function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className="center divTopBar">
      <button onClick={()=>{navigate("/")}} style={{
        backgroundColor: location.pathname === '/' ? 'rgb(50,50,60)' : null
      }}>
        <h3>Bonjour!</h3>
      </button>
      <button onClick={()=>{navigate("/Projets")}} style={{
        backgroundColor: location.pathname === '/Projets' ? 'rgb(50,50,60)' : null
      }}>
        <h3>Projets</h3>
      </button>
    </div>
  )
  }
  
export default TopBar;