import './header.scss';

export default function Header() {
  return (
    <div className='header'>
        <h2>Header</h2>
        <div className="button">
          <ul>
            <button>Dashbord</button>
            <button>Matière</button>
            <button>Notes</button>
            <button>Proffesseur/students</button>
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
