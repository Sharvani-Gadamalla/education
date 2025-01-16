// import React from 'react';
// // import TestimonialCard from './TestimonialCard';
// import './TestimonialsSection.css';

// // Importing different user images
// import user1Image from '../assets/user1.jpg';  // Replace with the actual image paths
// import user2Image from '../assets/user2.jpg';
// import user3Image from '../assets/user3.jpg';
// import user4Image from '../assets/user4.jpg';
// import user5Image from '../assets/user5.jpg';
// import user6Image from '../assets/user6.jpeg';
// import user7Image from '../assets/user7.jpg';


// function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: 'Rohan Sharma',
//       title: 'Software Engineer',
//       text: 'The course here laid a solid foundation for my technical skills. The guidance I received helped me secure my dream job at Google.',
//       rating: 5,
//       image: user1Image,
//     },
//     {
//       name: 'Ananya Verma',
//       title: 'Data Scientist',
//       text: 'The hands-on projects gave me practical experience and confidence to excel in my role.',
//       rating: 4,
//       image: user2Image,
//     },
//     {
//       name: 'Meera Patel',
//       title: 'Product Manager',
//       text: 'The mentorship and resources provided were top-notch. It helped me transition into a new career smoothly.',
//       rating: 5,
//       image: user3Image,
//     },
//     {
//         name: 'Rohan Sharma',
//         title: 'Software Engineer',
//         text: 'The course here laid a solid foundation for my technical skills. The guidance I received helped me secure my dream job at Google.',
//         rating: 5,
//         image: user4Image,
//       },
//       {
//         name: 'Ananya Verma',
//         title: 'Data Scientist',
//         text: 'The hands-on projects gave me practical experience and confidence to excel in my role.',
//         rating: 4,
//         image: user5Image,
//       },
//       {
//         name: 'Meera Patel',
//         title: 'Product Manager',
//         text: 'The mentorship and resources provided were top-notch. It helped me transition into a new career smoothly.',
//         rating: 5,
//         image: user6Image,
//       },
//       {
//         name: 'Meera Patel',
//         title: 'Product Manager',
//         text: 'The mentorship and resources provided were top-notch. It helped me transition into a new career smoothly.',
//         rating: 5,
//         image: user7Image,
//       },
//   ];

//   return (
//     <section className="testimonials-section">
//       <div className="testimonials-heading">
//         <h2>Testimonials</h2>
//         <p>
//           From academic achievements to career advancements, see how we’ve made a difference in the
//           lives of thousands.
//         </p>
//       </div>
//       <div className="testimonials-grid">
//         {testimonials.map((testimonial, index) => (
//           <TestimonialCard key={index} {...testimonial} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default TestimonialsSection;


import React from 'react';
import './TestimonialsSection.css';
import user1Image from '../assets/user1.jpg';
import user2Image from '../assets/user2.jpg';
import user3Image from '../assets/user3.jpg';
import user4Image from '../assets/user4.jpg';
import user5Image from '../assets/user5.jpg';
import user6Image from '../assets/user6.jpeg';
import user7Image from '../assets/user7.jpg';

// Define the TestimonialCard component
function TestimonialCard({ image, name, title, text, rating }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-content">
        <h3>{name}</h3>
        <p className="testimonial-title">{title}</p>
        <p className="testimonial-text">{text}</p>
        <div className="testimonial-rating">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rohan Sharma',
      title: 'Software Engineer',
      text: 'The course here laid a solid foundation for my technical skills. The guidance I received helped me secure my dream job at Google.',
      rating: 5,
      image: user1Image,
    },
    {
      name: 'Abhay Verma',
      title: 'Data Scientist',
      text: 'The hands-on projects gave me practical experience and confidence to excel in my role.',
      rating: 4,
      image: user2Image,
    },
    {
      name: 'Meera Patel',
      title: 'Product Manager',
      text: 'The mentorship and resources provided were top-notch. It helped me transition into a new career smoothly.',
      rating: 5,
      image: user3Image,
    },
    {
      name: 'Rajesh Kumar',
      title: 'UX Designer',
      text: 'The structured curriculum and engaging exercises boosted my design thinking skills significantly.',
      rating: 5,
      image: user4Image,
    },
    {
      name: 'Nisha Kapoor',
      title: 'Marketing Specialist',
      text: 'The course content was up-to-date and helped me stay ahead in my digital marketing career.',
      rating: 4,
      image: user5Image,
    },
    {
      name: 'Vishitha Joshi',
      title: 'Machine Learning Engineer',
      text: 'Practical projects and real-world examples made me ready for my job challenges.',
      rating: 5,
      image: user6Image,
    },
    {
      name: 'Anushka Mishra',
      title: 'Business Analyst',
      text: 'The personalized mentorship and career guidance helped me ace my interviews.',
      rating: 5,
      image: user7Image,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-heading">
        <h2>Testimonials</h2>
        <p>
          From academic achievements to career advancements, see how we’ve made a difference in the
          lives of thousands.
        </p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;

