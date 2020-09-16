import React ,{Component} from 'react';

export default class ImageGallery extends Component{

    constructor(props){
        super(props);

    }

    clickMeme =(event) =>{
       if(window.confirm("Owner of this meme is:\n"+this.props.item.owner + "\n\nWould you like to vote for this Meme?"))
       {
         console.log('ok');
       }
    }

    render(){
        return(
            <div className="col-lg-3 col-md-4 col-sm-12">
                <a href="#" class="d-block mb-4 h-100">
                    <img src={`https://ipfs.infura.io/ipfs/${this.props.item.ipfsHash}`}
                     width='200' height='200' className=" image-thumbnail" onClick={this.clickMeme} />
                     <p>
                        <span>Meme nr.: {this.props.id}</span><span style={{paddingLeft:"25%"}}><b>Votes: {this.props.item.votes}</b></span>
                     </p>
                 </a>
            </div>
        );
    }
}
