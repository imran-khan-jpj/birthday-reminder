
const Person = ({person}) => {
	const {name, image} = person;
	return (
			<div className="d-flex">
			  <img src={image} alt="Branulla" className="rounded-circle p-2 m-2" height="100" width="100" />
			  <div className="pt-4">
			    <h3 className="pb-0 mb-0">{name}</h3>
			    <div>Date of Birth</div>
			  </div>
			</div>
		);
}

export default Person;