import React, { Component } from 'react';

import './assets/css/styles.css';

export class VisionMission extends Component {
  render() {
    return (
        <div className="vision-mission">
        <div className="container">
            <div className="row">

                <div className="col-md-6" data-aos="zoom-in-left">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-uppercase text-dark card-title">Our <strong>Vision</strong><i className="fa fa-low-vision"></i></h4>
                            <p className="text-primary card-text"><strong>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</strong></p>
                        </div>
                    </div>
                </div>

                 <div className="col-md-6" data-aos="zoom-in-right">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-uppercase text-dark card-title">Our <strong>Vision</strong><i className="fa fa-low-vision"></i></h4>
                            <p className="text-primary card-text"><strong>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</strong></p>
                        </div>
                    </div>
                </div>


             
            </div>
        </div>
    </div>
    );
  }
}

export default VisionMission;
