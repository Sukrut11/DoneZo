import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface StatusInfoItem {
    title: string;
    titleColor: string;
    labelTxt: string;
    labelTxtColor: string;
    labelValue: string;
    labelValueColor: string;
    status: string;
    statusColor: string;
    statusBgColor: string;
    avatarImage: string;
    avatarBgColor: string;
    avatarBorderRadius: string;
    visibility: number;
}

interface HeaderButton {
    buttonTxt: string;
    buttonIcon: string;
    buttonTxtColor: string;
    buttonIconColor: string;
    buttonBgColor: string;
    buttonBorderColor: string;
    buttonBorderSize: string;
}

interface StatusInfoViewProps {
    title: string;
    titleColor: string;
    headerButton: HeaderButton;
    statusInfoItems: StatusInfoItem[];
    bgTheme: string;
    visibility: number;
}

const iconMap = {
    'faPlus': faPlus
};

const StatusInfoView = (props: StatusInfoViewProps) => {

    return (
        props.visibility === 1 && (
            <div
                className={`status-info-view ${props.bgTheme} flex flex-col justify-between rounded-[27px] p-4 sm:px-4 sm: py-3 w-auto max-w-md min-w-[300px] flex-shrink-0 mx-2 sm:mx-2`}            >
                {/* Header Section */}
                <div className="header-section flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-0">
                    <h2 className={`${props.titleColor} font-bold text-base sm:text-[22px]`}>
                        {props.title}
                    </h2>

                    <button
                        className={`${props.headerButton.buttonBgColor} ${props.headerButton.buttonTxtColor} hidden md:flex items-center gap-2 font-medium text-xs sm:text-[14px] px-3 sm:px-4 py-2 !rounded-full w-auto justify-start`}
                        style={{backgroundColor: props.headerButton.buttonBgColor.startsWith("bg-") ? props.headerButton.buttonBgColor : props.headerButton.buttonBgColor}}
                    >
                        {props.headerButton.buttonIcon && (
                            <FontAwesomeIcon
                                icon={iconMap[props.headerButton.buttonIcon as keyof typeof iconMap]}
                                className={props.headerButton.buttonIconColor}
                            />
                        )}
                        {props.headerButton.buttonTxt}
                    </button>
                </div>

                {/* Status Info Items List */}
                <div className="status-info-items-list flex flex-col gap-4">
                    {props.statusInfoItems.map((item, index) => (
                        item.visibility === 1 && (
                            <div
                                key={`status-item-${index}`}
                                className="status-item-row flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-8"
                            >
                                {/* Left Section - Avatar and Info */}
                                <div className="info-info flex flex-row items-center gap-3 flex-1 min-w-0">
                                    {/* Avatar */}
                                    <div
                                        className={`info-avatar ${item.avatarBgColor} flex items-center justify-center overflow-hidden w-10 sm:w-12 h-10 sm:h-12 flex-shrink-0`}
                                        style={{
                                            borderRadius: item.avatarBorderRadius
                                        }}
                                    >
                                        {item.avatarImage ? (
                                            <img
                                                src={item.avatarImage}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-white font-bold text-sm sm:text-[16px]">
                                                {item.title.charAt(0)}
                                            </span>
                                        )}
                                    </div>

                                    {/* Info Details */}
                                    <div className="info-details flex flex-col flex-1 min-w-0">
                                        <h3
                                            className={`${item.titleColor} font-semibold text-sm sm:text-[18px] truncate`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className={`${item.labelTxtColor} text-xs sm:text-[14px] truncate`}
                                        >
                                            {item.labelTxt}{' '}
                                            <span className={`${item.labelValueColor} font-medium`}>
                                                {item.labelValue}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* Right Section - Status */}
                                {item.status && (
                                    <div
                                        className={`info-status ${item.statusBgColor} ${item.statusColor} flex items-center justify-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-[12px] font-medium flex-shrink-0 w-full sm:w-auto text-center`}
                                    >
                                        {item.status}
                                    </div>
                                )}
                            </div>
                        )
                    ))}
                </div>

                <button
                    className={`${props.headerButton.buttonBgColor} ${props.headerButton.buttonTxtColor} flex md:hidden items-center gap-2 font-medium text-xs sm:text-[14px] px-3 sm:px-4 py-2 !rounded-full w-full justify-center mt-4`}
                    style={{backgroundColor: props.headerButton.buttonBgColor.startsWith("bg-") ? props.headerButton.buttonBgColor : props.headerButton.buttonBgColor}}
                >
                    {props.headerButton.buttonIcon && (
                        <FontAwesomeIcon
                            icon={iconMap[props.headerButton.buttonIcon as keyof typeof iconMap]}
                            className={props.headerButton.buttonIconColor}
                        />
                    )}
                    {props.headerButton.buttonTxt}
                </button>
            </div>
        )
    );
};

export default StatusInfoView;