import './home.scss';
import SearchBarre from '../../component/searchBarre/SearchBarre';
import { useState } from 'react';
import { IStudent } from '../../models/students.model';
import { getAllStudents } from '../../services/Students.Services';

export default function Home() {
  const [student, setStudent] = useState<IStudent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  

  const fetchAllStudents = async() => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAllStudents();
      console.log(data);
      setStudent(data);
    } catch (error) {
      setError("Failed to fetch students. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='home'>
      <SearchBarre />
      <h1>Home</h1>
      <div className="choiceUser">
        <button>professeur</button>
        <button onClick={fetchAllStudents}>Students</button>
      </div>
      <div className="user">
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        { student.length > 0 ? 
        <ul>
          {student.map((student) => {
            return (
              <li key={student.id}>
                <p>{student.name} {student.lastName} - {student.email} - {student.id} </p>
              </li>
            );
          })}
        </ul> :
         <p>No student found</p>}
      </div>
    </div>
  )
}
