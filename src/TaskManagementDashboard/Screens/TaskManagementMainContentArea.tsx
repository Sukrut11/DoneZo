import TaskManagementHeader from "../../Features/TaskManagementHeader/TaskManagementHeader";
import TaskManagementHomePage from "../../Features/TaskManagementHomePage/TaskManagementHomePage";

const TaskManagementMainContentArea = () => {
    return (
        <div className="task-management-main-content-area w-full lg:w-screen">
            <TaskManagementHeader />
            <TaskManagementHomePage />
        </div>
    )
}

export default TaskManagementMainContentArea;