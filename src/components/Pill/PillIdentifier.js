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
                      <button className="btn btn-primary mb-2">Search</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className={style.textheader}>
          <h1>How to use our Pill identifier to view drug images?</h1>
        </div>
        <div className={style.textparagraph}>
          <p style={{ marginTop: "10px" }}>
            Using pill finder to find drug images is pretty simple and
            straightforward. You can easily identify pills and view pill images
            a number of ways.
          </p>
        </div>
        <div className={style.cards}>
          <div class="row">
            <div class="col-sm-6">
              <div className={style.cardStyle}>
                <div
                  class="card text-center"
                  style={{
                    width: "80%",
                    height: "80%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    class="card-body"
                    style={{
                      padding: "0",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <h5
                      class="card-title"
                      style={{ color: "#307b8c", fontWeight: "bold" }}
                    >
                      Color
                    </h5>
                    <p class="card-text" style={{ fontWeight: "500" }}>
                      Used to search for pill image by pill color.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div className={style.cardStyle}>
                <div
                  class="card text-center"
                  style={{
                    width: "80%",
                    height: "80%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    class="card-body"
                    style={{
                      padding: "0",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <h5
                      class="card-title"
                      style={{ color: "#307b8c", fontWeight: "bold" }}
                    >
                      Shape
                    </h5>
                    <p class="card-text" style={{ fontWeight: "500" }}>
                      Used to search for pill image by the shape of the pill.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={style.info}>
          <h2>Why it's important to identify pills, using a pill ID tool?</h2>
          <p>
            It's important to be informed with what pills may in your home.
            Periodically check your medicine cabinet for expired prescriptions.
            If you're unsure what the pills in your medicine cabinet are, use
            our pill identifier with pictures, to determine the pill's name and
            use.
          </p>
          <h2>
            What if you don't find any pill images when using our pill
            identifier?
          </h2>
          <p>
            If you don't find any pill images, when using our drug identifier,
            you can always take the medication to a pharmacist to have them help
            you identify it. Though this is more time consuming, it will help
            you identify pills that may be left in your medicine cabinet. If you
            need to dispose of medications, prescription drop off locations can
            be found through your local law enforcement.
          </p>
          <div className="steps ">
            <h3>Safety tips for storing medications</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    Be sure to store your medications in a cool, dry place
                  </li>
                  <li>
                    Heat and moisture from your shower or bath can damage
                    medicines, making them less potent or causing them to go bad
                    before the expiration date
                  </li>
                  <li>
                    Don't store medications by the stove or any type of hot
                    appliance
                  </li>
                  <li>Always keep medicine in its original container</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    Take the cotton ball out of the medicine bottle. It pulls
                    moisture into the bottle
                  </li>
                  <li>
                    Ask your pharmacists if your medication has specific storage
                    instructions
                  </li>
                  <li>
                    Store medication out of reach and sight of children and with
                    a child latch or lock
                  </li>
                </ul>
              </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default PillIdentifier;
