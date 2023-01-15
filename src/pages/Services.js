import { Card, CardContent, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
const serviceContent = [
	{
		title: "Tranport Solution",
		content: `It is a long established fact that a
         reader will be distracted by the `,
		header: "",
		url: "https://p4.wallpaperbetter.com/wallpaper/886/58/531/barcelona-cargo-catalonia-commerce-wallpaper-preview.jpg",
	},
	{
		title: "Tranport Solution",
		content: `It is a long established fact that a
         reader will be distracted by the `,
		header: "",
		url: "https://c4.wallpaperflare.com/wallpaper/94/771/647/dusk-industrial-ship-cargo-wallpaper-preview.jpg",
	},
];
const whywithus = [
	{
		title: `Trused By all users`,
		content: `content here', making it look like
         readable English. Many desktop
          publishing packages and web page 
          editors now use Lorem Ipsum as their 
          default model text, and a search for 'lorem ipsum' will 
        uncover many web sites still in their infancy.`,
	},
];
const Service = () => {
	return (
		<div
			style={{
				paddingTop: 10,
				background: "#eee",
			}}
		>
			<Typography textAlign="center">Service</Typography>
			<Box padding={1}>
				<Stack
					direction={{ sm: "row", xs: "column" }}
					alignItems="center"
					justifyContent={"center"}
					gap={2}
				>
					{serviceContent.map(item => (
						<Card
							key={item}
							sx={{
								minHeight: 400,
								maxWidth: 350,
								background: `url(${item.url}) no-repeat center center`,

								backgroundSize: "cover",
								minWidth: 200,
							}}
						>
							<Box
								sx={{
									background: "rgba(0,0,0,0.3)",
									height: 400,
									display: "block",
								}}
							>
								<CardContent>
									<Typography
										textAlign="center"
										sx={{
											marginTop: 10,
										}}
										variant="h5"
										color={"#fff"}
									>
										{item.title}
									</Typography>
									<Typography
										textAlign="center"
										color={"#fff"}
									>
										{item.content}
									</Typography>
								</CardContent>
							</Box>
						</Card>
					))}
				</Stack>
				<Box
					paddingTop={2}
					bgcolor="#cec"
				>
					<Typography
						textAlign={"center"}
						variant="h4"
					>
						Why ship with us
					</Typography>
					{whywithus.map(item => (
						<Box
							key={item}
							maxWidth={500}
							sx={{
								margin: "0 auto",
							}}
						>
							<Typography textAlign={"center"}>{item.title}</Typography>
							<Typography textAlign={""}>{item.content}</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</div>
	);
};

export default Service;
