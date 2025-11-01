import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

interface ActionButton {
    buttonTxt: string;
    buttonIcon: string;
    buttonBgColor: string;
    buttonTxtColor: string;
    buttonIconColor: string;
    borderSize: string;
    borderColor: string;
}

interface ReminderCardProps {
    title: string;
    titleColor: string;
    description: string;
    descriptionColor: string;
    label: string;
    labelColor: string;
    actionButton: ActionButton[];
    bgTheme: string;
    visibility: number;
}

const iconMap = {
    'faVideo': faVideo
};

const ReminderCard = (props: ReminderCardProps) => {

    const getBorderStyle = (borderSize: string, borderColor: string) => {
        return borderSize === 'none' ? 'border-none' : `${borderSize} solid ${borderColor}`;
    }

    return (
        props.visibility === 1 && (
            <div className={`reminder-card ${props.bgTheme} rounded-[27px] p-4 sm:p-6 w-full sm:w-80 h-auto flex flex-col gap-4 min-w-[280px]`}>
                {/* Section Title */}
                <div className="section-title">
                    <h2 className={`${props.titleColor} font-bold text-base sm:text-[18px]`}>
                        {props.title}
                    </h2>
                </div>

                {/* Meeting Info */}
                <div className="meeting-info flex flex-col gap-2">
                    <h3 className={`${props.descriptionColor} font-semibold text-xl sm:text-[26px] leading-tight`}>
                        {props.description}
                    </h3>
                    <p className={`${props.labelColor} text-sm sm:text-[16px] font-normal`}>
                        {props.label}
                    </p>
                </div>

                {/* Action Button */}
                <div className={`action-button-container mt-2 flex ${props.actionButton.length === 1 ? 'justify-center' : 'justify-between'} items-center gap-3 flex-wrap`}>
                    {props.actionButton.map((button, index) => (
                        <button
                            key={`action-button-${index}`}
                            className={`
                    ${button.buttonBgColor} 
                    ${button.buttonTxtColor} 
                    flex flex-row items-center justify-center gap-2
                    ${props.actionButton.length === 1 ? 'w-full' : 'flex-1 min-w-fit'}
                    font-medium text-sm sm:text-[16px] py-3 px-4
                    hover:opacity-90 focus:outline-none
                `}
                            style={{
                                ...{ border: getBorderStyle(button.borderSize, button.borderColor), borderRadius: '36px' }
                            }}
                        >
                            <FontAwesomeIcon
                                icon={iconMap[button.buttonIcon as keyof typeof iconMap]}
                                className={button.buttonIconColor}
                            />
                            {button.buttonTxt}
                        </button>
                    ))}
                </div>
            </div>
        )
    );
};

export default ReminderCard;