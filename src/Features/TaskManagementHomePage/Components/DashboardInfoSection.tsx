import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface ActionButton {
    buttonIcon: string;
    buttonIconColor: string;
    buttonTxt: string;
    buttonTxtColor: string;
    buttonBgColor: string;
    borderSize: string;
    borderColor: string;
}

interface DashboardInfoSectionProps {
    title: string;
    titleColor: string;
    subtitle: string;
    subtitleColor: string;
    actionButtons: ActionButton[];
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingY?: string;
    flex?: number;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    wrap?: string;
}

const iconMap = {
    'faPlus': faPlus
};

const DashboardInfoSection = (props: DashboardInfoSectionProps) => {

    const containerClasses = [
        'dashboard-info-section',
        props.flex === 1 ? "flex" : "",
        props.flexDirection,
        props.justifyContent,
        props.alignItems,
        props.gap,
        props.marginLeft,
        props.marginRight,
        props.marginTop,
        props.marginBottom,
        props.paddingLeft,
        props.paddingRight,
        props.paddingTop,
        props.paddingBottom,
    ].join(' ');

    const getBorderStyle = (borderSize: string, borderColor: string) => {
        return borderSize === 'none' ? 'border-none' : `${borderSize} solid ${borderColor}`;
    }

    return (
        <div className={`${containerClasses} w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4`}>
            <div className="info-text flex flex-col gap-1">
                <p className={`info-title font-bold font-sans text-2xl sm:text-3xl lg:text-[36px] ${props.titleColor}`}>{props.title}</p>
                <p className="info-subtitle font-normal font-sans text-sm sm:text-base lg:text-[18px] text-[#888888]">{props.subtitle}</p>
            </div>
            <div className="action-buttons gap-2 sm:gap-4 flex flex-col sm:flex-row w-full sm:w-auto lg:w-auto lg:flex-shrink-0">                
                {props.actionButtons.map((button, index) => (
                <button
                    key={`action-button-${index}`}
                    className={`
                ${button.buttonBgColor} 
                ${button.buttonTxtColor} 
                font-bold rounded-full px-4 sm:px-6 py-3 sm:py-4 
                outline-none focus:outline-none hover:outline-none
                appearance-none w-full sm:w-auto text-sm sm:text-base lg:text-[18px]
            `}
                    style={{
                        ...{ border: getBorderStyle(button.borderSize, button.borderColor),
                            backgroundColor: button.buttonBgColor.startsWith("bg-") ? button.buttonBgColor : button.buttonBgColor 
                         }
                    }}
                ><FontAwesomeIcon icon={iconMap[button.buttonIcon as keyof typeof iconMap]} style={{ color: button.buttonIconColor, paddingRight: '8px' }} />
                    {button.buttonTxt}
                </button>
            ))}
            </div>
        </div>
    )
}

export default DashboardInfoSection;