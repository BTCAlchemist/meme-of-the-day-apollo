import React, { Component } from 'react';
import { MDBCard } from "mdbreact";

export default class Badge extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <button class="btn peach-gradient btn-rounded" style={{ paddingLeft: "1%" }}>
                            <span class="badge badge-pill badge-danger" style={{ fontSize: "xx-large" }}>1</span>
                            <span>Upload meme</span>
                        </button>
                    </div>
                    <div className="col-md-3">
                        <button class="btn purple-gradient btn-rounded" style={{ paddingLeft: "1%" }}>
                            <span class="badge badge-pill badge-info" style={{ fontSize: "xx-large" }}>2</span>
                            <span>Submit meme</span>
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button class="btn aqua-gradient btn-rounded" style={{ paddingLeft: "1%" }}>
                            <span class="badge badge-pill badge-success" style={{ fontSize: "xx-large" }}>3</span>
                            <span>Click on meme to vote</span>
                        </button>
                    </div>
                </div>
        );
    }
}
