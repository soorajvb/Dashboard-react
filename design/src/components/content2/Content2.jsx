import React from 'react'
import './Content2.css'
import down from '../../assets/down.png'
import image1 from '../../assets/image1.jpeg'
import image3 from '../../assets/image3.jpeg'
import image2 from '../../assets/image2.jpeg'


const Content2 = () => {
  return (
    <>
    <div>
        <div className="content2">
            <div className="item1">
                <div className="up">
                 <div className="up1">
                   <span>contract by</span><br/>
                  <h4>LIBRO Impact</h4>
                 </div>
                <button>Today <img src={down} alt="" /></button>
                </div>
                <div className="item1-image">
                  <img src={image1} alt="" />
                </div>
                <div className="item2">
                  <label> <input type="radio" name="status" value="impacted"/> Impacted</label>
<label> <input type="radio" name="status" value="non_impacted"/> Non Impacted</label>
                </div>
            </div>

                <div className="item1">
                <div className="up">
                 <div className="up1">
                   <span>Contract by</span><br/>
                  <h4>Relationship</h4>
                 </div>
                <button>Last month <img src={down} alt="" /></button>
                </div>
                <div className="item1-image">
                  <img src={image3} alt="" />
                </div>
                <div className="item2">
                  <label> <input type="radio" name="status" value="impacted"/> Impacted</label>
<label> <input type="radio" name="status" value="non_impacted"/> Non Impacted</label>
                </div>
            </div>

                <div className="item1">
                <div className="up">
                 <div className="up1">
                   <span>contract by</span><br/>
                  <h4>Financial Institution</h4>
                 </div>
                <button>Month<img src={down} alt="" /></button>
                </div>
                <div className="item1-image">
                  <img src={image2} alt="" />
                </div>
                <div className="item2">
                  <label> <input type="radio" name="status" value="impacted"/> Impacted</label>
<label> <input type="radio" name="status" value="non_impacted"/> Non Impacted</label>
                </div>
            </div>
            
        </div>
        </div>
        </>
  )
}

export default Content2
