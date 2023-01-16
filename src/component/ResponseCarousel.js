import { PersonPin } from "@mui/icons-material";
import { Box, Button, Rating, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const CaroItem = ({ item }) => {
	return (
		<Box
			maxWidth={500}
			p={1}
			sx={{
				margin: "0 auto",
			}}
		>
			<Box>
				<Button variant="p">
					<PersonPin fontSize="large" />
					<Typography ml={1}>{item.name}</Typography>{" "}
				</Button>
				<Typography>{item.content}</Typography>
			</Box>
			<Box
				sx={{
					margin: "0 auto",
					width: 150,
				}}
			>
				<Typography
					component={"legend"}
					textAlign="center"
				>
					Rating
				</Typography>
				<Rating
					readOnly
					name="user-rating"
					value={item.value}
				/>
			</Box>
		</Box>
	);
};
const material = [
	{
		name: "George Ac",
		content: `I recently used LogisticWeb for a shipment of fragile items
         and was extremely impressed with their service. The website was easy
         to navigate and the booking process was seamless. The customer service
          team was very helpful and responsive to all of my inquiries. The shipment
          arrived on time and in perfect condition. I appreciate the extra care and attention
          that LogisticWeb gave to my package, and I will definitely be using them for all of my
          future shipping needs. I highly recommend LogisticWeb for anyone looking for a reliable
          and professional logistics provider`,
		value: 4,
	},
	{
		name: "Alen Mc",
		content: `I recently used LogisticWeb for a large shipment of 
        commercial goods and I was extremely satisfied with their service. 
        The team was very professional and efficient throughout the entire process, 
        from the initial quote to the final delivery. The communication was excellent and 
        the tracking system was very helpful in keeping me informed of the status of my shipment. 
        The delivery was made on time and the goods arrived in perfect condition. Overall, I highly `,
		value: 5,
	},
];

const UserResponse = () => {
	return (
		<>
			<Typography
				textAlign={"center"}
				variant="h4"
				marginTop={3}
			>
				What customers say about us
			</Typography>
			<Carousel>
				{material.map(item => (
					<CaroItem
						key={item.name}
						item={item}
					/>
				))}
			</Carousel>
		</>
	);
};

export default UserResponse;
