import {useState} from 'react';

function Card({ id, image, info, price, name ,removeTour}) {
    // readmore button's logic
    // uper {} is curly brackets ke ander jo hai wo desturctive function hote hai matlab 
    // jitna use krna hota hai use uper le ate hai baki jo chod daite hai
    
    const [readmore, setReadmore] = useState(false);
    // const hai jisme readmore aur setReadmore pas hai aur ye useState ke equal hai
    const description = readmore ? info: `${info.substring(0, 200)}....`
    // yhaa readmore ka logic hai 

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    // function removeTour(){
    //     setReadmore(!readmore);
    // }
// bass aur sari properties ko set krdiya jinhe data.js se lekr aye hai
    return (
        <div className="card">
            <img src={image} alt='' className="image" />
            <div className="tourinfo">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show less` : `Read more`}
                        
                    </span>
                </div>
            </div>
             
            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;