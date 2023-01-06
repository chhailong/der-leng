import React from "react";
import background from "../images/background.png" ; 
import logo1 from "../images/logo1.png"; 
 
function Header ( ) {
    return (
        <>
            <div className="image-page">
                <img className="image-img-fluid" src={background} alt="background.." />
            </div>
            <div className="container">
            <div class="row">
                    <div class="col4">
                        <h2>Title Travelling</h2>
                        <br />
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                    </div>
                    <div class="col4">
                    <img src="https://i.picsum.photos/id/15/200/300.jpg?hmac=lozQletmrLG9PGBV1hTM1PnmvHxKEU0lAZWu8F2oL30" class="card-img-top " alt="pic"/>
                
                    </div>
                    <div class="col4">
                    <img src="https://i.picsum.photos/id/15/200/300.jpg?hmac=lozQletmrLG9PGBV1hTM1PnmvHxKEU0lAZWu8F2oL30" class="card-img-top " alt="pic"/>
                
                    </div>
                    <div class="col4">
                    <img src="https://i.picsum.photos/id/15/200/300.jpg?hmac=lozQletmrLG9PGBV1hTM1PnmvHxKEU0lAZWu8F2oL30" class="card-img-top " alt="pic"/>
                    </div>

                </div>
                <div className="tour">
                    <h3>Tour Guide</h3>
                    <br/>
                    <p>Cambodia is a Southeast Asian nation whose landscape spans low-lying plains, the Mekong Delta,
                         mountains and Gulf of Thailand coastline. Phnom Penh, its capital, is home to the art deco Central Market, glittering Royal Palace and the National Museum's historical and archaeological exhibits.
                          In the country's northwest are the ruins of Angkor Wat, a massive stone temple complex built during the Khmer Empire.</p>
                </div>

            </div>



                <div className="container">
                    <div class="card" >
                        <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" class="card-img-top " alt="pic1"/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card" >
                        <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" class="card-img-top " alt="pic2"/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card" >
                        <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" class="card-img-top " alt="pic3"/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card" >
                        <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" class="card-img-top " alt="pic4"/>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
        </>
        
    )

}
export default Header ; 



