import { useState, useRef, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import Task from "./Task";
const TaskManager = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    // const [tasks, setTasks] = useState([]);
    
    const [tasks, setTasks] = useLocalStorage("tasks", []);
    
    const [taskID, setTaskID] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current.focus();
    })

    //handlesubmit function 
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((!name && !date) || !name || !date) {
            alert("Please enter task name and date");
        } else if (name && date && isEditing) {
            setTasks(
                tasks.map((task) => {
                    if (task.id === taskID) {
                        return { ...task, name, date, complete: false };
                    }
                    return task;
                })
            );
            setName("");
            setDate("");
            setIsEditing(false);
            setTaskID(null);
        } else {
            const newTask = {
                id: Date.now(),
                name,
                date,
                complete: false,
            };
            setTasks([...tasks, newTask]);
            setName("");
            setDate("");
        }
    };

    const editTask = (id) => {
        const thisTask = tasks.find((task) => task.id === id);
        setIsEditing(true);
        setTaskID(id);
        setName(thisTask.name);
        setDate(thisTask.date);
    }

    const deleteTask = (id) => {
        if (window.confirm("Delete this task") === true) {
            const newTasks = tasks.filter((task) => task.id !== id);
            setTasks(newTasks);
        }
    }

    const completeTask = (id) => {

        setTasks(

            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, complete: true };
                }
                return task;
            })

        )
    }
    return (
        <>
            <div className="bgprimary">
                <h1 className="text-center text-light">Task Manager</h1>
                <div className="flex-center --p">
                    <div className="card bg-light width500 --p flex-center">
                        <form onSubmit={handleSubmit} className="form form-control">
                            <div>
                                <label htmlFor="name">Task:</label>
                                <input type="text" ref={nameInputRef} placeholder="Task Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="date">Date:</label>
                                <input type="date" placeholder="Task name" name="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                            </div>
                            <button className="btn btn-success btn-block">
                                {isEditing?"Edit Task":"Save Task"}
                            </button>
                        </form>
                       
                    </div>
                </div>

                {/*Display Task*/}
                <article className="flex-center">
                    <div className="width500 --p">
                        <h2 className="text-light">Task List</h2>
                        <hr style={{ background: '#fff' }}></hr>
                        <div>
                            {tasks.map((task) => {
                                return (
                                    <>
                                        <Task {...task} editTask={editTask} deleteTask={deleteTask} completeTask={completeTask} />
                                    </>
                                )
                            })}
                        </div>

                    </div>

                </article>
                
        </div>
        </>
    );
}

export default TaskManager;