export function FormSubmit(Component) {
    return({label}) => {
        return <Component label={label}/>
    }
}