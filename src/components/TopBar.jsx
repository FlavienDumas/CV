import { useNavigate, useLocation } from 'react-router-dom'

function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className="center divTopBar">
      <button onClick={()=>{navigate("/CV/")}} style={{
        backgroundColor: location.pathname === '/CV/' ? 'rgb(50,50,60)' : null
      }}>
        <h3>Bonjour!</h3>
      </button>
      <button onClick={()=>{navigate("/CV/Projets")}} style={{
        backgroundColor: location.pathname === '/CV/Projets' ? 'rgb(50,50,60)' : null
      }}>
        <h3>Projets</h3>
      </button>
    </div>
  )
  }
  
export default TopBar;