export const NewsForNewsList = ({icon, header, link}) => {
    /*копонент для отображения новости*/
    return(<li><img src={icon}/><a href={link}><h2 >{header}</h2></a></li>)
}