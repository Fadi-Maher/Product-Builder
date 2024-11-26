interface Iprops {
    ImageUrl: string;
    alt: string ; 
    className : string
}

const Image = ({ ImageUrl, alt , className}: Iprops) => {
    return (
        <img src={ImageUrl} alt={alt} className={className} />
    )
}

export default Image
