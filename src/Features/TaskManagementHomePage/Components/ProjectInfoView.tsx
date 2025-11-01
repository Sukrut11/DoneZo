import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface ProjectInfoViewProps {
    cardTitle: string;
    cardValue: number;
    cardTextColor: string;
    actionIcon: string;
    bgTheme: string;
    cardVisibility: number;
    statusIndicatorValue: number;
    statusIndicatorIcon: string;
    statusIndicatorText: string;
    statusIndicatorBgColor: string;
    statusIndicatorTextColor: string;
    statusIndicatorVisibility: number;
}

const iconMap = {
    'faArrowUpRightFromSquare': faArrowUpRightFromSquare,
    'faCaretUp': faCaretUp
};

const ProjectInfoView = (props: ProjectInfoViewProps) => {
    return (
        (props.cardVisibility === 1 && <div className={`project-info-view ${props.bgTheme} rounded-[27px] p-4 sm:p-6 w-72 sm:w-80 md:w-82 lg:w-82 h-auto sm:h-44 flex flex-col justify-around mx-auto`}>
            <div className="info-view-title flex flex-row justify-between items-center">
                <p className={`${props.cardTextColor} font-semibold text-base sm:text-[18px]`}>{props.cardTitle}</p>
                <div className="info-view-redirection rounded-full bg-white p-1 w-8 h-8 flex justify-center items-center">
                    {props.actionIcon && <FontAwesomeIcon className="text-black text-[14px]" icon={iconMap[props.actionIcon as keyof typeof iconMap]} />}
                </div>
            </div>
            <div className="info-view-count-value justify-center items-center">
                <p className={`text-4xl sm:text-[52px] ${props.cardTextColor} font-semibold`}>{props.cardValue}</p>
            </div>
            <div className="info-view-status flex flex-row items-center gap-2">
                <div className={`status-count ${props.statusIndicatorBgColor} font-medium ${props.statusIndicatorTextColor} border-1 px-1 rounded-[10px] text-xs sm:text-[14px]`}>
                    <span>{props.statusIndicatorValue}{<FontAwesomeIcon icon={iconMap[props.statusIndicatorIcon as keyof typeof iconMap]} />}</span>
                </div>
                <div className={`status-text text-xs sm:text-[14px] font-normal ${props.statusIndicatorTextColor}`}>
                    <p>{props.statusIndicatorText}</p>
                </div>
            </div>
        </div>)
    )
}

export default ProjectInfoView;