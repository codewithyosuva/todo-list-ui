import { useState } from "react"

export default function Home() {
    const [task, setTask] = useState("")

    const [taskList, setTaskList] = useState([])

    const handleAddTask = () => {
        setTaskList([...taskList, task])
        setTask("")
    }

    return (
        <>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={task}
                    placeholder="enter your task"
                    className="border border-gray-200 p-1 px-2 rounded-md outline-0"
                    onChange={(e) => setTask(e.target.value)}

                />

                <button
                    type="button"
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 cursor-pointer"
                    onClick={handleAddTask}
                >Add task</button>
            </div>

            <ul>
                {
                    taskList.map((task, index) => {
                        return (
                            <li key={index}>{task}</li>
                        )
                    })
                }
            </ul>

        </>
    )
}
