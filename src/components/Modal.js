import React from "react";
import './Modal.css'
import { SlArrowLeft } from "react-icons/sl";

 const Modal=({isOpen, onClose, children,handleSaveSegment})=>{
    if(!isOpen) return null;

    return(
       
            <div className={`right-side-modal ${isOpen ? 'open' : ''}`}>
              <div className="modal-header">
                <div style={{display: 'flex', alignItems: 'center' }}>
                <span onClick={onClose}><SlArrowLeft /></span>
                  <h3 style={{marginLeft: "10px"}}>Saving Segment</h3>
                  </div>
                </div>
              <div className="modal-content">
                
                <div className="modal-body">
                {children}
                </div> 
              </div>
              <div className="modal-footer">
                    <button className="btn-save" onClick={handleSaveSegment}>Save the Segment</button>
                    <button className="btn-cancel" onClick={onclose}>Cancel</button>
                </div>
            </div>
        
    )
 }
export default Modal;