import React from "react";
import { useParams } from "react-router-dom";

function TodoDetails(props) {
	const { key } = useParams();
	const deed = props.getDeed(key);

	return (
		<section>
			{deed.done && <p className="has-text-success">Completed</p>}
			<h1>{deed.title}</h1>
			<p>{deed.createdAt}</p>
			{deed.desc && <p>{deed.desc}</p>}
			{deed.image && (
				<p>
					<img src={deed.image} alt="illustration" />
				</p>
			)}
		</section>
	);
}

export default TodoDetails;
