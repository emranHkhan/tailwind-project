import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ImageCard = ({ image, index }) => {
    const tags = image.tags.split(',');
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-5 bg-white" data-aos="fade-up" data-aos-easing="ease-in-out">
            <div className="h-52">
                <img src={image.webformatURL} alt="" className="w-full object-cover h-full" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">Photo</div>

                <ul>
                    <li>
                        <strong>Views: </strong>{image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>{image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>{image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {
                    tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
                    ))
                }

            </div>
        </div>
    );
};

export default ImageCard;