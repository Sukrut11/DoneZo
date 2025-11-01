import SideBarMenuOptions from '../SideBarMenuOptions/SideBarMenuOptions'
import DoneZoSideMenuConfigV1 from '../../../../Config/DoneZoSideMenuConfigV1.json'
import DownloadImageContainer from '../DownloadImage/DownloadImageContainer'

const { logoUrl, height, width, altText } = DoneZoSideMenuConfigV1;

const TaskManagerSidebar = () => {
    return (
        <div className="hidden lg:block sidebar-container bg-[#F7F7F7] px-4 m-1 min-h-screen h-full flex flex-row lg:flex-col justify-between lg:justify-between rounded-[32px] w-full lg:w-auto">
            <div className="sidemenu-logo flex flex-col">
                <div className="logo flex justify-center items-center my-4">
                    <img src={logoUrl} alt={altText} height={height} width={width} />
                </div>
                <SideBarMenuOptions />
            </div>
            <DownloadImageContainer />
        </div>
    )
}

export default TaskManagerSidebar;