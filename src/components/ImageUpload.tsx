import React from 'react';

const ImageUpload = (props: any) => {
    return (
        <div className="col-md-3" style={{ padding: "3%" }}>
            <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={`https://ipfs.infura.io/ipfs/${props.memeHash}`} width='300' height='300' />
            </a>
            <p></p>
            <form onSubmit={props.onSubmit}>
                <input id="f02" type="file" placeholder="Upload meme" onChange={props.captureMeme} />
                <label htmlFor="f02">Upload meme</label><br></br>
                <input type='submit' value="Submit meme" />
            </form>
        </div>
    );
}

export default ImageUpload;