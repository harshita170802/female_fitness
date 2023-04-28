import React from "react"
import '../Component/css/plans.css';
export const PlanFrom =()=>{
    return(
    <div className="planbody">
      <br/>
      <br/>
      <br/>
      <br/>
      <div class="plancontainer">
        <div class="planform">
          <header class="planheader">Plans</header>
          <form class="plansform" >
            <div class="planfield planinput-planfield">
              <label>NAME</label><br />
              <input
                type="name"
                placeholder="Name"
                class="planname"
                id="name"
                autocomplete="off"
              />
            </div>
            <br /><br />

            <div class="planfield planinput-planfield">
              <label>HEIGHT</label><br />
              <input
                type="number"
                placeholder="Height in cm"
                class="Height"
                id="Height"
                autocomplete="off"
                pattern="[0-9]{3}"
              />
            </div>
            <br /><br />

            <div class="planfield planinput-planfield">
              <label>WEIGHT</label><br />
              <input
                type="number"
                placeholder="Weight in cm"
                class="Weight"
                id="Weight"
                autocomplete="off"
                pattern="[0-9]{3}"
              />
            </div>
            <br /><br />

            <hr />
            <br />
            <br />

            
          </form>
          <a href="/" >
            <div class="planfield planbutton-planfield">
              <button type="submit" onClick="">
                Proceed to Checkout
              </button>
            </div>
          </a>

          <br />
          <br />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>

    )
}