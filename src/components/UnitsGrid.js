export function UnitsGrid(props){
    return(
    <>
    <div class="row">
      <div class="col s12 m6 l4">
          <div class="card  lime lighten-4">
            <div class="card-content black-text">
                <span className="card-title"style={{color: props.units.due===true? "green" : "red" }}><b>{props.units.unit_name}</b></span>
                <h5>Code :{props.units.unit_code}</h5>
                <h5>Topic: {props.units.topic}</h5>
                <h5>Title: {props.units.title}</h5>
                <h5>Term: {props.units.term}</h5>
                <h6>Description: {props.units.description}</h6>
            </div>
            <div class="card-action">
            {props.auths ? (
              <>
                    <p><a href={props.units.resource} className="waves-effect waves-light btn">Lessons</a></p>
                    <p>this unit is mandated to <br/>start on :{props.units.date_start}<br/>and ends on {props.units.date_end}</p>
                    <p>Teacher: {props.units.email}</p>
              </>
              ): <>Log in To Access </> }
              <p style={{color: props.units.due===true? "blue" : "red" }}><b>This unit has {props.units.due===true? "Started" : "Ended" }</b></p>
            </div>
         </div>
      </div>
    </div>
    </>);
}