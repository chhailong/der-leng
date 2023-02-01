
import React from "react"; 
import Footer from "../Footer";
function BoKor(){

    return(
        <>
        <div className="container">
            <h2>ឧទ្យានជាតិព្រះមុនីវង្សភ្នំបូកគោ</h2>
            <br />
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://www.khmerplaces.com/storage/posts/May2019/vB9fTQWBo7nYUxP4QW2O.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://www.khmerplaces.com/storage/posts/May2019/r1GNHKeOpEFHEtwMm9en.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://asset.ams.com.kh/central/media/2021/05/photo_2021-05-12_12-47-37-1024x575.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>


                <div className="row">
                    <div className="col-6">
                        <div>
                            <h2>Description</h2></div>
                    
                            <p>  ឧទ្យានជាតិព្រះមុនីវង្សភ្នំបូកគោ ដែលត្រូវបានគេស្គាល់ភាគច្រើនថា ឧទ្យានជាតិបូកគោ ស្ថិតនៅក្នុងស្រុកទឹកឈូ ខេត្តកំពត។ ភ្នំបូកគោមានកម្ពស់ 1075ម៉ែត្រធៀបទៅនឹងនីវ៉ូទឹកសមុទ្រ និងមានចម្ងាយប្រមាណ11គីឡូម៉ែត្រពីក្រុងកំពតទៅកាន់ជើងភ្នំនិងចម្ងាយ32គីឡូម៉ែត្រពីជើងភ្នំដល់កំពូលភ្នំភ្នំបូកគោត្រូវបានរកឃើញនៅឆ្នាំ1917ដោយជនជាតិបារាំងឈ្មោះរូលួសនិងត្រូវបានអភិវឌ្ឍឲ្យទៅជារមណីយដ្ឋានក្នុងឆ្នាំ1921ឧទ្យានជាតិភ្នំបូកគោគឺជាឧទ្យានមួយក្នុងចំណោមឧទ្យានជាតិដ៏ស្រស់ស្អាតរបស់ប្រទេសកម្ពុជា។ ភ្នំបូកគោ ល្បីឈ្មោះដោយសារតែអាកាសធាតុត្រជាក់ពេញមួយឆ្នា ំ ព្រមទាំងមានព្រៃព្រឹក្សាធម្មជាតិដ៏ខៀវស្រងាត់និងស្រស់បំព្រង។</p>
                    
                    </div>
                    
                </div>    
            </div>
            <br />
            <Footer/>

        
        
        </>
    )
}
export default BoKor ;