import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [tabledata, settabledata] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      settabledata(response.data)
    })
  }, [])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
