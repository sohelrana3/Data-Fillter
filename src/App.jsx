import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { Collapse } from 'react-collapse'
import {data} from './Data'


function App() {
  let [open, setopen] = useState(data)
  let serchhandle = (e)=>{
    let search = (e.target.value.toLocaleLowerCase())
    let updata = data.filter(item => item.first_name.toLocaleLowerCase().includes(search))
    setopen(updata)
  } 
  console.log(open);


  return (
    <div className='container mx-auto'>
      <h2 className='text-center mt-4 mb-4 text-xl font-bold'>Contract Keeper</h2>
      <form>
          <input onChange={serchhandle} className='w-full py-4 px-4 border border-[#bebebedd] mb-4' type="text" placeholder='Search Contract' />
      </form>
      <table>
        <thead>
          <tr>
            <td>Frist_name</td>
            <td>Last_name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {open.map((item=>(
           
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.Phone}</td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  
  )
}

export default App
