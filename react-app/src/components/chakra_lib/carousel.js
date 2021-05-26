import React from "react";

export default function Carousel({props}){
    return(
        <div className="container">
          <div className="carousel">
            {/*radio input for thumbnails*/}
            <input type="radio" name="slides" defaultChecked="checked" id="slide-1" />
            <input type="radio" name="slides" id="slide-2" />
            <input type="radio" name="slides" id="slide-3" />

            {/*Slide Content*/}
            <ul className="carousel__slides">
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src={props.goldImageUrl} alt="" />
                  </div>
                  <figcaption>
                    {props.goldDescription}
                    <span className="credit">{props.goldTeam}</span>
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src={props.silverImageUrl} alt="" />
                  </div>
                  <figcaption>
                    {props.silverDescription}
                    <span className="credit">{props.silverTeam}</span>
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src={props.bronzeImageUrl} alt="" />
                  </div>
                  <figcaption>
                    {props.bronzeDescription}
                    <span className="credit">{props.bronzeTeam}</span>
                  </figcaption>
                </figure>
              </li>
            </ul>

            {/*Slide Thumbnail*/}
            <ul className="carousel__thumbnails">
              <li>
                <label htmlFor="slide-1"><img src={props.goldImageUrl} alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-2"><img src={props.silverImageUrl} alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-3"><img src={props.bronzeImageUrl} alt="" /></label>
              </li>
            </ul>
          </div>
        </div>
    )
}