import "../styles/Panel.css";

const alternateOrdering = (id) => {

  if(id % 2===0){

    let imageOrder = 'order-last';
    let descriptionOrder = 'order-sm-first';

    return {imageOrder, descriptionOrder}

  }
  
  if (Math.abs(id % 2) === 1) {

    let imageOrder = 'order-sm-first';
    let descriptionOrder = 'order-last';

    return {imageOrder, descriptionOrder}

  }

};


function Panel({id,title,image,description,skillsUsed,imageBorder}) {

  // Show images in a left right alternating pattern on screens larger than a typical mobile

  let ordering = alternateOrdering(id);
  let imageOrder = ordering.imageOrder,
      descriptionOrder  = ordering.descriptionOrder;
  

  return (
    
    <div className="container-fluid p-5 my-5 Panel">
      <h4 className = "panelTitle"><b>{title}</b> </h4>
      
      <div className="row">
        <div className="col-sm pt-5">
          <img src= {image} className = {"img-thumbnail bg-" + imageBorder + " " + imageOrder} alt="Java game.">
          </img>
        </div>

        <div className = {"col-sm pt-5 " + descriptionOrder}>
        <p> <b>What:</b> {description.what} </p>
        <p><b>Why:</b> {description.why} </p>
        
        <p> {skillsUsed.map(function(skill) {

        return <span key = {skill}  className = "coloredBox"> {skill} </span>

        })} </p>
        
   
        </div>
    
      </div>
     
    </div>

);
}

export default Panel;