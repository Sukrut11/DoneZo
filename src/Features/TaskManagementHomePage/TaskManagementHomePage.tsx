import ProjectInfoView from "./Components/ProjectInfoView";
import Container from "../../Config/GlobalComponents/Container";
import DashboardInfoSection from "./Components/DashboardInfoSection";
import ReminderCard from "./Components/ReminderCard";
import StatusInfoView from "./Components/StatusInfoView";

import DoneZoHomePageConfigV1 from "../../Config/DoneZoHomePageConfigV1.json";
const { DoneZoHomePageConfig } = DoneZoHomePageConfigV1;

const TaskManagementHomePage = () => {
    const renderDashboardContent = (viewIdentifier: string, configData: any) => {
        switch (viewIdentifier) {
            case "container":
                return <Container
                    key={configData.id}
                    flex={configData.flex}
                    wrap={configData.wrap}
                    bg={configData.bg}
                    marginHorizontal={configData.marginHorizontal}
                    marginVertical={configData.marginVertical}
                    paddingHorizontal={configData.paddingHorizontal}
                    paddingVertical={configData.paddingVertical}
                    borderSize={configData.borderSize}
                    borderColor={configData.borderColor}
                    children={configData.children.map((child: any, _: number) => {
                        const childKey = Object.keys(child)[0];
                        const childConfig = child[childKey];
                        return renderDashboardContent(childConfig.viewIdentifier, childConfig);
                    })}
                />;

            case 'dashboardInfoSection':
                return <DashboardInfoSection
                    key={configData.id}
                    marginLeft={configData.marginLeft}
                    marginRight={configData.marginRight}
                    marginTop={configData.marginTop}
                    marginBottom={configData.marginBottom}
                    paddingLeft={configData.paddingLeft}
                    paddingRight={configData.paddingRight}
                    paddingTop={configData.paddingTop}
                    paddingBottom={configData.paddingBottom}
                    flex={configData.flex}
                    flexDirection={configData.flexDirection}
                    justifyContent={configData.justifyContent}
                    alignItems={configData.alignItems}
                    gap={configData.gap}
                    title={configData.title}
                    titleColor={configData.titleColor}
                    subtitle={configData.subtitle}
                    subtitleColor={configData.subtitleColor}
                    actionButtons={configData.actionButtons}
                />;

            case 'ProjectInfoView':
                return (
                    <div key={configData.id} className="project-info-cards-section flex flex-col sm:flex-row gap-4 flex-wrap items-center justify-center">                        {configData.projectInfoCards.map((infoCard: any, infoCardIndex: number) => (
                        <ProjectInfoView
                            key={`info-card-${infoCardIndex}`}
                            cardTitle={infoCard.cardTitle}
                            cardValue={infoCard.cardValue}
                            cardTextColor={infoCard.cardTextColor || "black"}
                            actionIcon={infoCard.actionIcon}
                            bgTheme={infoCard.bgTheme || 'white'}
                            cardVisibility={infoCard.visibility || 0}
                            statusIndicatorValue={infoCard.cardStatusIndicators.statusIndicatorValue}
                            statusIndicatorIcon={infoCard.cardStatusIndicators.statusIndicatorIcon}
                            statusIndicatorText={infoCard.cardStatusIndicators.statusIndicatorText}
                            statusIndicatorVisibility={infoCard.cardStatusIndicators.visibility || 0}
                            statusIndicatorBgColor={infoCard.cardStatusIndicators.statusIndicatorBgColor || 'none'}
                            statusIndicatorTextColor={infoCard.cardStatusIndicators.statusIndicatorTextColor || 'black'}
                        />
                    ))}
                    </div>
                );

            case 'ReminderCard':
                return <ReminderCard
                    key={configData.id}
                    title={configData.title}
                    titleColor={configData.titleColor}
                    description={configData.description}
                    descriptionColor={configData.descriptionColor}
                    label={configData.label}
                    labelColor={configData.labelColor}
                    actionButton={configData.actionButton}
                    bgTheme={configData.bgTheme}
                    visibility={configData.visibility}
                />;

            case 'StatusInfoView':
                return <StatusInfoView
                    key={configData.id}
                    title={configData.title}
                    titleColor={configData.titleColor}
                    headerButton={configData.headerButton}
                    statusInfoItems={configData.statusInfoItems}
                    bgTheme={configData.bgTheme}
                    visibility={configData.visibility}
                />;

            default:
                return <div></div>;
        }
    }

    // Create array of config sections with their identifiers
    const configSections = DoneZoHomePageConfig.map((configData: any) => {
        // Extract the key and config data from each wrapper object
        const sectionKey = Object.keys(configData)[0];
        const sectionData = configData[sectionKey];

        return {
            viewIdentifier: sectionData.viewIdentifier,
            data: sectionData,
            order: sectionData.order
        };
    }).sort((a: any, b: any) => a.order - b.order);

    return (
        <div className="task-management-home-page bg-[#F7F7F7] rounded-[27px] px-4 sm:px-6 py-4 m-1 flex flex-col gap-4 sm:gap-6">
            {configSections.map((section, _) =>
                renderDashboardContent(section.viewIdentifier, section.data)
            )}
        </div>
    )
}

export default TaskManagementHomePage;