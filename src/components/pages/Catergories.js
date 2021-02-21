import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./Catergories.css";

function Catergories({ item }) {
	return (
		<React.Fragment>
			<Card>
				<CardImg top src="/assets/images/Music.jpg" alt="Music Card Image" />
				<CardBody>
					<CardTitle>Music</CardTitle>
					<CardText>
						Music, Say What! Give this quiz a try to see how smart you are.
					</CardText>
					<Button>Select</Button>
				</CardBody>
			</Card>

			<Card>
				<CardImg
					top
					src="/assets/images/History.jpg"
					alt="History Card Image"
				/>
				<CardBody>
					<CardTitle>History</CardTitle>
					<CardText>
						Do you know your African American History? Give this Quiz a try.
					</CardText>
					<Button>Select</Button>
				</CardBody>
			</Card>

			<Card>
				<CardImg top src="/assets/images/Sports.jpg" alt="Sports Card Image" />
				<CardBody>
					<CardTitle>Sports</CardTitle>
					<CardText>
						Basketball, Football, Soccer oh my! Think you know African American
						Sports? Give this Quiz a try.
					</CardText>
					<Button>Select</Button>
				</CardBody>
			</Card>
			<Card>
				<CardImg
					top
					src="/assets/images/Science.jpg"
					alt="Science Card Image"
				/>
				<CardBody>
					<CardTitle>Science</CardTitle>
					<CardText>
						Think you know what African American scientist invented what? Give
						this Quiz a try
					</CardText>
					<Button>Select</Button>
				</CardBody>
			</Card>
		</React.Fragment>
	);
}

export default Catergories;
