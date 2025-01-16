// import React from 'react';
// import './Courses.css';

// function App() {
//   const courses = [
//     {
//       title: 'Engineering & Technology',
//       description:
//         'This field focuses on applying scientific principles to design, build, and innovate solutions for real-world challenges. With diverse branches like Computer Science, Mechanical, Civil, and Electronics, it equips students with technical expertise and infrastructure.',
//       image: 'https://s3-alpha-sig.figma.com/img/d915/2b44/e749458d144057b9a79249c8888fc669?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fj5YxWuLpdqDxXvxMXHnLiy6O1qaAVoN1vjLswAYGYK6rsmt7zf06Xz0OX1trwoYQBN4tW5Ea9u-NtlFGTnBG5V~qh5JPmcTE9adkflO52qbKDakySV2It1hv~sHACSUguDpG25jsZXLnTogouc5o0csmAgoYeD8q3oaTH2v4I75azdTvSwrzaJCvBUioP~yv9TTUcmrUXNrBhYFMl7JbYlAeHh7RfZHGkizsAeEFJnkMgZE67kUpP9~dwhPdPKmftQDH-ZxaHL1~g0QNv2GGCZJBFFDRpoWnxk0hqE~Y326O7SqRK8Lz39m8KXF58Od7KxUjk4ckJy2ZOlDjyuhYQ__',
//     },
//     {
//       title: 'Business & Management',
//       description:
//         'This field empowers students with the knowledge and skills to lead organizations, manage resources, and drive innovation in competitive markets. Covering core areas like Finance, Marketing, Human Resources, and Entrepreneurship.',
//       image: 'https://s3-alpha-sig.figma.com/img/3889/29e6/a2703d82811b65466cf7900b00af64ab?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xdyk-tKNZQ8I8PRB-bG9-okOKTCMieNCpxfDAV8V1Dj~-VpTgMfR0SmcWnZwrYJI5jjKqKh3IBCxOXlze8m~DCW~S3gzRRbc3V0bGK1L8Cwtfdfhu1x8XU0wBC0Qh8RlNU~FUtl5fz5HnqiKuJDjwF8VY1ayStLH2TFBJDXbO7dspvkjBkeUae53SoWWjJQ4YD-sN9GY9YnO0gexuK-2wRVw08iVm1erKXV50vdEWdWroOSDcLemA3cG7WgsAXN3teeoX85C0oirIWdydfnVA0M9aBuR3OcUm4KStLuKeX4HQWDhTse9pDm1rLby21QyxFbF-7gSQhMaKjeeft1xsw__',
//     },
//     {
//       title: 'Arts & Humanities',
//       description:
//         'The Arts & Humanities are fields of study that focus on human culture, expression, and thought. They explore how people understand, interpret, and represent the human experience. These disciplines encourage creativity, critical thinking, and an appreciation for cultural diversity.',
//       image: 'https://s3-alpha-sig.figma.com/img/674f/909b/7717ef1464bbf744d2114c00f84893f9?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h7gHQPoagjKTuNOj-9Z-tMDGox9d~BpenxQtsCE07BJYRt~ovgIDvk2j-gX3icnlySUyLrIph3dVNF76LffM~R~U6w2yzLC5oTVTZkMHCmOWznTcRHRB8i85UFANH5wHpYtm5dKdIf7c8BfHxO9yZHQ7QERzyZs3S9TjUhnCtgIcBkf~~LoY3QULHPgLSXeWjP9G5JJGpJHio-cItas7IcGNKtpgcMCM~VLwxSeu9IOjWNWuXIx5s8vXw6HQCckU9Q73GM54nVeMJOldHi-gQ1XsfIEeDDsjKG9p1d1i6OHZKEm3FcpNcGUuSNhriHp7HzpXFGiJ7iWDyPHvYWGzgQ__',
//     },
//     {
//       title: 'Medical & Health Sciences',
//       description:
//         'Medical and Health Sciences are fields that focus on understanding the human body, preventing diseases, and improving healthcare. These disciplines combine scientific knowledge, technology, and clinical practice to promote health and well-being.',
//       image: 'https://s3-alpha-sig.figma.com/img/8b5a/a59c/4829bbcf96486bee6955403a75ecef42?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZfMFx4ZBwFdkeUfp8ir8dZH2O9ayaNVY3heIYZhao2DiVEzHYzJRM0ArkFYskxTePBGH7Dd2R6oC035rN~y3Ysc1vgHvqj3XS~cNVHT4WQq7KqLhfmZwNreTzNOMvuwYWL9GqCfXEXnjd6odSGhhfCfAM2tubzKTCMp7OR0hOfZ~PRoLaq76AzlMOeMZtCQu1jAwy92XK1CWhxmQFp0BhRX5uWwYjb9nBpOkhFbrN2S0aXtE3deOD379q61DglVKAU1cUx5O1kuMb~Cpp-PTulYy5v8JC8a5dyjZbn7h5KE9eg31ALfJJNxpjbWnXQ9QhAaGIIb9O2Uo99iq4PXniQ__',
//     },
//     {
//       title: 'Law',
//       description:
//         'Law is a system of rules created and enforced by governments or social institutions to regulate behavior and ensure justice, equality, and order in society. It provides guidelines for resolving disputes, protecting rights, and maintaining societal harmony.',
//       image: 'https://s3-alpha-sig.figma.com/img/cc74/150a/c14cff28a999122e379263ffc2085131?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qax52dKqJ7NMJJkim7KQ5ckmwRPej4JvmNHmbkBkcsHOY0zR6aylWHYJRyBkO4KMxZK1zg1RnfFaNmapN6HNHBTDOYtrF1Vj4mgqvAwmgwuha7LBAEAcouXq4n5BZSIWc-hJFxV7Z453zr~XRhORCnmQ5uANeJAlE4K~-fanYuHplrvfwM0kJQvdCtFiTM2NyOqerRnb7E9Kj8hv~f~kynr1QEkpBqRPcnqWT~~2bik13hp0EVHTe85Xwn3rBKZgCmeq3SiCD8UxpcPDIJWqJ~fBHBhh8PJN3QQoJ9zKZVqBznoKhc4kVDt23rB1ZJtqTpX3QFSRO0qS1kaY2bRmxg__',
//     },
//     {
//       title: 'Computer & IT Courses',
//       description:
//         'Computer and IT (Information Technology) courses are designed to equip individuals with knowledge and skills in computing, software development, hardware systems, networking, and information management. These courses cater to beginners as well as advanced learners aiming to build careers in the tech industry.',
//       image: 'https://s3-alpha-sig.figma.com/img/78ad/baf5/f6db404be2d2572ca304723e74924f3b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XFfkATTZEIUqTvlYNmxC659v1EX-Aq-1uHyY6gsHYiNjZWGrq5KLpATcAQnfxZIrB~q1kh28Vae5m7YkYKdsDxBI88dzys1FkGeZM12evL4eY41n4koanEzaah~WqgdssqUo8tLX61-IHc9h6OxeQebruCmllTS8ci9aDMmrEMhDBYMIqQ~Tu2K2fOEPY2SzayzuDk4waJiJS5Y2WlrXFRuRe1wY7vPjpGUmmmpBW~24LIrddzMUrRCD0owT5DhWmFGZ311np3VcyxnTsli~A0yGQY3zVQFBFvLhvM~eUzq~RAB0KW0eWhiPoDzGa5vMGevdCQu1sBpDk6TNp7BEhQ__',
//     },
//     {
//       title:'Design & Creative Arts',
//       description:
//         'Design & Creative Arts encompass a broad range of artistic practices and techniques aimed at creating visual, physical, and functional works. These fields combine artistic creativity with technical skills to produce works in areas like visual arts, graphic design, fashion, architecture, and more.',
//       image:'https://s3-alpha-sig.figma.com/img/ebc1/9c58/46c0dd67dc9e50cbd5864749b7ddffea?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WzrkVB6Mnl03L6AXZ63aRV2lXtlK3E7cgM0WwXeDCUxEnrnrWB0pp2X~gGtI~v6k81ajaYcpt~dvpCNv3dzoB~Zobmq5vTlcP6OprnTei4DXXPcd5U95monWWruD-IGq0wZRUnMoSnX8aRu5s8z3rrhpqlGUrlLwPZ4tK6YZ7N7DgHS6-wD8l35RQnKzErRKnP5x-MM8tZhxuik-tvRec1zDyibX26UNlcxAJz7NuyKG89PSReyj4RkyW1K7DbuVoxqleS800MBQKSeKNcSQZE21ojapvQxAV~d7gFld~gyG3C6DCdBNGJWlauOQO2Fq-lWPSDinE4x~XtnmBQ4CkQ__',
//     },
//     {
//       title:'Commerce & Finance',
//       description:
//          'Commerce and Finance are fields that deal with the management of money, investment, trade, and business operations. These sectors play a crucial role in the global economy, guiding individuals and organizations to make informed decisions about investments, savings, and business practices.',
//       image:'https://s3-alpha-sig.figma.com/img/df1d/60cc/3eec435a380225af2758eb7a1a70321e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dC6zCj~~YsK9WSowWl~zlZvyezICWA7YeL3eGC9crzlrfmwz9fQ2mKP5kn9X6kPfZ9HdQtqqccXY5K7MYJ~~x5hU8mi1ocYiDSSCex-WaAzU6Da7X~NYGobfuuSNAe12MWkp7GLQvk4pN5b0P~a6pvVy44FlWIeUbn4UBuo9PJ1MS17WiKbG3Bq0opR87tcoasw7L-XrLkgVqoztaRa7MjINB8S7tMAzwpQleQHZUhSRETCQeJt-bV38GnAVs6TLFLLfP2Okx5TytSgtBIc7DT2WJSOdfWviJcGzobuWiMfQC~1iyBXzpT0iTuGv9aQmNWs8tcoUAKYjbxh9IpY3zg__',
//     },
//     {
//       title:'Specialized Courses',
//       description:
//         'Specialized Courses refer to educational programs focused on specific industries or fields of study, providing in-depth knowledge and skills for specialized careers. These courses are designed for individuals who want to pursue careers in sectors like hospitality, event management, sports, healthcare, design.',
//       image:'https://s3-alpha-sig.figma.com/img/af2c/1a95/abd0c152cb76e27251eb7c307604528c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YL5yXw~1OCCidnz7SwQ-PF8ogFCTpby8CNxCytqxNH3EECQmVu4Ie45GTDHHae080x2IkyKZIPCc3nB7BMnc653LBpRWCxt5q3SXB9LlsdGb570zVPjrscG24oxawvJ1gbPKLyD6tdY~39S4BCUjycAwTY~1-caOMcSUsrF01IzEV1L90Wr0Ai4ssg1Fl5BpVis1HutlXJ8RMGarrE-ikX~sTD9ZmYFmbjn5olmoVd9rQndUxJ1LM-KNkN81RKx9oLemiXbtThgqvj6h84DJ7Sn1QeMMvEVZFgcN43bWzGAca4FtL8kAMYIcAeSUsrf8vfOHCY6laibya05BL4I1XQ__',
//     }
//   ];

