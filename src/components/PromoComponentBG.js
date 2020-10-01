import React from "react";
import { COMMON_CONSTANTS } from "./../constants/constants";
import promo from "../images/promo-image.png";
import ArrowRight from "../images/right-arrow.svg";
const PromoComponentBG = ({
  upperText = COMMON_CONSTANTS.mainText,
  lowerText = COMMON_CONSTANTS.lowerText
}) => {
  return (
    <>
      <div class="container class-component">
        <div class="row">
          <div class="col-md-12">
            <div class="container class-component">
              <div class="row">
                <div class="col-md-12">
                  <div class="section-title mb-5 col-md-12">
                    <h1 class="field-title field-title">HEADING HERE</h1>
                  </div>
                  <div className="promo-wrap">
                    <div
                      class="Promo-Bg Promo-section"
                      style={{
                        backgroundImage: "url(`${promo}`)",
                        minHeight: "253px"
                      }}
                    >
                      <img src={promo} alt="sample text" />
                    </div>
                    <div class="Promo-section offset-lg-1 row">
                      <div class="col-lg-9">
                        <div class="field-description">
                          <p>{COMMON_CONSTANTS.mainText}</p>

                          <p>{lowerText}</p>
                        </div>
                      </div>
                      <div class="col-lg-2 col-12 offset-lg-1 light clearfix field-link">
                        <div>
                          <a
                            class="button button--large button--white  button--withouticon d-inline-flex align-items-center justify-content-center"
                            href="#"
                          >
                            <img src={ArrowRight} class="icon-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoComponentBG;
