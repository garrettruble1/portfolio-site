import React from 'react';
import './ConsoleCarousel.css';
import styled from 'styled-components';

class ConsoleCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            length: this.props.previewImages.length,
            images: this.props.previewImages,
        }
    }

    goToPrevSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;

        if (index < 1) {
            index = length - 1;
        } else {
            index--;
        }

        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;

        if (index === length - 1) {
            index = 0;
        } else {
            index++;
        }

        this.setState({
            activeIndex: index
        });
    }

    render() {

        const PreviewImage = styled.div`
        height: 100%;
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        `;

        const ImageLabelContainer = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 32px;
            position: absolute;
            top: 3%;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            background-color: transparent;
        `;

        const ImageLabel = styled.span`
            opacity: 0.7;
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0px 12px;
            border-radius: 16px;
            background-color: #101010;
            font-size: 90%;
            font-weight: 200;
            color: #DDDFE2;
        `;

        return(
            <div className='carouselContainer'>
                <button className={this.state.length > 1 ? 'prevImage' : 'hidden'} onClick={() => this.goToPrevSlide()}>
                    <div className='backArrow'></div>
                </button>

                {this.state.images.map((image, index) => {
                    return (
                        
                        <PreviewImage className={index === this.state.activeIndex ? 'active' : 'hidden'} style={{backgroundImage: `url(${image.image})`}} key={index}>
                            <ImageLabelContainer>
                                <ImageLabel>{image.label}</ImageLabel>
                            </ImageLabelContainer>
                        </PreviewImage>

                    )

                    })
                }
                
                <button className={this.state.length > 1 ? 'nextImage' : 'hidden'} onClick={() => this.goToNextSlide()}>
                    <div className='forwardArrow'></div>
                    </button>
            </div>
        )
    }
}

export default ConsoleCarousel;