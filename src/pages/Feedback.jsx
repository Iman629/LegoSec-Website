// // import React, { useState } from 'react';
// // import '../App.css'; // Import the shared CSS file
// // import { CiTextAlignCenter } from 'react-icons/ci';

// // const Feedback = () => {

// //        return (
// //         <div className='page'>

// //         <div className="page-container">

// //             <section >
// //                 <h3>Help</h3>
// //                 <form>

// //                     <h1>Feedback</h1>
// //                     {/* <label>Feedback Title</label> */}

// //                     <input type='text' placeholder="Feedback Type" maxLength={20}/>
// //                     <br/>
// //                     {/* <label>Name (Optional)</label> */}
// //                     <br/>
// //                     <input type='text' placeholder="Name (Optional)"/>
// //                     <br/>
// //                     {/* <label>Email (Optional)</label> */}
// //                     <br/>
// //                     <input type='email' placeholder="Email (Optional)"/>
// //                     <br/>
// //                     {/* <label>Message</label> */}
// //                     <br/>
// //                     <textarea required placeholder='Message'></textarea>

// //                     <br/>
// //                     <button type='button'>Submit</button>

// //                 </form>
// //             </section>
// //         </div>

// //         </div>
// //     );



// // };

// // export default Feedback;


// import React, { useState } from 'react';
// import '../App.css';

// const Feedback = () => {

//     const [formData, setFormData] = useState({
//         type: '',
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async () => {
//         const response = await fetch('http://localhost/legosec-backend/submit_feedback.php', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         });

//         const result = await response.json();
//         alert(result.message);
//     };




//     return (
//         <div className='page'>
//             <div className="page-container">
//                 <section>
//                     <h3>Help</h3>
//                     <form>
//                         <h1>Feedback</h1>
//                         <input type='text' required name='type' placeholder="Feedback Type" maxLength={20} onChange={handleChange} />
//                         <br /><br />
//                         <input type='text' name='name' placeholder="Name (Optional)" onChange={handleChange} />
//                         <br /><br />
//                         <input type='email' name='email' placeholder="Email (Optional)" onChange={handleChange} />
//                         <br /><br />
//                         <textarea name='message' required placeholder='Message' onChange={handleChange}></textarea>
//                         <br /><br />
//                         <button type='button' onClick={handleSubmit}>Submit</button>
//                     </form>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Feedback;


