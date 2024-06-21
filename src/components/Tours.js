import Card from './Card';
// yaha tour ko pass kiya hai aur cards wale div main map function hai agar bhul gye to map fucntion document dekh kr ao age call back bhi laga hai
function Tours({tours ,removeTour}){
    return(
        <div className='container'>
            <div>
            <h2 className='title'>Plan with Ahmed</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}>
                        
                        {/* pure object ki copy pas ho rahi hai cloning  */}
                        </Card>
                    })
                }
            </div>
        </div>
    );

}
export default Tours;