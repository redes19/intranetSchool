import { useState, useEffect } from 'react';
import { getAllUser } from '../../services/User.Services';
import { IUser } from '../../models/user.model';
import './displayUser.scss';

export default function DisplayUser() {
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
      <div className="displayUser">
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
