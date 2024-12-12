import './home.scss';
import SearchBarre from '../../component/searchBarre/SearchBarre';

export default function Home() {
  return (
    <div className='home'>
      <SearchBarre />
      <h1>Home</h1>
      <div className="choiceUser">
        <button>professeur</button>
        <button>Students</button>
      </div>
      <div className="user"></div>
    </div>
  )
}
