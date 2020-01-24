import React, { Component } from 'react';


export class AboutUsBanner extends Component {
  render() {
    return (
      
    <div className="highlight-phone">
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="intro">
                    <h1 className="text-white" data-aos="zoom-out-left" data-aos-duration="700" >About DevKICKS</h1>
                    <p className="text-white-50" data-aos="zoom-out-left" data-aos-duration="700">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. Aliqua sed justo ligula.</p>
                    <p className="text-white-50" data-aos="zoom-out-up" data-aos-duration="400">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. Aliqua sed justo ligula.Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque
                        ut laoreet vitae. Aliqua sed justo ligula.<br /></p>
                        <a class="btn btn-dark" role="button" data-aos="zoom-out-up" data-aos-duration="400" href="#">Read More</a>
                   
                </div>
            </div>
            <div className="col-sm-4">
                
            <img class="img-fluid" data-aos="zoom-in-up" data-aos-duration="850" src="assets/img/service-6-1.png"  title="London Stock Change Group by LSEG Technologies" />
               
            </div>
        </div>
    </div>
</div>
    
    );
  }
}

export default AboutUsBanner;