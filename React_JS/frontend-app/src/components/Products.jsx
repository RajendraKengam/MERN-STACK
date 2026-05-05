import ProductCard from "./ProductCard";
import "./ProductStyle.css";

const Products=()=>{

    let products=[{
        name:"ASUS Vivobook 15",
        price:"49,400",
        description:"13th Gen, Intel Core i3-1315U, 16GB RAM, 512GB SSD, FHD, Anti-Glare, 15.6, 39.6 cm, Windows 11 Home, M365 Basic(1yr)* Office24, Cool Silver, 1.70 kg, X1504VA-BQ341WS, Laptop",
        rating:4.3,
        imgSrc:"https://m.media-amazon.com/images/I/71bIUPAleZL._SX679_.jpg"
    },
    {
        name:"Realme NARZO 80 Pro 5G",
        price:"19,999",
        description:"(Speed Silver,8GB+128GB) | Segment's 1st MediaTek Dimensity 7400 Chipset | 6000mAh Titan Battery + 80W Ultra Charge | 4500nits HyperGlow Esports Display | IP69 Waterproof",
        rating:4.3,
        imgSrc:"https://m.media-amazon.com/images/I/71QnMG2gedL._SX679_.jpg"
    },
    {
        name:"Philips TV",
        price:"29,999",
        description:"127 cm (50 inches) 8100 Series 4K Ultra HD Smart QLED Google TV 50PQT8100/94",
        rating:4.2,
        imgSrc:"https://m.media-amazon.com/images/I/81tTtV4a0SL._SX522_.jpg"
    },
    {
        name:"OnePlus Pad Go 2",
        price:"27,999",
        description:"30.73 cm (12.1 inch) 2.8K Display, Dolby Vision™, 120Hz Refresh Rate, Quad Speakers, AI, 10050 mAh Battery, Wi-Fi Tablet, 8GB RAM 128 GB Storage, Shadow Black",
        rating:4.1,
        imgSrc:"https://m.media-amazon.com/images/I/61HTBi5HNQL._SX522_.jpg"
    }
    ];
    return(
        <div id="main-container">
            {products.map((product, index)=>(
                <ProductCard key={index} details={product}/>
            ))}
        </div>
    );
};
export default Products;