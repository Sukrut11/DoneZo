import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TaskManagementSearchBar = () => {
    return (
        <div className="task-management-search-bar w-screen max-w-md">
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Search tasks" 
                    className="w-full bg-white border border-gray-200 rounded-[27px] px-4 py-3 pl-10 pr-4 text-gray-700 placeholder-gray-700 focus:outline-none focus:none focus:border-transparent transition-all duration-200"
                />
                
                <div className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2">
                    <FontAwesomeIcon 
                        icon={faSearch} 
                        className="text-gray-400 text-sm"
                    />
                </div>

                <div className="mac-command-icon absolute right-7 top-1/2 transform -translate-y-1/2 flex flex-row justify-center items-center gap-[1px] bg-gray-200 rounded-[7px] px-3">
                    <span className="fontsize-[24px]">⌘</span>
                    <p>F</p>
                </div>
            </div>
        </div>
    )
}

export default TaskManagementSearchBar;