import TaskManagerSidebar from '../../Features/TaskManagementSideBar/Components/Sidebar/TaskManagerSidebar'
import TaskManagementMainContentArea from './TaskManagementMainContentArea'

const TaskManagerDashboard = () => {
    return (
        <>
            <div className="task-management-dashboard h-full flex flex-col lg:flex-row w-screen">
                <TaskManagerSidebar />
                <TaskManagementMainContentArea />
            </div>
        </>
    )
}

export default TaskManagerDashboard;