// }

// export default App;



import React from 'react';
import './Courses.css';
import Footer from './Footer';


function App() {
  const courses = [
    {
      title: 'Engineering & Technology',
      description: 'This field focuses on applying scientific principles to design, build, and innovate real-world solutions.',
      image: 'https://s3-alpha-sig.figma.com/img/d915/2b44/e749458d144057b9a79249c8888fc669?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fj5YxWuLpdqDxXvxMXHnLiy6O1qaAVoN1vjLswAYGYK6rsmt7zf06Xz0OX1trwoYQBN4tW5Ea9u-NtlFGTnBG5V~qh5JPmcTE9adkflO52qbKDakySV2It1hv~sHACSUguDpG25jsZXLnTogouc5o0csmAgoYeD8q3oaTH2v4I75azdTvSwrzaJCvBUioP~yv9TTUcmrUXNrBhYFMl7JbYlAeHh7RfZHGkizsAeEFJnkMgZE67kUpP9~dwhPdPKmftQDH-ZxaHL1~g0QNv2GGCZJBFFDRpoWnxk0hqE~Y326O7SqRK8Lz39m8KXF58Od7KxUjk4ckJy2ZOlDjyuhYQ__',
    },
    {
      title: 'Business & Management',
      description: 'Empowers students with knowledge to lead organizations, manage resources, and innovate.',
      image: 'https://s3-alpha-sig.figma.com/img/3889/29e6/a2703d82811b65466cf7900b00af64ab?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xdyk-tKNZQ8I8PRB-bG9-okOKTCMieNCpxfDAV8V1Dj~-VpTgMfR0SmcWnZwrYJI5jjKqKh3IBCxOXlze8m~DCW~S3gzRRbc3V0bGK1L8Cwtfdfhu1x8XU0wBC0Qh8RlNU~FUtl5fz5HnqiKuJDjwF8VY1ayStLH2TFBJDXbO7dspvkjBkeUae53SoWWjJQ4YD-sN9GY9YnO0gexuK-2wRVw08iVm1erKXV50vdEWdWroOSDcLemA3cG7WgsAXN3teeoX85C0oirIWdydfnVA0M9aBuR3OcUm4KStLuKeX4HQWDhTse9pDm1rLby21QyxFbF-7gSQhMaKjeeft1xsw__',
    },
    {
      title: 'Arts & Humanities',
      description: 'Focuses on human culture, expression, and thought, encouraging creativity and critical thinking.',
      image: 'https://s3-alpha-sig.figma.com/img/674f/909b/7717ef1464bbf744d2114c00f84893f9?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h7gHQPoagjKTuNOj-9Z-tMDGox9d~BpenxQtsCE07BJYRt~ovgIDvk2j-gX3icnlySUyLrIph3dVNF76LffM~R~U6w2yzLC5oTVTZkMHCmOWznTcRHRB8i85UFANH5wHpYtm5dKdIf7c8BfHxO9yZHQ7QERzyZs3S9TjUhnCtgIcBkf~~LoY3QULHPgLSXeWjP9G5JJGpJHio-cItas7IcGNKtpgcMCM~VLwxSeu9IOjWNWuXIx5s8vXw6HQCckU9Q73GM54nVeMJOldHi-gQ1XsfIEeDDsjKG9p1d1i6OHZKEm3FcpNcGUuSNhriHp7HzpXFGiJ7iWDyPHvYWGzgQ__',
    },
    {
      title: 'Medical & Health Sciences',
      description: 'Promotes health and well-being through scientific knowledge and clinical practice.',
      image: 'https://s3-alpha-sig.figma.com/img/8b5a/a59c/4829bbcf96486bee6955403a75ecef42?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZfMFx4ZBwFdkeUfp8ir8dZH2O9ayaNVY3heIYZhao2DiVEzHYzJRM0ArkFYskxTePBGH7Dd2R6oC035rN~y3Ysc1vgHvqj3XS~cNVHT4WQq7KqLhfmZwNreTzNOMvuwYWL9GqCfXEXnjd6odSGhhfCfAM2tubzKTCMp7OR0hOfZ~PRoLaq76AzlMOeMZtCQu1jAwy92XK1CWhxmQFp0BhRX5uWwYjb9nBpOkhFbrN2S0aXtE3deOD379q61DglVKAU1cUx5O1kuMb~Cpp-PTulYy5v8JC8a5dyjZbn7h5KE9eg31ALfJJNxpjbWnXQ9QhAaGIIb9O2Uo99iq4PXniQ__',
    },
    {
      title: 'Law',
      description: 'Studies the rules of society and trains students to pursue justice and governance.',
      image: 'https://s3-alpha-sig.figma.com/img/cc74/150a/c14cff28a999122e379263ffc2085131?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qax52dKqJ7NMJJkim7KQ5ckmwRPej4JvmNHmbkBkcsHOY0zR6aylWHYJRyBkO4KMxZK1zg1RnfFaNmapN6HNHBTDOYtrF1Vj4mgqvAwmgwuha7LBAEAcouXq4n5BZSIWc-hJFxV7Z453zr~XRhORCnmQ5uANeJAlE4K~-fanYuHplrvfwM0kJQvdCtFiTM2NyOqerRnb7E9Kj8hv~f~kynr1QEkpBqRPcnqWT~~2bik13hp0EVHTe85Xwn3rBKZgCmeq3SiCD8UxpcPDIJWqJ~fBHBhh8PJN3QQoJ9zKZVqBznoKhc4kVDt23rB1ZJtqTpX3QFSRO0qS1kaY2bRmxg__',
    },
    {
      title: 'Computer & IT Courses',
      description: 'Courses designed for beginners and professionals in programming, hardware, and IT management.',
      image: 'https://s3-alpha-sig.figma.com/img/78ad/baf5/f6db404be2d2572ca304723e74924f3b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XFfkATTZEIUqTvlYNmxC659v1EX-Aq-1uHyY6gsHYiNjZWGrq5KLpATcAQnfxZIrB~q1kh28Vae5m7YkYKdsDxBI88dzys1FkGeZM12evL4eY41n4koanEzaah~WqgdssqUo8tLX61-IHc9h6OxeQebruCmllTS8ci9aDMmrEMhDBYMIqQ~Tu2K2fOEPY2SzayzuDk4waJiJS5Y2WlrXFRuRe1wY7vPjpGUmmmpBW~24LIrddzMUrRCD0owT5DhWmFGZ311np3VcyxnTsli~A0yGQY3zVQFBFvLhvM~eUzq~RAB0KW0eWhiPoDzGa5vMGevdCQu1sBpDk6TNp7BEhQ__',
    },
    {
      title:'Design & Creative Arts',
      description:'Design & Creative Arts encompass a broad range of artistic practices and techniques aimed at creating visual, physical, and functional works. These fields combine artistic creativity with technical skills to produce works in areas like visual arts, graphic design, fashion, architecture, and more.',
      image:'https://s3-alpha-sig.figma.com/img/ebc1/9c58/46c0dd67dc9e50cbd5864749b7ddffea?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WzrkVB6Mnl03L6AXZ63aRV2lXtlK3E7cgM0WwXeDCUxEnrnrWB0pp2X~gGtI~v6k81ajaYcpt~dvpCNv3dzoB~Zobmq5vTlcP6OprnTei4DXXPcd5U95monWWruD-IGq0wZRUnMoSnX8aRu5s8z3rrhpqlGUrlLwPZ4tK6YZ7N7DgHS6-wD8l35RQnKzErRKnP5x-MM8tZhxuik-tvRec1zDyibX26UNlcxAJz7NuyKG89PSReyj4RkyW1K7DbuVoxqleS800MBQKSeKNcSQZE21ojapvQxAV~d7gFld~gyG3C6DCdBNGJWlauOQO2Fq-lWPSDinE4x~XtnmBQ4CkQ__',
    },
    {
      title:'Commerce & Finance',
      description:'Commerce and Finance are fields that deal with the management of money, investment, trade, and business operations. These sectors play a crucial role in the global economy, guiding individuals and organizations to make informed decisions about investments, savings, and business practices.',
      image:'https://s3-alpha-sig.figma.com/img/df1d/60cc/3eec435a380225af2758eb7a1a70321e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dC6zCj~~YsK9WSowWl~zlZvyezICWA7YeL3eGC9crzlrfmwz9fQ2mKP5kn9X6kPfZ9HdQtqqccXY5K7MYJ~~x5hU8mi1ocYiDSSCex-WaAzU6Da7X~NYGobfuuSNAe12MWkp7GLQvk4pN5b0P~a6pvVy44FlWIeUbn4UBuo9PJ1MS17WiKbG3Bq0opR87tcoasw7L-XrLkgVqoztaRa7MjINB8S7tMAzwpQleQHZUhSRETCQeJt-bV38GnAVs6TLFLLfP2Okx5TytSgtBIc7DT2WJSOdfWviJcGzobuWiMfQC~1iyBXzpT0iTuGv9aQmNWs8tcoUAKYjbxh9IpY3zg__',
    },
    {
      title:'Specialized Courses',
      description:'Specialized Courses refer to educational programs focused on specific industries or fields of study, providing in-depth knowledge and skills for specialized careers. These courses are designed for individuals who want to pursue careers in sectors like hospitality, event management, sports, healthcare, design.',
      image:'https://s3-alpha-sig.figma.com/img/af2c/1a95/abd0c152cb76e27251eb7c307604528c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YL5yXw~1OCCidnz7SwQ-PF8ogFCTpby8CNxCytqxNH3EECQmVu4Ie45GTDHHae080x2IkyKZIPCc3nB7BMnc653LBpRWCxt5q3SXB9LlsdGb570zVPjrscG24oxawvJ1gbPKLyD6tdY~39S4BCUjycAwTY~1-caOMcSUsrF01IzEV1L90Wr0Ai4ssg1Fl5BpVis1HutlXJ8RMGarrE-ikX~sTD9ZmYFmbjn5olmoVd9rQndUxJ1LM-KNkN81RKx9oLemiXbtThgqvj6h84DJ7Sn1QeMMvEVZFgcN43bWzGAca4FtL8kAMYIcAeSUsrf8vfOHCY6laibya05BL4I1XQ__',
    },
  ];

  return (
   
    <div className="app">
      <header className="header">
        {/* <h1>Courses</h1> */}
      </header>
      <div className='backnav'>
      <div class="backnav">
  <div class="title-container">
    <h1 class="course-title">Courses</h1>
  </div>
</div>

      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <div className="card-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    <Footer/>
    </div>
  );
}

export default App;

