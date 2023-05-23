export const AdsBanner = ({img, link}) => {
/*компонент для рекламмных баннеров*/
    return (<div className={"ads-banner"}>
        <a href={link}><img src={img}/></a>
    </div>)
}