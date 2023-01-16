import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CardFirst, TextFirst } from "../component/ServiceHelper";
const serviceContent = [
	{
		title: "Dispatching",
		content: `Connecting  `,
		header: "",
		url: "/truck1.jfif",
		service: `Dispatching Service`,
		serviceDescription: `Dispatching service for carriers and owner operators,
         receiving emergency and non-emergency calls from people in potential danger`,
	},
	{
		title: "Transportation solutions",
		content: `Connecting `,
		header: "",
		url: "/truck2.jfif",
		service: `Transportation Service`,
		serviceDescription: `To get the best and effective ways to transfer
         the resources and products from first place to destiny and the customer`,
	},
];

const Service = () => {
	return (
		<div
			style={{
				paddingTop: 10,
				background: `url('/container2.jfif') no-repeat center center`,
				backgroundSize: "cover",
				paddingBottom: 10,
			}}
			id="service"
		>
			<Typography
				textAlign="center"
				variant="h4"
				color={"#fff"}
			>
				Service
			</Typography>
			<Box padding={1}>
				<Box
					maxWidth={700}
					sx={{
						margin: "0 auto",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexWrap: "wrap",
							columnGap: 10,
							rowGap: 4,
						}}
					>
						{serviceContent.map((item, index) => {
							if (index % 2 === 0)
								return (
									<TextFirst
										key={index}
										item={item}
									/>
								);
							return (
								<CardFirst
									item={item}
									key={index}
								/>
							);
						})}
					</Box>
				</Box>
			</Box>
		</div>
	);
};

export default Service;
