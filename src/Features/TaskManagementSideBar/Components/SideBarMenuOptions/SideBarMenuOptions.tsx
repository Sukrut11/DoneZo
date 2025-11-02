import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DoneZoSideMenuConfigV1 from '../../../../Config/DoneZoSideMenuConfigV1.json'
import {
    faTableColumns,
    faTasks,
    faCalendarDays,
    faChartLine,
    faUsers,
    faCog,
    faQuestionCircle,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
const { menuSections } = DoneZoSideMenuConfigV1;

// Icon mapping object
const iconMap = {
    'fa-solid faTableColumns': faTableColumns,
    'fa-solid faTasks': faTasks,
    'fa-solid faCalendarDays': faCalendarDays,
    'fa-solid faChartLine': faChartLine,
    'fa-solid faUsers': faUsers,
    'fa-solid faCog': faCog,
    'fa-solid faQuestionCircle': faQuestionCircle,
    'fa-solid faSignOutAlt': faSignOutAlt
};

const SideBarMenuOptions = () => {
    return (
        menuSections.map((section, sectionIndex) => (
            <div key={`section-${sectionIndex}`} className="my-9">
                <div className="section-title text-[#333333] font-semibold text-[14px]">
                    {section.sectionTitle}
                </div>
                {section.sectionOptions.map((option, optionIndex) => (
                    <div key={`option-${sectionIndex}-${optionIndex}`} className="my-4 justify-between" style={{ display: option.visibility === 1 ? "flex" : "none" }}>
                        <div className="option-icon-title flex flex-row gap-3 items-center">
                            <div className="option-icon text-gray-600 flex justify-center items-center">
                                <FontAwesomeIcon icon={iconMap[option.icon as keyof typeof iconMap]} style={{ fontSize: '15px' }}/>
                            </div>
                            <div className="option-text flex flex-col text-[20px] text-gray-600">
                                <div className="option-title">
                                    {option.optionTitle}
                                </div>
                                <div className="option-subtitle">
                                    {option.optionSubtTitle}
                                </div>
                            </div>
                        </div>
                        <div className="option-tag bg-green-800 text-white font-semibold rounded-full px-2 justify-center items-center" style={{ display: option.optionTag !== "" && option.optionTag ? "flex" : "none" }}>
                            {option.optionTag}
                        </div>
                    </div>
                ))}
            </div>
        ))
    )
}

export default SideBarMenuOptions;