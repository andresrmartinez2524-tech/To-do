function EstadosTareas({tareas,status,handleDragOver,handleDrop,handleDragStart,color}) {

    return(
        <>
        <div className="contenedor-tarea"
         //esto hace que se actualice el estado del elemento dentro del div
                onDrop={(e) => handleDrop(e, status)}
            //esto para que permita soltar el elemento dentro del div
                onDragOver={handleDragOver}

        >
            <h2>{status}</h2>

            {tareas.filter((tarea)=>tarea.estado===status).map((tarea)=>(
            <div key={tarea.id} className="tarea"
            draggable //esto es para que se pueda mover el elemento, sin esto no deja arrastrar
            onDragStart={(e) => handleDragStart(e, tarea.id)}
            >
                <h4>Tarea numero: {tarea.id}</h4>
                <h3>{tarea.name}</h3>
                <p style={{borderRadius:"4px", padding: "5px",width:"fit-content", backgroundColor: color, textTransform:"uppercase"}}>{tarea.estado}</p>
            </div>
            ))}
        </div>
        
        
        </>
    )
    
}

export default EstadosTareas