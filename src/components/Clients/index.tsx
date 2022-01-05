import './styles.scss';

export function Clients() {
    const logoImgs = [
        {
            url: require('../../Assets/FacebookLogo.png'),
            alt: 'facebook',
            classList: 'img_logo',
        },
        {
            url: require('../../Assets/DribbbleLogo.png'),
            alt: 'dribbble',
            classList: 'img_logo',
        },
        {
            url: require('../../Assets/YoutubeLogo.png'),
            alt: 'youtube',
            classList: 'img_logo',
        },
        {
            url: require('../../Assets/PinterestLogo.png'),
            alt: 'pinterest',
            classList: 'img_logo inactive_mobile',
        },
        {
            url: require('../../Assets/TwitterLogo.png'),
            alt: 'twitter',
            classList: 'img_logo inactive_mobile',
        },
        {
            url: require('../../Assets/RedditLogo.png'),
            alt: 'reddit',
            classList: 'img_logo inactive_tablet',
        },
        {
            url: require('../../Assets/GoogleLogo.png'),
            alt: 'google',
            classList: 'img_logo inactive_tablet',
        },
        {
            url: require('../../Assets/SlackLogo.png'),
            alt: 'slack',
            classList: 'img_logo inactive_tablet',
        },
    ]

    return(
        <section id="clients">
            <div className="clients_container">
                {logoImgs.map((img, index) => {
                    return(
                        <div className={img.classList} key={index}>
                            <img src={img.url} alt={img.alt} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}