import React ,{Component} from 'react';

export default class ImageUpload extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col-md-3" style={{ padding: "3%" }}>
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={`https://ipfs.infura.io/ipfs/${this.props.memeHash}`} width='300' height='300' />
                        </a>
                        <p></p>
                        <form onSubmit={this.props.onSubmit}>
                            <input id="f02" type="file" placeholder="Upload meme" onChange={this.props.captureMeme} />
                            <label for="f02">Upload meme</label><br></br>
                            <input type='submit' value="Submit meme" />
                        </form>
            </div>
        );
    }
}
