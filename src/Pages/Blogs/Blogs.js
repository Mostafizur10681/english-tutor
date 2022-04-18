import React from 'react';

const Blogs = () => {
    return (
        // All Blogs 
        <div className='container'>
            <h1 className='services-title mt-3 mb-2 '>Blogs </h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <div className=' mt-5 align-items-center shadow-lg p-3 mb-5 about rounded'>

                <div className=' mt-3'>
                    <h3 className='text-warning'>Difference between Authorization and Authentication?</h3>

                    <p >Authentication is the act of confirming a person's identity, whereas authorization is the process of confirming a user's access to specific apps, files, and data. The scenario is similar to that of an airline deciding which passengers are allowed to board.
                        The first stage is to verify a passenger's identity to ensure that they are who they claim they are. After determining a customer's identity, the next stage is to confirm any unique services the passenger has access to, such as flying first-class or entering the VIP lounge.
                        Authentication and authorization serve the same purpose in the digital age. Authentication is a technique for ensuring that people are who they say they are.

                    </p>
                </div>
            </div>
            <div className=' mt-5 align-items-center shadow-lg p-3 mb-5 about rounded' >
                <div className=' mt-3'>
                    <h3 className='text-warning'>  What other services does firebase provide other than authentication?</h3>
                    <p >
                        To authenticate users to your project, Firebase Authentication delivers backend services, easy-to-use SDKs, and ready-to-use UI frameworks.
                        It accepts passwords, phone numbers, and prominent federated identity providers like Google, Facebook, and Twitter, among other methods. Without having to comprehend the complexities of developing your own authentication system,
                        Firebase Authentication makes it easier to get your users signed in. We also some application for authentication like Okta, OneLogin, Auth0, CyberArk Identity etc.
                    </p>
                </div>
            </div>
            <div className=' mt-5 align-items-center shadow-lg p-3 mb-5 about rounded' >
                <div>
                    <h3 className='text-warning'>What other services does firebase provide other than authentication?</h3>
                    <p>There are many services which firebase provides, Most of them is:
                        Cloud Firestore.
                        Cloud Functions.
                        Authentication.
                        Hosting.
                        Cloud Storage.
                        Google Analytics.
                        Predictions.
                        Cloud Messaging.

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;