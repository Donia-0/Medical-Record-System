import React, { useEffect } from "react";
import style from "../../Css/Pill/Pill.module.css";
import SelectionField from "./SelectionField";
import AOS from "aos";
import "aos/dist/aos.css";

const PillIdentifier = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const ListOfColors = [
    "BLACK GREEN",
    "BLACK WHITE",
    "BLUE",
    "BLUE BLUE",
    "BLUE BROWN",
    "BLUE GRAY",
    "BLUE GREEN",
    "BLUE ORANGE",
    "BLUE PINK",
    "BLUE PURPLE",
    "BLUE WHITE",
    "BLUE YELLOW",
    "BROWN",
    "BROWN PINK",
    "BROWN WHITE",
    "BROWN YELLOW",
    "GRAY",
    "GRAY ORANGE",
    "GRAY PURPLE",
    "GRAY YELLOW",
    "GREEN",
    "GREEN BLUE",
    "GREEN GREEN",
    "GREEN ORANGE",
    "GREEN PINK",
    "GREEN WHITE",
    "ORANGE",
    "ORANGE BLUE",
    "ORANGE BROWN",
    "ORANGE GRAY",
    "ORANGE WHITE",
    "PINK",
    "PINK BLACK",
    "PINK BLUE",
    "PINK GREEN",
    "PINK WHITE",
    "PURPLE",
    "PURPLE BLUE",
    "PURPLE ORANGE",
    "RED",
    "RED WHITE",
    "TURQUOISE",
    "WHITE",
    "WHITE BLUE",
    "WHITE BROWN",
    "WHITE GRAY",
    "WHITE GREEN",
    "WHITE ORANGE",
    "WHITE PINK",
    "WHITE RED",
    "WHITE WHITE",
    "WHITE YELLOW",
    "YELLOW",
    "YELLOW BLACK",
    "YELLOW BROWN",
    "YELLOW PURPLE",
    "YELLOW WHITE",
  ];

  const ListOfShapes = [
    "PENTAGON (5 SIDED)",
    "DIAMOND",
    "CAPSULE",
    "RECTANGLE",
    "OVAL",
    "TEAR",
    "ROUND",
    "FREEFORM",
    "BULLET",
    "TRAPEZOID",
    "HEXAGON (6 SIDED)",
    "DOUBLE CIRCLE",
    "SQUARE",
    "OCTAGON (8 SIDED)",
    "TRIANGLE",
  ];
  const renderedColors = ListOfColors.map((color) => {
    return (
      <option value={`${color.toLocaleLowerCase()}`}>
        {color.toLowerCase()}
      </option>
    );
  });
  const renderedShapes = ListOfShapes.map((shape) => {
    return (
      <option value={`${shape.toLocaleLowerCase()}`}>
        {shape.toLowerCase()}
      </option>
    );
  });
  return (
    <div className={style.add_pill_form_container}>
      <div className={style.add_pill}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.pill_img_container}>
              <div className={style.pill_container_header}>
                <span className={style.add_pill_header}>Search Drug</span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.add_pill_form}>
              <form
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="form-group"
              >
                <div className={`row ${style.field}`}>
                  <SelectionField
                    style={{ marginRight: "10px" }}
                    labelName="Color"
                    options={renderedColors}
                    selectName="Choose Color"
                  />
                  <SelectionField
                    labelName="Shape"
                    options={renderedShapes}
                    selectName="Choose Shape"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={style.add_btn}>
                      <button className="btn btn-primary mb-2">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillIdentifier;
