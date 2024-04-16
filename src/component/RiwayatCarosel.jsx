import React from 'react'
import Biodata from './Biodata'
import Profile from './Profile'
import RiwayatHidup from './RiwayatHidup'

function RiwayatCarosel() {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <Profile/>
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <Biodata/>
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <RiwayatHidup/>
                </div> 

                </div> 
                <div className="bg-emerald-950 flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a> 
                    <a href="#item2" className="btn btn-xs">2</a> 
                    <a href="#item3" className="btn btn-xs">3</a> 
                </div>
        </div>
    )
}

export default RiwayatCarosel
