export const NewsList = ({news}) => {
    /*копонент для отображения списка новостей*/
    return <ul className={"news-list"}>{news.map((element) => {return element})}</ul>
}