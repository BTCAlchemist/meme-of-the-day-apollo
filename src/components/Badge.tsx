import React from 'react';

const Badge = () => {
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <button className="btn peach-gradient btn-rounded" style={{ paddingLeft: "1%" }}>
                    <span className="badge badge-pill badge-danger" style={{ fontSize: "xx-large" }}>1</span>
                    <span>Upload meme</span>
                </button>
            </div>
            <div className="col-md-3">
                <button className="btn purple-gradient btn-rounded" style={{ paddingLeft: "1%" }}>
                    <span className="badge badge-pill badge-info" style={{ fontSize: "xx-large" }}>2</span>
                    <span>Submit meme</span>
                </button>
            </div>
            <div className="col-md-4">
                <button className="btn aqua-gradient btn-rounded" style={{ paddingLeft: "1%" }}>
                    <span className="badge badge-pill badge-success" style={{ fontSize: "xx-large" }}>3</span>
                    <span>Click on meme to vote</span>
                </button>
            </div>
        </div>
    );
}

export default Badge;