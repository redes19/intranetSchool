import './home.scss';
import SearchBarre from '../../component/searchBarre/SearchBarre';
import { useState, useEffect } from 'react';
import { IUser } from '../../models/user.model';
import { getAllUser } from '../../services/User.Services';

export default function Home() {
  const [User, setUser] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setLoading(true);
        const data = await getAllUser();
        setUser(data);
      } catch (error) {
        console.error('Error in Home:', error);
      } finally {
        setLoading(false);
      }
    }

    getAllUsers();
  }, [])

  return (
    <div className='home'>
      <SearchBarre />
      <h1>Home</h1>
      <div className="choiceUser">
        <button>professeur</button>
        <button>Students</button>
      </div>
      <div className="user">
        {loading ? <p>Loading...</p> : 
          <ul>
            {User.map((user, index) => (
              <li key={index}>
                <p> {user.nom} - {user.prenom} - {user.email} - {user.role} </p>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  )
}
