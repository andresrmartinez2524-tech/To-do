import { useState } from 'react'
import './App.css'
import EstadosTareas from './components/EstadosTareas'


function App() {

  const [tareas, setTareas] = useState([])

  const [nuevaTarea, setNuevaTarea] = useState("")


  const registrarTarea = () => {

    if (nuevaTarea.trim() === "") {
      alert("Escribe una tarea")
      return

    } setTareas([...tareas, {
      id: tareas.length + 1,
      name: nuevaTarea,
      estado: "Activo",

    }])
    setNuevaTarea("")

  }

  //guarda el id
  const handleDragStart = (e, id) => { e.dataTransfer.setData("id", id) }

  //permiso para que el navegador deje soltar el elemento
  const handleDragOver = (e) => { e.preventDefault() }

  //cuando el usuairo suelte el elemento, se actualice el estado 
  const handleDrop = (e, newStatus) => {
    const id = e.dataTransfer.getData("id")
    setTareas(tareas.map(tarea => tarea.id === Number(id) ? { ...tarea, estado: newStatus } : tarea))
  }


  return (
    <>

      <div className="contenedor-input">
        <h1>TAREAS</h1>
        <input
        placeholder="Escribe una tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          type="text" />
          
        <button className="btn" onClick={() => registrarTarea()} type="button">ENVIAR</button>
      </div>
      <div >
        <div className='contenedor-estados'>

          <EstadosTareas tareas={tareas} status={"Activo"} color={'#5ab54a'}
            handleDrop={handleDrop}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
         
          >
          </EstadosTareas>

          <EstadosTareas tareas={tareas} status={"Curso"} color={'#fe9115'}
            handleDrop={handleDrop}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            
          >
          </EstadosTareas>

          <EstadosTareas tareas={tareas} status={"Finalizado"}  color={'#e34935'}
            handleDrop={handleDrop}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
          >
          </EstadosTareas>
        </div>
      </div>


    </>

  )

}

export default App
