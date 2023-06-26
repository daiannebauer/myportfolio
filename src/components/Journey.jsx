import React from 'react';
import "../styles/journey.css";

const Journey = () => {
  return (
    <section className="journey_section">
        <h2 className="section__title">My journey</h2>

        <div className="journey__container container">
            <div className="journey__tabs">
                <div className="journey__button button--flex">
                    <i className="uil uil-graduation-cap journey__icon"></i> Education
                </div>

                <div className="journey__button button--flex">
                    <i className="uil uil-briefcase-alt journey__icon"></i> Experience
                </div>
            </div>

            <div className="journey__sections">
                <div className="journey__content">
                    <div className="journey__data">
                        <div>
                            <h3 className="journey__title">Web Design</h3>
                            <span className="journey__subtitle">
                                FICR | Brazil
                            </span>
                            <div className="journey__calendar">
                                <i className="uil uil-calendar-alt"></i> 2017-2020
                            </div>
                        </div>

                        <div>
                            <span className="journey__rounder"></span>
                            <span className="journey__line"></span>
                        </div>
                    </div>

                    <div className="journey__data">
                        <div></div>

                        <div>
                            <span className="journey__rounder"></span>
                            <span className="journey__line"></span>
                        </div>
                        <div>
                            <h3 className="journey__title">Web Developer</h3>
                            <span className="journey__subtitle">
                                Ti.Saúde | Brazil
                            </span>
                            <div className="journey__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018-2021
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="journey__content">
                    <div className="journey__data">
                        <div>
                            <h3 className="journey__title">Web Developer</h3>
                            <span className="journey__subtitle">
                                Ti.Saúde | Brazil
                            </span>
                            <div className="journey__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018-2021
                            </div>
                        </div>

                        <div>
                            <span className="journey__rounder"></span>
                            <span className="journey__line"></span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Journey