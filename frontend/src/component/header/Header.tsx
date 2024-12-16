import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
        <h2>Header</h2>
        <div className="button">
          <ul>
            <li><Link to='/Dashbord'>Dashbord</Link></li>
            <li><Link to='/Matière'>Matière</Link></li>
            <li><Link to='/Notes'>Notes</Link></li>
            <li><Link to='/displayUser'>Proffesseur/students</Link></li>
          </ul>
        </div>
        <div className="params">
          <ul>
            <button>Settings</button>
            <button>Exit</button>
          </ul>
        </div>
    </div>
  )
}
