import DoneZoHeaderConfigV1 from '../../../../Config/DoneZoHeaderConfigV1.json'
const { userProfileInfo } = DoneZoHeaderConfigV1;

const TaskManagementUserProfile = () => {
    return (
        <div className="user-profile-container flex flex-row justify-center items-center gap-2">
            <div className="user-image">
                <img className={`rounded-[${userProfileInfo.userImage.imageRadius}]`} src={userProfileInfo.userImage.userImageUrl} alt={userProfileInfo.userImage.userImageAltText} height={userProfileInfo.userImage.imageHeight} width={userProfileInfo.userImage.imageWidth}/>
            </div>
            <div className="user-details flex flex-col justify-center text-gray-900">
                <div className="user-name font-semibold">
                    <p>{userProfileInfo.userName.nameTxt}</p>
                </div>
                <div className="user-email text-sm text-gray-500">
                    <p>{userProfileInfo.userEmail.emailTxt}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskManagementUserProfile