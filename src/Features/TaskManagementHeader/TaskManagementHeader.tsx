import TaskManagementSearchBar from './Components/Search/TaskManagementSearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons'
import DoneZoHeaderConfigV1 from '../../Config/DoneZoHeaderConfigV1.json'
const { socialMediaIcons } = DoneZoHeaderConfigV1;
import TaskManagementUserProfile from './Components/UserProfileInfo/TaskManagementUserProfile';

const iconMap = {
    'faEnvelope': faEnvelope,
    'faBell': faBell
};

const TaskManagementHeader = () => {
    return (
        <div className="task-management-header bg-[#F7F7F7] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 m-1 rounded-[27px] gap-4 sm:gap-0">
            <TaskManagementSearchBar />
            <div className="user-profile-container flex flex-row gap-3 sm:gap-6 mr-0 sm:mr-7">
                {socialMediaIcons.map((icon, index) => (
                    <div key={`icon-${index}`}>
                        <div className="social-media-icons flex flex-row gap-3" style={{ display: icon.visibility === 1 ? 'flex' : 'none' }}>
                            <div className="envelope-icon bg-white rounded-[27px] px-3 sm:px-4 py-3 sm:py-4 flex justify-center items-center cursor-pointer">
                                <FontAwesomeIcon icon={iconMap[icon.iconName as keyof typeof iconMap]} color={icon.iconColor} fontSize={icon.iconSize} />
                            </div>
                        </div>
                    </div>
                ))}
                <TaskManagementUserProfile />
            </div>
        </div>
    )
}

export default TaskManagementHeader;