import React from 'react'
import './cardGroupComponent.css'
export default function cardGrouComponent() {
    return (
        <section id="secondSection" >
        <div class="card-group">
            <div className="card" data-bs-hover-animate="pulse" >
                <div className="card-body text-center">
                    <h1 ><i class="fas fa-university"></i></h1>
                    <p >UNIVERSITIES</p>
                    <p >250</p>
                </div>
            </div>
            <div className="card" data-bs-hover-animate="pulse" >
                <div className="card-body text-center">
                    <h1 ><i className="fas fa-school"></i></h1>
                    <p >SCHOOL</p>
                    <p >250</p>
                </div>
            </div>
            <div className="card" data-bs-hover-animate="pulse" >
                <div className="card-body text-center">
                    <h1><i class="fas fa-user-graduate"></i></h1>
                    <p >UNDERGRADUATES</p>
                    <p >250</p>
                </div>
            </div>
            <div className="card" data-bs-hover-animate="pulse" >
                <div className="card-body text-center">
                    <h1><i className="fas fa-male"></i></h1>
                    <p >STUDENTS</p>
                    <p >250</p>
                </div>
            </div>
        </div>
    </section>
    )
}
