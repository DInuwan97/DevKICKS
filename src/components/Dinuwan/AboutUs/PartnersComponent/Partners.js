import React, { Component } from 'react';

export class Partners extends Component {
  render() {
    return (
        <div className="photo-gallery">
        <div className="container">

            <div className="intro">
                <h2 className="text-center" data-aos="zoom-out-down">OUR PARTNERS</h2>
            </div>

            <div className="row photos" data-aos="zoom-out-up">

                <div className="col-sm-6 col-md-4 col-lg-3 item" data-aos="fade">
        
                        <img id="imgLSEG"className="img-fluid" data-toggle="tooltip" data-bs-tooltip="" src="assets/img/LSEG_LOGO.png"  title="London Stock Exchange Group by LSEG Technologies"/>
                   
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3 item">
         
                        <img id="Microsoft" className="img-fluid" data-toggle="tooltip" data-bs-tooltip="" src="assets/img/ms_logo.png" title="Microsoft Sri Lanka"/>
                    
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3 item">
                 
                        <img id="SLIIT" className="img-fluid" data-toggle="tooltip" data-bs-tooltip="" src="assets/img/SLIIT_Logo_Crest.png" title="Sri Lanka Institute of Information Technology"/>
                    
                </div>
            
                <div className="col-sm-6 col-md-4 col-lg-3 item">
                    
                        <img id="IFS"className="img-fluid" data-toggle="tooltip" data-bs-tooltip="" src="assets/img/Ifs_logo.png" title="IFS &amp; RD International"/>
                    
                </div>
    </div>
    </div>
    </div>
    );
  }
}

export default Partners;
