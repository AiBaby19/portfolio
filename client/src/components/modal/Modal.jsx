import React, {Component} from 'react';
import './modal.css';

class Modal extends Component {

    //click outside modal to close
    componentWillMount() {
        document.addEventListener('click', this.closeThisModal, false)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeThisModal, false)
    }

    closeThisModal = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this
            .props
            .closeModal();
    }

    render() {
        const index = this.props.certificationIndex;
        const certifications = this.props.certifications;
        return (
            <div className="blackBackground">
                <div className="outer-modal-div">
                    <button className="btn-close-modal" onClick={(e) => this.closeThisModal(e)}>X</button>
                    <div className="inner-modal-div" ref={node => this.node = node}>
                        <h1 class="certification-headline">{certifications[index].title}</h1>
                        <div className="img-info-div">
                            <p className="certification-info">{certifications[index].details}</p>
                            <div
                                className="3d-outer-container"
                                style={{
                                perspective: "40px"
                            }}>
                                <div className="certification-image">
                                    <a target="#" rel="noopener noreferrer" href={certifications[index].link}><img
                                        src={certifications[index].bigImg}
                                        alt={certifications[index].bigImgAlt}
                                        height='250px'
                                        width='350px'/></a>
                                </div>
                            </div>
                            <a target="#" rel="noopener noreferrer" href={certifications[index].link}className="certification-link">Watch Certification</a>
                        </div>
                        {/* <div style={{margin: 'auto 0', textAlign: 'center'}}>
              <button style={{border: 'solid 1px lightgrey', width: '150px', height: '30px'}} onClick={()=>console.log('hi')}><a href={certifications[index].link}>Watch</a></button>
            </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;