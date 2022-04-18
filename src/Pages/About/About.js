import React from 'react';
import './About.css'
import sourav from '../../../src/images/sourav.png'
const About = () => {
    return (
        // About Page
        <div className='container'>
            <h1 className='services-title mt-3 mb-2 '>About </h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <div className='row my-5 align-items-center shadow-lg p-3 mb-5 about rounded'>
                <h2 className='about-me-title text-center'>About Me</h2>
                <div className='col-lg-4 col-12'>
                    <img className='img-fluid rounded-circle' src={sourav} alt="" />
                </div>
                <div className='col-lg-8 col-12'>
                    <h3 className='text-warning'> Md.Mostafizur Rahman</h3>
                    <p > I'm a very good learner. I want to learn every day to grow up my skills.
                        I'm also a hard worker and dedicated person.
                        I have completed my graduation from Daffodil International University in Computer Science and Engineering.
                        I'm expert in some programming language like JavaScript, React JS, Phython. I also expert in some framework like
                        Bootstrap, Tailwind.
                    </p>
                </div>
            </div>

            <div className='row mt-5 align-items-center shadow-lg p-3 mb-5 about rounded'>
                <h2 className='about-me-title text-center my-3'>Goal</h2>
                <div className='col-lg-6 col-12 mt-3'>
                    <h3 className='text-warning'>About My Goal</h3>

                    <p >Every person have a goal. To achive this goal they can do their best.
                        I'm have a goal. I want to be a full-stack developer. In future i want to
                        build my carrier in web development. I want to build a company like IT sector.

                    </p>
                </div>
                <div className='col-lg-6 col-12 mt-3'>

                    <h3 className='text-warning'>How I work hard?</h3>
                    <p >
                        I am a hardworker and dedicated person. To achieve my goal I'm doing my best.
                        If I can't success, I'm learn somethings from failier. Then I'm trying again and
                        again to achieve my goal.Finally I can say I am harder worker and dediacted person
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;