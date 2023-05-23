export const OtherList = ({children}) => {
    /*компонент для отображения любых дополнительных списков с информацией*/
    // eslint-disable-next-line no-undef
    const NewChildren = React.Children.map(children, (child) => {

        return <li>{child}</li>
    })

    return <div>
        <ul>{NewChildren}</ul>
    </div>
}