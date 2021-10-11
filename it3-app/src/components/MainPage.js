import React from 'react'
import { Link } from 'react-router-dom'
export const MainPage = () => {
    return (
        <div className="container animate__animated animate__fadeInUp">
            <h6 className="text-center fs-1">A simple renewable energy tracker.</h6>
            <div className="row container mt-4">

                {/* Solar  */}
                <div className="col-md-6">
                    <div className="container mb-2">
                        <div className="card container">
                            <div className="card-body">
                                <h5 className="card-title">Solar energy</h5>
                                <p className="card-text">Track solar energy production</p>
                                <Link className="btn btn-outline-primary" to="/solar">See more.</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Geo */}
                <div className="col-md-6">
                    <div className="container mb-2">
                        <div className="card container">
                            <div className="card-body">
                                <h5 className="card-title">Geothermical</h5>
                                <p className="card-text">Track geothermical energy production</p>
                                <Link className="btn btn-outline-primary" to="/geo">See more.</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* wind */}
                <div className="col-md-6">
                    <div className="container mb-2">
                        <div className="card container">
                            <div className="card-body">
                                <h5 className="card-title">Wind energy</h5>
                                <p className="card-text">Track wind energy production.</p>
                                <Link className="btn btn-outline-primary" to="/wind">See more.</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* hydro */}
                <div className="col-md-6">
                    <div className="container mb-2">
                        <div className="card container">
                            <div className="card-body">
                                <h5 className="card-title">Hydroelectrical.</h5>
                                <p className="card-text">Track hydroelectrical energy production.</p>
                                <Link className="btn btn-outline-primary" to="/hydro">See more.</Link>
                            </div>
                        </div>
                    </div>
                </div>
        
                
            </div>
        </div>
    )
}
