import React from 'react';

export default function ImageGallery(props: any) {

    const clickMeme = (event: any) => {
        if (window.confirm("Owner of this meme is:\n" + props.item.owner + "\n\nWould you like to vote for this Meme?")) {
            console.log('ok');
        }
    };

    return(
        <div className="col-lg-3 col-md-4 col-sm-12">
            <a href="#" className="d-block mb-4 h-100">
                <img src={`https://ipfs.infura.io/ipfs/${props.item.ipfsHash}`}
                 width='200' height='200' className=" image-thumbnail" onClick={clickMeme} />
                <span>Meme nr.: {props.id}</span><span style={{paddingLeft:"25%"}}><b>Votes: {props.item.votes}</b></span>
             </a>
        </div>
    );
}
