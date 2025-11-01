interface ContainerProps {
    key: number;
    flex: string;
    wrap: string;
    bg: string;
    marginHorizontal: string;
    marginVertical: string;
    paddingHorizontal: string;
    paddingVertical: string;
    borderSize: string;
    borderColor: string;
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    return (
        <div className={`container-${props.key} ${props.flex} ${props.wrap} ${props.marginHorizontal} ${props.marginVertical} ${props.paddingHorizontal} ${props.paddingVertical} ${props.borderSize} ${props.borderColor} bg-[${props.bg}] gap-4 items-start`}>
            {props.children}
        </div>
    )
}
export default Container;