import AcceptTask from "./AcceptTask"
import CompletedTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
    return (
        <div id="tasklist" className="h-[55%] w-full mt-10 py-5 flex items-center justify-start gap-5 overflow-x-auto">
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={data} />
                }
                if (elem.completed) {
                    return <CompletedTask key={idx} data={data} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={data} />
                }
            })}
        </div>
    )
}

export default TaskList

// 1.bg-blue-900 2.bg-blue-700 3.bg-orange-900 4.bg-emerald-900 5.bg-rose-900 6.bg-violet-900