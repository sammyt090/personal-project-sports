// import React from 'react'
// import mobiscroll from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';

// mobiscroll.settings = {
//     theme: 'ios',
//     themeVariant: 'light',
//     display: 'bubble'
// };

// const now = new Date();

// class Time extends React.Component {
//     show = () => {
//         this.external.instance.show();
//     }
    
//     setExternal = (comp) => {
//         this.external = comp;
//     }
//     render() {
//         return (
//             <div>
//                 <mobiscroll.Form className="mbsc-form-box">
//                     <div className="mbsc-grid">
//                         <div className="mbsc-row">
//                             <div className="mbsc-col-sm-12 mbsc-col-md-7">
//                                 <mobiscroll.FormGroup>
//                                     <mobiscroll.FormGroupTitle>Date and time in the same field</mobiscroll.FormGroupTitle>
//                                     <div className="mbsc-row mbsc-form-grid">
//                                         <div className="mbsc-col-sm-12 mbsc-col-lg-6">
//                                             <mobiscroll.Datetime value={now} dateWheels="|D M d|">
//                 								<mobiscroll.Input inputStyle="box" labelStyle="stacked">Compact</mobiscroll.Input>
//                 							</mobiscroll.Datetime>
//                                         </div>
//                                         <div className="mbsc-col-sm-12 mbsc-col-lg-6">
//                                             <mobiscroll.Datetime value={now}>
//                 								<mobiscroll.Input inputStyle="box" labelStyle="stacked">Expanded</mobiscroll.Input>
//                 							</mobiscroll.Datetime>
//                                         </div>
//                                     </div>
//                                 </mobiscroll.FormGroup>
//                             </div>
//                             <div className="mbsc-col-sm-12 mbsc-col-md-7">
//                                 <mobiscroll.FormGroup>
//                                     <mobiscroll.FormGroupTitle>Date and time in the same field</mobiscroll.FormGroupTitle>
//                                     <div className="mbsc-row mbsc-form-grid">
//                                         <div className="mbsc-col-sm-12 mbsc-col-lg-6">
//                                             <mobiscroll.Date value={now}>
//                 								<mobiscroll.Input inputStyle="box" labelStyle="stacked">Date</mobiscroll.Input>
//                 							</mobiscroll.Date>
//                                         </div>
//                                         <div className="mbsc-col-sm-12 mbsc-col-lg-6">
//                                             <mobiscroll.Time value={now}>
//                 								<mobiscroll.Input inputStyle="box" labelStyle="stacked">Time</mobiscroll.Input>
//                 							</mobiscroll.Time>
//                                         </div>
//                                     </div>
//                                 </mobiscroll.FormGroup>
//                             </div>
//                         </div>
//                     </div>
//                 </mobiscroll.Form>
//                 <div className="mbsc-grid">
//                     <div className="mbsc-row">
//                         <div className="mbsc-col-sm-12 mbsc-col-md-6">
//                             <label htmlFor="demo-non-form">Date</label>
//                             <mobiscroll.Datetime>
//                                 <input className="demo-non-form" placeholder="Please Select..." />
//                             </mobiscroll.Datetime>
//                         </div>
//                         <div className="mbsc-col-sm-12 mbsc-col-md-6">
//                             <div className="mbsc-row mbsc-align-items-end">
//                                 <div className="mbsc-col-9">
//                                     <label htmlFor="demo-external">Show on button click only</label>
//                                     <mobiscroll.Datetime
//                                         ref={this.setExternal}
//                                         value={now}
//                                         showOnTap={false}
//                                         showOnFocus={false}
//                                     >
//                                         <input id="demo-external" className="demo-non-form" />
//                                     </mobiscroll.Datetime>
//                                 </div>
//                                 <div className="mbsc-col-3 external-container">
//                                     <button onClick={this.show} className="external-button">Show</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }    
// }
// export default Time





// // import React,{useState} from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import DropdownButton from 'react-bootstrap/DropdownButton';
// // import Dropdown from 'react-bootstrap/Dropdown'
// // import {withRouter} from 'react-router'


// // function Time() {
 
// //   const [value,setValue]=useState('');
// //   const handleSelect=(e)=>{
// //     console.log(e);
// //     setValue(e)
   
// //   }
// //   return (
// //     <div className="App container">
      
// //       <DropdownButton
// //       alignRight
// //       title="Time"
// //       id="dropdown-menu-align-right"
// //       onSelect={handleSelect}
// //         >
// //               <Dropdown.Item eventKey="AM" >AM</Dropdown.Item>
// //               <Dropdown.Item eventKey="PM">PM</Dropdown.Item>
// //       </DropdownButton>
// //       <h4>You selected {value}</h4>
// //     </div>
// //   );
// // }

// // export default withRouter(Time)